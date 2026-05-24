import { useState } from "react";
import { useCourses } from "./hooks/useCourses";
import Sidebar from "./components/layout/Sidebar";
import Topbar from "./components/layout/Topbar";
import Dashboard from "./pages/Dashboard";
import AddCourse from "./pages/AddCourse";
import AllCourses from "./pages/AllCourses";
import StubPage from "./pages/StubPage";

const GLOBAL_STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');
  * { box-sizing: border-box; }
  @keyframes spin { to { transform: rotate(360deg); } }
  ::-webkit-scrollbar { width: 5px; height: 5px; }
  ::-webkit-scrollbar-track { background: #f1f5f9; }
  ::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 99px; }
  input, select, textarea { box-sizing: border-box; }
`;

export default function App() {
  const [page, setPage] = useState("dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { courses, loading, fetchError, fetchCourses } = useCourses();

  const nav = (id) => { setPage(id); setSidebarOpen(false); };

  return (
    <div style={{ display: "flex", minHeight: "100vh", background: "#f1f5f9", fontFamily: "'Plus Jakarta Sans', 'Segoe UI', sans-serif" }}>
      <style>{GLOBAL_STYLES}</style>

      {sidebarOpen && (
        <div
          onClick={() => setSidebarOpen(false)}
          style={{ position: "fixed", inset: 0, background: "rgba(15,23,42,0.4)", zIndex: 99, backdropFilter: "blur(2px)" }}
        />
      )}

      <Sidebar page={page} onNav={nav} />

      <div style={{ marginLeft: 258, flex: 1, display: "flex", flexDirection: "column", minHeight: "100vh" }}>
        <Topbar page={page} fetchError={fetchError} onMenuToggle={() => setSidebarOpen(s => !s)} />

        <main style={{ flex: 1, padding: "1.75rem 1.5rem" }}>
          {page === "dashboard"    && <Dashboard courses={courses} loading={loading} onAddCourse={() => nav("add-course")} />}
          {page === "add-course"   && <AddCourse onSuccess={() => { fetchCourses(); nav("all-courses"); }} />}
          {page === "all-courses"  && <AllCourses courses={courses} loading={loading} error={fetchError} onRefresh={fetchCourses} onAddCourse={() => nav("add-course")} />}
          {page === "categories"   && <StubPage icon="🗂️" title="Categories"          sub="Manage and organise your course categories" />}
          {page === "reviews"      && <StubPage icon="⭐" title="Reviews"              sub="Moderate and respond to student reviews" />}
          {page === "students"     && <StubPage icon="🎓" title="Students"             sub="View and manage all enrolled students" />}
          {page === "instructors"  && <StubPage icon="👨‍🏫" title="Instructors"        sub="Manage your course instructors" />}
          {page === "enrollments"  && <StubPage icon="📋" title="Enrollments"          sub="Track all course enrollments" />}
          {page === "revenue"      && <StubPage icon="💰" title="Revenue"              sub="Track earnings, transactions, and payouts" />}
          {page === "coupons"      && <StubPage icon="🎟️" title="Coupons & Offers"    sub="Create discount codes and promotional offers" />}
          {page === "payouts"      && <StubPage icon="💸" title="Payouts"              sub="3 payouts pending review" />}
          {page === "media"        && <StubPage icon="🖼️" title="Media Library"       sub="Manage all uploaded images and videos" />}
          {page === "certificates" && <StubPage icon="🏅" title="Certificates"         sub="Design and manage completion certificates" />}
          {page === "blog"         && <StubPage icon="📝" title="Blog & Announcements" sub="Publish posts and platform announcements" />}
          {page === "analytics"    && <StubPage icon="📈" title="Analytics"            sub="Deep dive into platform performance metrics" />}
          {page === "settings"     && <StubPage icon="⚙️" title="Settings"            sub="Configure your EduPort platform settings" />}
          {page === "support"      && <StubPage icon="🎧" title="Support"              sub="7 open support tickets awaiting response" />}
        </main>
      </div>
    </div>
  );
}
