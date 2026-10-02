import { profile, social } from "@/data/siteData";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer
      style={{
        borderTop: "1px solid var(--border)",
        marginTop: 96,
        padding: "40px 0",
      }}
    >
      <div
        className="container-wide"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 16,
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.72rem",
            color: "var(--text-muted)",
          }}
        >
          © {year} {profile.fullName}
        </span>

        <div style={{ display: "flex", gap: 20 }}>
          {social.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.72rem",
                color: "var(--text-muted)",
                letterSpacing: "0.04em",
                transition: "color 0.15s",
              }}
            >
              {s.label}
            </a>
          ))}
        </div>

        <a
          href={profile.cvUrl}
          download
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.72rem",
            color: "var(--accent)",
            letterSpacing: "0.04em",
          }}
        >
          ↓ cv.pdf
        </a>
      </div>
    </footer>
  );
}
