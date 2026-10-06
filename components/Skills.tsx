import Link from "next/link";
import { skills, tools, type SkillEvidence } from "@/data/siteData";

function evidenceHref(e: SkillEvidence) {
  if (e.href) return e.href;
  return e.ref?.startsWith("exp-") ? `/experience#${e.ref}` : `/projects#${e.ref}`;
}

export default function Skills() {
  return (
    <div>
      <p className="label" style={{ marginBottom: 6 }}>// skills</p>
      <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.72rem", color: "var(--text-secondary)" }}>
        each one links to where i used it
      </p>

      {skills.map((g) => (
        <div key={g.group}>
          <p className="skill-group">{g.group}</p>
          {g.items.map((s) => (
            <div key={s.name} className="skill-row">
              <span className="skill-name">{s.name}</span>
              <span className="skill-dots" aria-hidden="true" />
              <span className="skill-ev">
                {typeof s.usedIn === "string"
                  ? s.usedIn
                  : s.usedIn.map((e, i) => (
                      <span key={e.label}>
                        {i > 0 && " · "}
                        {e.href ? (
                          <a href={e.href} target="_blank" rel="noopener noreferrer">{e.label} ↗</a>
                        ) : (
                          <Link href={evidenceHref(e)}>{e.label}</Link>
                        )}
                      </span>
                    ))}
              </span>
            </div>
          ))}
        </div>
      ))}

      <p className="skill-group">tools</p>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
        {tools.map((t) => (
          <span key={t} className="tag">{t}</span>
        ))}
      </div>

      <style>{`
        .skill-group {
          font-family: var(--font-mono);
          font-size: 0.75rem;
          color: var(--accent);
          letter-spacing: 0.04em;
          margin: 24px 0 8px;
        }
        .skill-row {
          display: grid;
          grid-template-columns: auto minmax(24px, 1fr) auto;
          gap: 10px;
          align-items: baseline;
          padding: 5px 8px;
          margin: 0 -8px;
          font-family: var(--font-mono);
          font-size: 0.82rem;
          transition: background 0.15s;
        }
        .skill-row:hover { background: var(--bg-subtle); }
        .skill-name { color: var(--text-primary); }
        .skill-dots { border-bottom: 1px dotted var(--border-hover); align-self: center; }
        .skill-ev { font-size: 0.74rem; color: var(--text-secondary); text-align: right; }
        .skill-ev a { color: var(--accent); }
        .skill-ev a:hover { text-decoration: underline; }
        @media (max-width: 640px) {
          .skill-row { grid-template-columns: 1fr; gap: 2px; padding: 8px; }
          .skill-dots { display: none; }
          .skill-ev { text-align: left; }
        }
      `}</style>
    </div>
  );
}
