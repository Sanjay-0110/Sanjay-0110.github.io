import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = { title: "Research" };

export default function ResearchPage() {
  return (
    <div style={{ paddingTop: 72, paddingBottom: 96 }}>
      <div className="container">
        <header style={{ marginBottom: 40 }}>
          <p className="label" style={{ marginBottom: 12, color: "var(--accent)" }}>
            // research
          </p>
          <h1 style={{ fontSize: "1.8rem" }}>Research</h1>
          <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", marginTop: 14 }}>
            Longer write-ups of research work: the question, the method, and what the results do and
            don&apos;t show.
          </p>
        </header>

        <Link href="/research/polyp-detection" className="card research-card">
          <Image
            src="/projects/proj-dissertation.webp"
            alt="Bar chart: Dice falls from 0.72 on Kvasir-SEG to 0.40 on unseen CVC-ClinicDB"
            width={960}
            height={540}
            className="project-thumb"
          />
          <p className="label" style={{ margin: "14px 0 8px" }}>msc dissertation · 2025–2026</p>
          <h2 style={{ fontSize: "1.05rem", marginBottom: 10, color: "var(--text-primary)" }}>
            Domain-Robust Polyp Detection
          </h2>
          <p style={{ fontSize: "0.88rem", color: "var(--text-secondary)", lineHeight: 1.65 }}>
            Why a polyp-segmentation model loses 45% of its Dice score on another hospital&apos;s
            colonoscopy images. Tests whether scanner colour causes the drop (it doesn&apos;t) and
            whether compressing only the middle encoder layers generalises better (it does).
          </p>
          <span style={{ display: "inline-block", marginTop: 14, fontFamily: "var(--font-mono)", fontSize: "0.75rem", color: "var(--accent)" }}>
            read the case study →
          </span>
        </Link>
      </div>

      <style>{`
        .research-card { display: block; }
      `}</style>
    </div>
  );
}
