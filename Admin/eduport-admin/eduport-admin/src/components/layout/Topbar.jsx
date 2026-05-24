import { NAV } from "../../constants";

export default function Topbar({ page, fetchError, onMenuToggle }) {
  const currentLabel = NAV.flatMap(g => g.items).find(i => i.id === page)?.label || "EduPort Admin";

  return (
    <div style={{
      height: 60, background: "#fff", borderBottom: "1.5px solid #e2e8f0",
      display: "flex", alignItems: "center", padding: "0 1.5rem", gap: 12,
      position: "sticky", top: 0, zIndex: 50,
      boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
    }}>
      <button
        onClick={onMenuToggle}
        style={{ background: "none", border: "none", cursor: "pointer", fontSize: 18, color: "#64748b", display: "none" }}
      >
        ☰
      </button>

      <div style={{ flex: 1 }}>
        <div style={{ fontSize: 15, fontWeight: 700, color: "#0f172a" }}>{currentLabel}</div>
      </div>

      <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
        {fetchError && (
          <span style={{ fontSize: 11, color: "#dc2626", background: "#fef2f2", padding: "4px 10px", borderRadius: 20, border: "1px solid #fecaca" }}>
            ⚠️ API Error
          </span>
        )}
        <div style={{ width: 36, height: 36, background: "#f8fafc", border: "1.5px solid #e2e8f0", borderRadius: 9, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", fontSize: 15, position: "relative" }}>
          🔔
          <div style={{ position: "absolute", top: 7, right: 7, width: 7, height: 7, background: "#ef4444", borderRadius: "50%", border: "2px solid #fff" }} />
        </div>
        <div style={{ width: 32, height: 32, background: "linear-gradient(135deg,#4f46e5,#7c3aed)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13, fontWeight: 700, color: "#fff", cursor: "pointer" }}>
          SA
        </div>
      </div>
    </div>
  );
}
