import type { Metadata } from "next";
import Link from "next/link";
import { blogPostsMeta } from "@/data/blogPosts";
import { blogMeta } from "@/data/siteData";

export const metadata: Metadata = { title: "Blog" };

export default function BlogPage() {
  const sorted = [...blogPostsMeta].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  const categories = Array.from(new Set(sorted.map((p) => p.category)));

  return (
    <div style={{ paddingTop: 72, paddingBottom: 96 }}>
      <div className="container">

        <header style={{ marginBottom: 56 }}>
          <p className="label" style={{ marginBottom: 12, color: "var(--accent)" }}>
            // blog
          </p>
          <h1 style={{ fontSize: "1.8rem" }}>Writing</h1>
          <p
            style={{
              fontSize: "0.9rem",
              color: "var(--text-secondary)",
              marginTop: 14,
              maxWidth: 480,
            }}
          >
            {blogMeta.description}
          </p>
        </header>

        <div style={{ display: "flex", flexDirection: "column" }}>
          {sorted.map((post, i) => {
            const date = new Date(post.date).toLocaleDateString("en-GB", {
              year: "numeric",
              month: "short",
              day: "numeric",
            });
            return (
              <Link
                key={post.slug}
                href={post.externalUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "grid",
                  gridTemplateColumns: "120px 1fr auto",
                  gap: 24,
                  alignItems: "baseline",
                  padding: "20px 0",
                  borderBottom: "1px solid var(--border)",
                  transition: "background 0.15s",
                }}
                className="blog-row"
              >
                {/* Date */}
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.72rem",
                    color: "var(--text-muted)",
                    flexShrink: 0,
                  }}
                >
                  {date}
                </span>

                {/* Title + summary */}
                <div>
                  <p
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.92rem",
                      color: "var(--text-primary)",
                      marginBottom: 4,
                    }}
                  >
                    {post.title}
                  </p>
                  <p
                    style={{
                      fontSize: "0.82rem",
                      color: "var(--text-secondary)",
                    }}
                  >
                    {post.summary}
                  </p>
                  <div
                    style={{
                      display: "flex",
                      gap: 6,
                      marginTop: 10,
                      flexWrap: "wrap",
                    }}
                  >
                    {post.tags.map((t) => (
                      <span key={t} className="tag">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Reading time */}
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.7rem",
                    color: "var(--text-muted)",
                    flexShrink: 0,
                    whiteSpace: "nowrap",
                  }}
                >
                  {post.readingTime}
                </span>
              </Link>
            );
          })}
        </div>
      </div>

      <style>{`
        .blog-row:hover { background: var(--bg-subtle); }
        .blog-row:hover p { color: var(--text-primary) !important; }
        @media (max-width: 600px) {
          .blog-row { grid-template-columns: 1fr !important; gap: 8px !important; }
        }
      `}</style>
    </div>
  );
}
