import { useState } from "react";
import { API, CATEGORY_COLORS, EMPTY_FORM } from "../constants";
import { Input, Btn, Card, Badge, LevelBadge } from "../components/ui";

export default function AddCourse({ onSuccess }) {
  const [form, setForm] = useState(EMPTY_FORM);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const set = (key) => (e) => setForm(f => ({ ...f, [key]: e.target.value }));

  const handleSubmit = async () => {
    const required = ["title", "description", "category", "intructor", "duration", "level", "lessons", "imgae"];
    const missing = required.filter(k => !form[k]);
    if (missing.length) { setError("Please fill all required fields: " + missing.join(", ")); return; }
    setError("");
    setLoading(true);
    try {
      const body = { ...form, price: form.price ? Number(form.price) : 0, lessons: Number(form.lessons) };
      const res = await fetch(API, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body) });
      if (!res.ok) throw new Error("Server error: " + res.status);
      setSuccess("Course published successfully! 🎉");
      setForm(EMPTY_FORM);
      if (onSuccess) onSuccess();
      setTimeout(() => setSuccess(""), 4000);
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1.5rem", flexWrap: "wrap", gap: 12 }}>
        <div>
          <h2 style={{ fontSize: 20, fontWeight: 700, color: "#0f172a", margin: 0 }}>Add New Course</h2>
          <p style={{ fontSize: 13, color: "#64748b", margin: "4px 0 0" }}>Fill in all details to publish a course on EduPort</p>
        </div>
        <div style={{ display: "flex", gap: 8 }}>
          <Btn variant="ghost" onClick={() => setForm(EMPTY_FORM)}>🗑️ Clear</Btn>
          <Btn onClick={handleSubmit} style={{ opacity: loading ? 0.7 : 1 }}>
            {loading ? "Publishing..." : "🚀 Publish Course"}
          </Btn>
        </div>
      </div>

      {error && <div style={{ background: "#fef2f2", border: "1.5px solid #fecaca", borderRadius: 10, padding: "0.75rem 1rem", marginBottom: "1rem", fontSize: 13, color: "#991b1b" }}>⚠️ {error}</div>}
      {success && <div style={{ background: "#f0fdf4", border: "1.5px solid #bbf7d0", borderRadius: 10, padding: "0.75rem 1rem", marginBottom: "1rem", fontSize: 13, color: "#15803d" }}>{success}</div>}

      <div style={{ display: "grid", gridTemplateColumns: "1fr 340px", gap: "1.25rem" }}>
        {/* Left column */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
          <Card title="📋 Basic Information">
            <Input label="Course Title" required placeholder="e.g. Complete React 18 Bootcamp" value={form.title} onChange={set("title")} />
            <Input label="Description" required as="textarea" rows={4} placeholder="Describe what students will learn, prerequisites, and who this is for..." value={form.description} onChange={set("description")} />
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
              <Input label="Category" required as="select" value={form.category} onChange={set("category")}>
                <option value="">Select category</option>
                {Object.keys(CATEGORY_COLORS).filter(k => k !== "Default").map(c => <option key={c}>{c}</option>)}
              </Input>
              <Input label="Instructor Name" required placeholder="e.g. Arjun Sharma" value={form.intructor} onChange={set("intructor")} />
            </div>
          </Card>

          <Card title="🎯 Course Details">
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 12 }}>
              <Input label="Duration" required placeholder="e.g. 12h 30m" value={form.duration} onChange={set("duration")} />
              <Input label="Total Lessons" required type="number" placeholder="e.g. 48" value={form.lessons} onChange={set("lessons")} />
              <Input label="Level" required as="select" value={form.level} onChange={set("level")}>
                <option value="">Select level</option>
                <option>Beginner</option>
                <option>Intermediate</option>
                <option>Advanced</option>
                <option>All Levels</option>
              </Input>
            </div>
          </Card>

          <Card title="🖼️ Course Thumbnail">
            <Input label="Thumbnail Image URL" required placeholder="https://images.unsplash.com/..." value={form.imgae} onChange={set("imgae")} />
            {form.imgae && (
              <div style={{ marginTop: 8 }}>
                <img
                  src={form.imgae} alt="preview"
                  onError={e => e.target.style.display = "none"}
                  style={{ width: "100%", maxHeight: 200, objectFit: "cover", borderRadius: 10, border: "1.5px solid #e2e8f0" }}
                />
              </div>
            )}
          </Card>
        </div>

        {/* Right column */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
          <Card title="💰 Pricing">
            <Input label="Price (₹)" type="number" placeholder="0 for free" value={form.price} onChange={set("price")} />
            {form.price ? (
              <div style={{ background: "#eff6ff", border: "1.5px solid #bfdbfe", borderRadius: 8, padding: "0.6rem 0.85rem", fontSize: 13, color: "#1d4ed8" }}>
                💡 Students pay <strong>₹{Number(form.price).toLocaleString()}</strong>
              </div>
            ) : (
              <div style={{ background: "#f0fdf4", border: "1.5px solid #bbf7d0", borderRadius: 8, padding: "0.6rem 0.85rem", fontSize: 13, color: "#15803d" }}>
                🎁 This will be a <strong>Free</strong> course
              </div>
            )}
          </Card>

          <Card title="👁️ Preview">
            <div style={{ background: "#f8fafc", borderRadius: 10, border: "1.5px solid #e2e8f0", overflow: "hidden" }}>
              {form.imgae ? (
                <img src={form.imgae} alt="thumb" onError={e => e.target.style.display = "none"} style={{ width: "100%", height: 130, objectFit: "cover" }} />
              ) : (
                <div style={{ height: 130, background: "#f1f5f9", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 32, color: "#cbd5e1" }}>📚</div>
              )}
              <div style={{ padding: "0.85rem" }}>
                <div style={{ fontWeight: 700, fontSize: 14, color: "#0f172a", marginBottom: 4 }}>{form.title || "Course Title"}</div>
                <div style={{ fontSize: 12, color: "#94a3b8", marginBottom: 8 }}>{form.intructor || "Instructor Name"}</div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 8 }}>
                  {form.category && <Badge color={form.category}>{form.category}</Badge>}
                  {form.level && <LevelBadge level={form.level} />}
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: 12, color: "#64748b" }}>
                  <span>📖 {form.lessons || 0} lessons</span>
                  <span>⏱ {form.duration || "—"}</span>
                </div>
                <div style={{ marginTop: 8, fontWeight: 700, fontSize: 16, color: "#4f46e5" }}>
                  {form.price ? `₹${Number(form.price).toLocaleString()}` : "Free"}
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
