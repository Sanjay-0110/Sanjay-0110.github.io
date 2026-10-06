import type { Metadata } from "next";
import { projects } from "@/data/siteData";
import HashHighlight from "@/components/HashHighlight";

export const metadata: Metadata = { title: "Projects" };

export default function ProjectsPage() {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <div style={{ paddingTop: 72, paddingBottom: 96 }}>
      <div className="container">
        <HashHighlight />

        <header style={{ marginBottom: 56 }}>
          <p className="label" style={{ marginBottom: 12, color: "var(--accent)" }}>
            // projects
          </p>
          <h1 style={{ fontSize: "1.8rem" }}>Selected Work</h1>
        </header>

        {/* Featured */}
        {featured.length > 0 && (
          <section style={{ marginBottom: 56 }}>
            <p className="label" style={{ marginBottom: 20 }}>
              featured
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
                gap: 1,
                background: "var(--border)",
              }}
            >
              {featured.map((proj) => (
                <ProjectCard key={proj.id} proj={proj} highlight />
              ))}
            </div>
          </section>
        )}

        {/* Rest */}
        {rest.length > 0 && (
          <section>
            <p className="label" style={{ marginBottom: 20 }}>
              other projects
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
                gap: 1,
                background: "var(--border)",
              }}
            >
              {rest.map((proj) => (
                <ProjectCard key={proj.id} proj={proj} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}

function ProjectCard({
  proj,
  highlight = false,
}: {
  proj: (typeof projects)[number];
  highlight?: boolean;
}) {
  return (
    <div
      id={proj.id}
      className="card"
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 12,
        minHeight: 180,
      }}
    >
      <div style={{ flex: 1 }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            marginBottom: 10,
          }}
        >
          {highlight && (
            <span
              style={{
                display: "inline-block",
                width: 6,
                height: 6,
                background: "var(--accent)",
                flexShrink: 0,
              }}
            />
          )}
          <h3
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.92rem",
              color: "var(--text-primary)",
            }}
          >
            {proj.title}
          </h3>
        </div>
        <p
          style={{
            fontSize: "0.83rem",
            color: "var(--text-secondary)",
            lineHeight: 1.6,
          }}
        >
          {proj.summary}
        </p>
      </div>

      <div
        style={{
          display: "flex",
          gap: 6,
          flexWrap: "wrap",
          marginBottom: 4,
        }}
      >
        {proj.tags.map((t) => (
          <span key={t} className="tag">
            {t}
          </span>
        ))}
      </div>

      <div style={{ display: "flex", gap: 16 }}>
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
            github →
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
            live demo →
          </a>
        )}
      </div>
    </div>
  );
}
