import { StatCard, Card, EmptyState } from "../components/ui";
import CourseCard from "../components/CourseCard";

export default function Dashboard({ courses, loading, onAddCourse }) {
  const totalCourses = courses.length;
  const freeCourses = courses.filter(c => !c.price || c.price == 0).length;
  const paidCourses = courses.filter(c => c.price > 0);
  const avgPrice = paidCourses.length
    ? Math.round(paidCourses.reduce((a, c) => a + Number(c.price), 0) / paidCourses.length)
    : 0;
  const cats = [...new Set(courses.map(c => c.category).filter(Boolean))];

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
      <div>
        <h2 style={{ fontSize: 20, fontWeight: 700, color: "#0f172a", margin: "0 0 4px" }}>Welcome back, Admin 👋</h2>
        <p style={{ fontSize: 13, color: "#64748b", margin: 0 }}>Here's what's happening on EduPort today.</p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "1rem" }}>
        <StatCard icon="📚" value={totalCourses} label="Total Courses" delta="+6 this month" deltaUp color="linear-gradient(90deg,#4f46e5,#7c3aed)" />
        <StatCard icon="🎁" value={freeCourses} label="Free Courses" delta={`${totalCourses - freeCourses} paid`} deltaUp color="linear-gradient(90deg,#10b981,#06b6d4)" />
        <StatCard icon="💰" value={avgPrice ? `₹${avgPrice.toLocaleString()}` : "—"} label="Avg. Course Price" delta="across paid courses" deltaUp color="linear-gradient(90deg,#f59e0b,#f97316)" />
        <StatCard icon="🗂️" value={cats.length} label="Categories" delta={`${totalCourses} total courses`} deltaUp color="linear-gradient(90deg,#ec4899,#f43f5e)" />
      </div>

      <Card title="📚 Recent Courses">
        {loading ? (
          <div style={{ display: "flex", justifyContent: "center", padding: "2rem" }}>
            <div style={{ width: 28, height: 28, border: "3px solid #e2e8f0", borderTopColor: "#4f46e5", borderRadius: "50%", animation: "spin 0.8s linear infinite" }} />
          </div>
        ) : courses.length === 0 ? (
          <EmptyState icon="📭" title="No courses yet" sub="Add your first course to get started" />
        ) : (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: "1rem", marginTop: 4 }}>
            {courses.slice(0, 6).map((c, i) => (
              <CourseCard key={c._id || i} course={c} />
            ))}
          </div>
        )}
        {courses.length > 6 && (
          <div style={{ textAlign: "center", marginTop: "1rem" }}>
            <span style={{ fontSize: 13, color: "#4f46e5", cursor: "pointer", fontWeight: 600 }}>
              View all {courses.length} courses →
            </span>
          </div>
        )}
      </Card>
    </div>
  );
}
