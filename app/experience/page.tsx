import type { Metadata } from "next";
import { experience } from "@/data/siteData";
import HashHighlight from "@/components/HashHighlight";

export const metadata: Metadata = { title: "Experience" };

export default function ExperiencePage() {
  return (
    <div style={{ paddingTop: 72, paddingBottom: 96 }}>
      <div className="container">
        <HashHighlight />

        <header style={{ marginBottom: 56 }}>
          <p className="label" style={{ marginBottom: 12, color: "var(--accent)" }}>
            // experience
          </p>
          <h1 style={{ fontSize: "1.8rem" }}>Work History</h1>
        </header>

        {/* Timeline */}
        <div
          style={{
            position: "relative",
            paddingLeft: 28,
            borderLeft: "1px solid var(--border)",
          }}
        >
          {experience.map((role, i) => (
            <div
              key={role.id}
              id={role.id}
              style={{
                position: "relative",
                marginBottom: i < experience.length - 1 ? 56 : 0,
              }}
            >
              {/* Dot */}
              <div
                style={{
                  position: "absolute",
                  left: -35,
                  top: 4,
                  width: 8,
                  height: 8,
                  background: i === 0 ? "var(--accent)" : "var(--border-hover)",
                  border: "1px solid var(--border-hover)",
                }}
              />

              {/* Period */}
              <p
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.72rem",
                  color: "var(--text-muted)",
                  letterSpacing: "0.06em",
                  marginBottom: 8,
                }}
              >
                {role.period}
              </p>

              {/* Role + company */}
              <h2 style={{ fontSize: "1rem", marginBottom: 2 }}>
                {role.role}
              </h2>
              <p
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.82rem",
                  color: "var(--accent-blue)",
                  marginBottom: 14,
                }}
              >
                {role.company}
                <span style={{ color: "var(--text-muted)", marginLeft: 12 }}>
                  {role.location}
                </span>
              </p>

              <p
                style={{
                  fontSize: "0.88rem",
                  color: "var(--text-secondary)",
                  maxWidth: 560,
                  lineHeight: 1.7,
                  marginBottom: 16,
                }}
              >
                {role.description}
              </p>

              {/* Tags */}
              <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                {role.tags.map((t) => (
                  <span key={t} className="tag">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
