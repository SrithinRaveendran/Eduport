import { Badge, LevelBadge } from "./ui";

export default function CourseCard({ course: c }) {
  return (
    <div
      style={{ background: "#f8fafc", borderRadius: 12, border: "1.5px solid #e2e8f0", overflow: "hidden", transition: "box-shadow 0.2s" }}
      onMouseEnter={e => e.currentTarget.style.boxShadow = "0 4px 16px rgba(79,70,229,0.1)"}
      onMouseLeave={e => e.currentTarget.style.boxShadow = ""}
    >
      <div style={{ position: "relative", height: 130, background: "#e2e8f0" }}>
        <img
          src={c.imgae} alt={c.title}
          onError={e => { e.target.style.display = "none"; e.target.nextSibling.style.display = "flex"; }}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
        <div style={{ display: "none", width: "100%", height: "100%", alignItems: "center", justifyContent: "center", fontSize: 36, background: "#f1f5f9", position: "absolute", top: 0, left: 0 }}>📚</div>
        <div style={{ position: "absolute", top: 8, right: 8 }}>
          <Badge color={c.category}>{c.category || "—"}</Badge>
        </div>
      </div>
      <div style={{ padding: "0.85rem" }}>
        <div style={{ fontWeight: 700, fontSize: 13.5, color: "#0f172a", marginBottom: 4, overflow: "hidden", display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical" }}>{c.title}</div>
        <div style={{ fontSize: 12, color: "#94a3b8", marginBottom: 8 }}>by {c.intructor}</div>
        <div style={{ display: "flex", gap: 8, marginBottom: 8, flexWrap: "wrap" }}>
          <LevelBadge level={c.level} />
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 12, color: "#64748b", borderTop: "1px solid #f1f5f9", paddingTop: 8 }}>
          <span>📖 {c.lessons} lessons</span>
          <span>⏱ {c.duration}</span>
        </div>
        <div style={{ marginTop: 8, fontWeight: 700, fontSize: 15, color: c.price ? "#4f46e5" : "#16a34a" }}>
          {c.price ? `₹${Number(c.price).toLocaleString()}` : "Free"}
        </div>
      </div>
    </div>
  );
}
