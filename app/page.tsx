import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { profile, social, projects, experience } from "@/data/siteData";

export const metadata: Metadata = {
  title: `${profile.fullName} — ${profile.role}`,
};

export default function HomePage() {
  const featured = projects.filter((p) => p.featured);
  const latestRole = experience[0];

  return (
    <div style={{ paddingTop: 80, paddingBottom: 96 }}>
      <div className="container">

        {/* ── Hero ──────────────────────────────────────────────────────────── */}
        <section style={{ marginBottom: 72 }}>
          <div className="fade-up fade-up-1" style={{ marginBottom: 32 }}>
            <span
              className="label"
              style={{ color: "var(--accent)", letterSpacing: "0.12em" }}
            >
              {profile.availableForWork ? "// available for work" : "// not available"}
            </span>
          </div>

          <Image
              src={profile.avatarUrl}
              alt={profile.name}
              width={120}
              height={120}
              style={{ borderRadius: "50%", border: "2px solid var(--border)", marginBottom: 20, objectFit: "cover",}}
          />

          <h1
            className="fade-up fade-up-2"
            style={{ fontSize: "clamp(2rem, 5vw, 3.2rem)", marginBottom: 4 }}
          >
            {profile.name}
            <span className="cursor-blink" style={{ marginLeft: 2 }}>_</span>
          </h1>

          <p
            className="fade-up fade-up-3"
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.9rem",
              color: "var(--accent-yellow)",
              marginBottom: 28,
            }}
          >
            {profile.role}
          </p>

          <p
            className="fade-up fade-up-4"
            style={{
              fontSize: "1.05rem",
              color: "var(--text-secondary)",
              maxWidth: 520,
              lineHeight: 1.75,
              marginBottom: 36,
            }}
          >
            {profile.bio}
          </p>

          {/* CTA row */}
          <div
            className="fade-up fade-up-5"
            style={{ display: "flex", gap: 12, flexWrap: "wrap" }}
          >
            <Link href="/projects" className="btn-primary">
              view projects →
            </Link>
            <Link href={profile.cvUrl} className="btn-ghost">
              download cv
            </Link>
          </div>
        </section>

        <div className="divider" />

        {/* ── Currently ────────────────────────────────────────────────────── */}
        <section style={{ marginBottom: 64 }}>
          <p className="label" style={{ marginBottom: 20 }}>// currently</p>
          <div
            className="currently-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr",
              gap: 1,
              background: "var(--border)",
              border: "1px solid var(--border)",
            }}
          >
            <div style={{ background: "var(--bg-card)", padding: "20px 24px" }}>
              <p
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.72rem",
                  color: "var(--text-muted)",
                  marginBottom: 6,
                  letterSpacing: "0.06em",
                }}
              >
                worked at
              </p>
              <p
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.9rem",
                  color: "var(--text-primary)",
                }}
              >
                {latestRole.company}
              </p>
              <p
                style={{
                  fontSize: "0.8rem",
                  color: "var(--text-secondary)",
                  marginTop: 2,
                }}
              >
                {latestRole.role}
              </p>
            </div>
            <div style={{ background: "var(--bg-card)", padding: "20px 24px" }}>
              <p
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.72rem",
                  color: "var(--text-muted)",
                  marginBottom: 6,
                  letterSpacing: "0.06em",
                }}
              >
                based in
              </p>
              <p
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.9rem",
                  color: "var(--text-primary)",
                }}
              >
                {profile.location}
              </p>
            </div>
            <div style={{ background: "var(--bg-card)", padding: "20px 24px" }}>
              <p
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.72rem",
                  color: "var(--text-muted)",
                  marginBottom: 6,
                  letterSpacing: "0.06em",
                }}
              >
                education
              </p>
              <p
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.9rem",
                  color: "var(--text-primary)",
                }}
              >
                {profile.education}
              </p>
            </div>
          </div>
        </section>

        {/* ── Featured projects (commented out – re-enable when ready) ────────
        <section style={{ marginBottom: 64 }}>
          <div
            style={{
              display: "flex",
              alignItems: "baseline",
              justifyContent: "space-between",
              marginBottom: 24,
            }}
          >
            <p className="label">// featured projects</p>
            <Link
              href="/projects"
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.72rem",
                color: "var(--accent)",
              }}
            >
              all projects →
            </Link>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 1, background: "var(--border)" }}>
            {featured.map((proj) => (
              <div
                key={proj.id}
                className="card"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  gap: 24,
                  flexWrap: "wrap",
                }}
              >
                <div style={{ flex: 1 }}>
                  <h3
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.95rem",
                      marginBottom: 8,
                      color: "var(--text-primary)",
                    }}
                  >
                    {proj.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "0.85rem",
                      color: "var(--text-secondary)",
                      marginBottom: 14,
                    }}
                  >
                    {proj.summary}
                  </p>
                  <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                    {proj.tags.map((t) => (
                      <span key={t} className="tag">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <div style={{ display: "flex", gap: 12, flexShrink: 0 }}>
                  {proj.githubUrl && (
                    <a
                      href={proj.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.72rem",
                        color: "var(--accent)",
                      }}
                    >
                      gh →
                    </a>
                  )}
                  {proj.liveUrl && (
                    <a
                      href={proj.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.72rem",
                        color: "var(--accent-blue)",
                      }}
                    >
                      live →
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
        ── end featured projects ──────────────────────────────────────────── */}

        <div className="divider" />

        {/* ── Social row ───────────────────────────────────────────────────── */}
        <section>
          <p className="label" style={{ marginBottom: 20 }}>// find me</p>
          <div className="findme-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 1, background: "var(--border)" }}>
            {social.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  background: "var(--bg-card)",
                  padding: "16px 20px",
                  display: "flex",
                  flexDirection: "column",
                  gap: 4,
                  transition: "background 0.15s",
                }}
              >
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.82rem", color: "var(--text-primary)", fontWeight: 500 }}>
                  {s.label.toLowerCase()}
                </span>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.72rem", color: "var(--text-muted)" }}>
                  {s.username}
                </span>
              </a>
            ))}
          </div>
        </section>

      </div>

      <style>{`
        .btn-primary {
          font-family: var(--font-mono);
          font-size: 0.78rem;
          letter-spacing: 0.04em;
          color: var(--bg);
          background: var(--accent);
          padding: 8px 20px;
          transition: opacity 0.15s;
          display: inline-block;
        }
        .btn-primary:hover { opacity: 0.85; color: var(--bg); }
        .btn-ghost {
          font-family: var(--font-mono);
          font-size: 0.78rem;
          letter-spacing: 0.04em;
          color: var(--text-secondary);
          border: 1px solid var(--border);
          padding: 8px 20px;
          transition: border-color 0.15s, color 0.15s;
          display: inline-block;
        }
        .btn-ghost:hover { border-color: var(--border-hover); color: var(--text-primary); }
        @media (max-width: 640px) {
          .currently-grid { grid-template-columns: 1fr !important; }
          .findme-grid { grid-template-columns: 1fr 1fr !important; }
  }
      `}</style>

    </div>
  );
}
