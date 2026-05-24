import { EmptyState } from "../components/ui";

export default function StubPage({ icon, title, sub }) {
  return (
    <div>
      <h2 style={{ fontSize: 20, fontWeight: 700, color: "#0f172a", margin: "0 0 1.5rem" }}>{title}</h2>
      <div style={{ background: "#fff", borderRadius: 14, border: "1.5px solid #e2e8f0" }}>
        <EmptyState icon={icon} title={title} sub={sub || "This section is coming soon"} />
      </div>
    </div>
  );
}
