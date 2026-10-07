import type { Metadata } from "next";
import Image from "next/image";
import Skills from "@/components/Skills";
import { LiquidMetalButton } from "@/components/ui/liquid-metal-button";
import { profile, social, experience } from "@/data/siteData";

export const metadata: Metadata = {
  title: `${profile.fullName} — ${profile.role}`,
};

export default function HomePage() {
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
              {profile.availableForWork ? `// ${profile.availability}` : "// not available"}
            </span>
          </div>

          <Image
              src={profile.avatarUrl}
              alt={profile.name}
              width={120}
              height={120}
              priority
              style={{ width: 120, height: 120, borderRadius: "50%", border: "2px solid var(--border)", marginBottom: 20, objectFit: "cover" }}
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
            style={{ display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center" }}
          >
            <LiquidMetalButton href="/projects">view projects →</LiquidMetalButton>
            <LiquidMetalButton href={profile.cvUrl} download>
              download cv ↓
            </LiquidMetalButton>
          </div>
        </section>

        <section style={{ marginBottom: 64 }}>
          <Skills />
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
        @media (max-width: 640px) {
          .currently-grid { grid-template-columns: 1fr !important; }
          .findme-grid { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>

    </div>
  );
}
