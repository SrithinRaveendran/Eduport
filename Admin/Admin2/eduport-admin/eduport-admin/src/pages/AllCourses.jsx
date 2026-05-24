import { useState } from "react";
import { Btn, Badge, LevelBadge, EmptyState } from "../components/ui";

export default function AllCourses({ courses, loading, error, onRefresh, onAddCourse }) {
  const [search, setSearch] = useState("");
  const [catFilter, setCatFilter] = useState("");
  const [levelFilter, setLevelFilter] = useState("");

  const filtered = courses.filter(c => {
    const q = search.toLowerCase();
    const matchQ = !q || c.title?.toLowerCase().includes(q) || c.intructor?.toLowerCase().includes(q) || c.category?.toLowerCase().includes(q);
    const matchCat = !catFilter || c.category === catFilter;
    const matchLevel = !levelFilter || c.level === levelFilter;
    return matchQ && matchCat && matchLevel;
  });

  const cats = [...new Set(courses.map(c => c.category).filter(Boolean))];
  const levels = [...new Set(courses.map(c => c.level).filter(Boolean))];

  const selectStyle = {
    background: "#f8fafc", border: "1.5px solid #e2e8f0", borderRadius: 8,
    padding: "0.45rem 0.75rem", fontSize: 13, color: "#475569",
    fontFamily: "inherit", outline: "none",
  };

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1.5rem", flexWrap: "wrap", gap: 12 }}>
        <div>
          <h2 style={{ fontSize: 20, fontWeight: 700, color: "#0f172a", margin: 0 }}>All Courses</h2>
          <p style={{ fontSize: 13, color: "#64748b", margin: "4px 0 0" }}>{courses.length} courses on the platform</p>
        </div>
        <div style={{ display: "flex", gap: 8 }}>
          <Btn variant="ghost" onClick={onRefresh}>🔄 Refresh</Btn>
          <Btn onClick={onAddCourse}>➕ Add Course</Btn>
        </div>
      </div>

      {error && (
        <div style={{ background: "#fef2f2", border: "1.5px solid #fecaca", borderRadius: 10, padding: "0.75rem 1rem", marginBottom: "1rem", fontSize: 13, color: "#991b1b" }}>
          ⚠️ {error}
        </div>
      )}

      <div style={{ background: "#fff", borderRadius: 14, border: "1.5px solid #e2e8f0", overflow: "hidden", boxShadow: "0 1px 3px rgba(0,0,0,0.03)" }}>
        {/* Toolbar */}
        <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "1rem 1.25rem", borderBottom: "1px solid #f1f5f9", flexWrap: "wrap" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, background: "#f8fafc", border: "1.5px solid #e2e8f0", borderRadius: 8, padding: "0.45rem 0.85rem", flex: 1, maxWidth: 300 }}>
            <span style={{ color: "#94a3b8" }}>🔍</span>
            <input
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Search courses, instructors..."
              style={{ background: "none", border: "none", outline: "none", fontSize: 13, color: "#0f172a", fontFamily: "inherit", width: "100%" }}
            />
          </div>
          <select value={catFilter} onChange={e => setCatFilter(e.target.value)} style={selectStyle}>
            <option value="">All Categories</option>
            {cats.map(c => <option key={c}>{c}</option>)}
          </select>
          <select value={levelFilter} onChange={e => setLevelFilter(e.target.value)} style={selectStyle}>
            <option value="">All Levels</option>
            {levels.map(l => <option key={l}>{l}</option>)}
          </select>
          <div style={{ marginLeft: "auto", fontSize: 12, color: "#94a3b8" }}>
            {filtered.length} result{filtered.length !== 1 ? "s" : ""}
          </div>
        </div>

        {loading ? (
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "4rem", gap: 14 }}>
            <div style={{ width: 36, height: 36, border: "3px solid #e2e8f0", borderTopColor: "#4f46e5", borderRadius: "50%", animation: "spin 0.8s linear infinite" }} />
            <div style={{ fontSize: 13, color: "#94a3b8" }}>Fetching courses from server...</div>
          </div>
        ) : filtered.length === 0 ? (
          <EmptyState
            icon="📭"
            title={search || catFilter || levelFilter ? "No courses match your filters" : "No courses yet"}
            sub={search ? "Try a different search term" : "Add your first course using the button above"}
          />
        ) : (
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr style={{ background: "#f8fafc" }}>
                  {["Course", "Category", "Instructor", "Price", "Duration", "Lessons", "Level"].map(h => (
                    <th key={h} style={{ padding: "0.7rem 1.1rem", textAlign: "left", fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: 0.8, color: "#94a3b8", borderBottom: "1px solid #f1f5f9", whiteSpace: "nowrap" }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {filtered.map((c, i) => (
                  <tr
                    key={c._id || i}
                    style={{ borderBottom: "1px solid #f8fafc", transition: "background 0.15s" }}
                    onMouseEnter={e => e.currentTarget.style.background = "#fafbff"}
                    onMouseLeave={e => e.currentTarget.style.background = ""}
                  >
                    <td style={{ padding: "0.85rem 1.1rem" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                        <img
                          src={c.imgae} alt={c.title}
                          onError={e => { e.target.style.display = "none"; e.target.nextSibling.style.display = "flex"; }}
                          style={{ width: 46, height: 38, objectFit: "cover", borderRadius: 8, border: "1.5px solid #e2e8f0", flexShrink: 0 }}
                        />
                        <div style={{ display: "none", width: 46, height: 38, background: "#f1f5f9", borderRadius: 8, alignItems: "center", justifyContent: "center", fontSize: 18, flexShrink: 0 }}>📚</div>
                        <div>
                          <div style={{ fontWeight: 600, fontSize: 13.5, color: "#0f172a", maxWidth: 200, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{c.title}</div>
                          <div style={{ fontSize: 11.5, color: "#94a3b8", marginTop: 2, maxWidth: 200, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{c.description}</div>
                        </div>
                      </div>
                    </td>
                    <td style={{ padding: "0.85rem 1.1rem" }}><Badge color={c.category}>{c.category || "—"}</Badge></td>
                    <td style={{ padding: "0.85rem 1.1rem", fontSize: 13, color: "#475569", whiteSpace: "nowrap" }}>{c.intructor || "—"}</td>
                    <td style={{ padding: "0.85rem 1.1rem", fontFamily: "monospace", fontSize: 13, fontWeight: 600, color: c.price ? "#4f46e5" : "#16a34a", whiteSpace: "nowrap" }}>
                      {c.price ? `₹${Number(c.price).toLocaleString()}` : "Free"}
                    </td>
                    <td style={{ padding: "0.85rem 1.1rem", fontSize: 13, color: "#64748b", whiteSpace: "nowrap" }}>⏱ {c.duration || "—"}</td>
                    <td style={{ padding: "0.85rem 1.1rem", fontFamily: "monospace", fontSize: 13, color: "#64748b", whiteSpace: "nowrap" }}>📖 {c.lessons || "—"}</td>
                    <td style={{ padding: "0.85rem 1.1rem" }}><LevelBadge level={c.level || "—"} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
