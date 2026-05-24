import { NAV } from "../../constants";

export default function Sidebar({ page, onNav }) {
  return (
    <aside style={{
      width: 258, background: "#fff", borderRight: "1.5px solid #e2e8f0",
      display: "flex", flexDirection: "column", position: "fixed",
      top: 0, left: 0, bottom: 0, zIndex: 100,
      boxShadow: "2px 0 12px rgba(0,0,0,0.04)",
    }}>
      {/* Logo */}
      <div style={{ padding: "1.25rem 1.25rem 1rem", borderBottom: "1.5px solid #f1f5f9", display: "flex", alignItems: "center", gap: 10 }}>
        <div style={{ width: 36, height: 36, background: "linear-gradient(135deg,#4f46e5,#7c3aed)", borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18 }}>🎓</div>
        <div style={{ fontSize: 19, fontWeight: 800, color: "#0f172a", letterSpacing: -0.5 }}>
          Edu<span style={{ color: "#4f46e5" }}>Port</span>
        </div>
        <div style={{ marginLeft: "auto", fontSize: 10, fontWeight: 700, background: "#eff6ff", color: "#3b82f6", padding: "2px 7px", borderRadius: 20, letterSpacing: 0.5 }}>ADMIN</div>
      </div>

      {/* Nav */}
      <nav style={{ flex: 1, overflowY: "auto", padding: "0.75rem 0.75rem" }}>
        {NAV.map(group => (
          <div key={group.section}>
            <div style={{ fontSize: 10, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1.2, color: "#94a3b8", padding: "0.75rem 0.5rem 0.35rem", marginTop: 4 }}>
              {group.section}
            </div>
            {group.items.map(item => {
              const active = page === item.id;
              return (
                <div
                  key={item.id}
                  onClick={() => onNav(item.id)}
                  style={{
                    display: "flex", alignItems: "center", gap: 9, padding: "0.55rem 0.75rem",
                    borderRadius: 9, cursor: "pointer", fontSize: 13.5, fontWeight: active ? 600 : 400,
                    color: active ? "#4f46e5" : "#475569",
                    background: active ? "#eff6ff" : "transparent",
                    border: active ? "1.5px solid #c7d2fe" : "1.5px solid transparent",
                    marginBottom: 2, transition: "all 0.15s",
                  }}
                  onMouseEnter={e => { if (!active) { e.currentTarget.style.background = "#f8fafc"; e.currentTarget.style.color = "#1e293b"; } }}
                  onMouseLeave={e => { if (!active) { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#475569"; } }}
                >
                  <span style={{ fontSize: 15 }}>{item.icon}</span>
                  <span style={{ flex: 1 }}>{item.label}</span>
                  {item.badge && (
                    <span style={{ background: item.badgeColor, color: "#fff", fontSize: 10, fontWeight: 700, padding: "2px 7px", borderRadius: 20, fontFamily: "monospace" }}>
                      {item.badge}
                    </span>
                  )}
                </div>
              );
            })}
          </div>
        ))}
      </nav>

      {/* Footer */}
      <div style={{ padding: "1rem 0.75rem", borderTop: "1.5px solid #f1f5f9" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "0.6rem 0.75rem", background: "#f8fafc", borderRadius: 10, border: "1.5px solid #e2e8f0" }}>
          <div style={{ width: 32, height: 32, borderRadius: "50%", background: "linear-gradient(135deg,#4f46e5,#7c3aed)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13, fontWeight: 700, color: "#fff", flexShrink: 0 }}>SA</div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontWeight: 600, fontSize: 12.5, color: "#0f172a" }}>Super Admin</div>
            <div style={{ fontSize: 11, color: "#94a3b8", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>admin@eduport.com</div>
          </div>
          <span style={{ color: "#94a3b8", fontSize: 12 }}>⚙️</span>
        </div>
      </div>
    </aside>
  );
}
