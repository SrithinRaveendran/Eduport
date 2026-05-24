import { CATEGORY_COLORS, LEVEL_BADGE } from "../../constants";

export function Badge({ children, color }) {
  const c = CATEGORY_COLORS[color] || CATEGORY_COLORS.Default;
  return (
    <span style={{ background: c.bg, color: c.text, fontSize: 11, fontWeight: 600, padding: "3px 10px", borderRadius: 20 }}>
      {children}
    </span>
  );
}

export function LevelBadge({ level }) {
  const c = LEVEL_BADGE[level] || { bg: "#f1f5f9", text: "#475569" };
  return (
    <span style={{ background: c.bg, color: c.text, fontSize: 11, fontWeight: 600, padding: "3px 10px", borderRadius: 20 }}>
      {level}
    </span>
  );
}

export function StatCard({ icon, value, label, delta, deltaUp, color }) {
  return (
    <div style={{
      background: "#fff", borderRadius: 14, padding: "1.25rem 1.5rem",
      border: "1px solid #e2e8f0", position: "relative", overflow: "hidden",
      boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
    }}>
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: color, borderRadius: "14px 14px 0 0" }} />
      <div style={{ fontSize: 26, marginBottom: 10 }}>{icon}</div>
      <div style={{ fontSize: 28, fontWeight: 700, color: "#0f172a", fontFamily: "monospace", letterSpacing: -1 }}>{value}</div>
      <div style={{ fontSize: 13, color: "#64748b", marginTop: 2 }}>{label}</div>
      {delta && (
        <div style={{ fontSize: 12, marginTop: 8, color: deltaUp ? "#16a34a" : "#dc2626", display: "flex", alignItems: "center", gap: 4 }}>
          {deltaUp ? "▲" : "▼"} {delta}
        </div>
      )}
    </div>
  );
}

export function Input({ label, required, type = "text", value, onChange, placeholder, as, rows, children, style }) {
  const base = {
    width: "100%", background: "#f8fafc", border: "1.5px solid #e2e8f0",
    borderRadius: 8, padding: "0.55rem 0.85rem", fontSize: 13.5,
    color: "#0f172a", fontFamily: "inherit", outline: "none",
    transition: "border-color 0.2s", boxSizing: "border-box", ...style,
  };
  return (
    <div style={{ marginBottom: "1rem" }}>
      {label && (
        <label style={{ display: "block", fontSize: 12, fontWeight: 600, color: "#475569", marginBottom: 6, letterSpacing: 0.3 }}>
          {label}{required && <span style={{ color: "#ef4444" }}> *</span>}
        </label>
      )}
      {as === "select" ? (
        <select value={value} onChange={onChange} style={base}>{children}</select>
      ) : as === "textarea" ? (
        <textarea value={value} onChange={onChange} placeholder={placeholder} rows={rows || 4} style={{ ...base, resize: "vertical" }} />
      ) : (
        <input type={type} value={value} onChange={onChange} placeholder={placeholder} style={base} />
      )}
    </div>
  );
}

export function Btn({ children, onClick, variant = "primary", type = "button", style }) {
  const styles = {
    primary: { background: "#4f46e5", color: "#fff", border: "none" },
    ghost: { background: "#fff", color: "#475569", border: "1.5px solid #e2e8f0" },
    danger: { background: "#fee2e2", color: "#991b1b", border: "1.5px solid #fecaca" },
  };
  return (
    <button type={type} onClick={onClick} style={{
      display: "inline-flex", alignItems: "center", gap: 6,
      padding: "0.5rem 1rem", borderRadius: 8, fontSize: 13, fontWeight: 600,
      cursor: "pointer", fontFamily: "inherit", transition: "all 0.15s",
      ...styles[variant], ...style,
    }}>
      {children}
    </button>
  );
}

export function Card({ title, children }) {
  return (
    <div style={{ background: "#fff", borderRadius: 14, border: "1.5px solid #e2e8f0", padding: "1.25rem 1.5rem", boxShadow: "0 1px 3px rgba(0,0,0,0.03)" }}>
      <div style={{ fontSize: 12, fontWeight: 700, color: "#64748b", textTransform: "uppercase", letterSpacing: 1, marginBottom: "1.1rem", paddingBottom: "0.75rem", borderBottom: "1px solid #f1f5f9" }}>
        {title}
      </div>
      {children}
    </div>
  );
}

export function EmptyState({ icon, title, sub }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "5rem 2rem", gap: 12, color: "#94a3b8" }}>
      <div style={{ fontSize: 48 }}>{icon}</div>
      <div style={{ fontWeight: 600, fontSize: 15, color: "#64748b" }}>{title}</div>
      {sub && <div style={{ fontSize: 13 }}>{sub}</div>}
    </div>
  );
}
