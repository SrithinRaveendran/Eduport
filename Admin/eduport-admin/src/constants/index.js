export const API = "http://localhost:5000/course";

export const CATEGORY_COLORS = {
  Development: { bg: "#eff6ff", text: "#1d4ed8", dot: "#3b82f6" },
  Design: { bg: "#fdf4ff", text: "#7e22ce", dot: "#a855f7" },
  Business: { bg: "#fff7ed", text: "#c2410c", dot: "#f97316" },
  Marketing: { bg: "#fefce8", text: "#a16207", dot: "#eab308" },
  "Data Science": { bg: "#f0fdf4", text: "#15803d", dot: "#22c55e" },
  Photography: { bg: "#fdf2f8", text: "#9d174d", dot: "#ec4899" },
  Music: { bg: "#fef3c7", text: "#92400e", dot: "#f59e0b" },
  Default: { bg: "#f8fafc", text: "#475569", dot: "#94a3b8" },
};

export const LEVEL_BADGE = {
  Beginner: { bg: "#dcfce7", text: "#166534" },
  Intermediate: { bg: "#fef9c3", text: "#854d0e" },
  Advanced: { bg: "#fee2e2", text: "#991b1b" },
  "All Levels": { bg: "#e0e7ff", text: "#3730a3" },
};

export const NAV = [
  { section: "Overview", items: [{ id: "dashboard", icon: "📊", label: "Dashboard" }] },
  {
    section: "Course Management",
    items: [
      { id: "add-course", icon: "➕", label: "Add Course" },
      { id: "all-courses", icon: "📚", label: "All Courses" },
      { id: "categories", icon: "🗂️", label: "Categories" },
      { id: "reviews", icon: "⭐", label: "Reviews", badge: "12", badgeColor: "#f59e0b" },
    ],
  },
  {
    section: "Users",
    items: [
      { id: "students", icon: "🎓", label: "Students", badge: "1.2k", badgeColor: "#10b981" },
      { id: "instructors", icon: "👨‍🏫", label: "Instructors" },
      { id: "enrollments", icon: "📋", label: "Enrollments" },
    ],
  },
  {
    section: "Finance",
    items: [
      { id: "revenue", icon: "💰", label: "Revenue" },
      { id: "coupons", icon: "🎟️", label: "Coupons & Offers" },
      { id: "payouts", icon: "💸", label: "Payouts", badge: "3", badgeColor: "#ef4444" },
    ],
  },
  {
    section: "Content",
    items: [
      { id: "media", icon: "🖼️", label: "Media Library" },
      { id: "certificates", icon: "🏅", label: "Certificates" },
      { id: "blog", icon: "📝", label: "Blog & Announcements" },
    ],
  },
  {
    section: "Platform",
    items: [
      { id: "analytics", icon: "📈", label: "Analytics" },
      { id: "settings", icon: "⚙️", label: "Settings" },
      { id: "support", icon: "🎧", label: "Support", badge: "7", badgeColor: "#f59e0b" },
    ],
  },
];

export const EMPTY_FORM = {
  title: "",
  description: "",
  category: "",
  intructor: "",
  price: "",
  duration: "",
  level: "",
  lessons: "",
  imgae: "",
};
