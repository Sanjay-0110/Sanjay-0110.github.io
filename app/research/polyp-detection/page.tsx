import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Domain-Robust Polyp Detection",
  description:
    "MSc dissertation case study: why polyp-segmentation models lose 45% of their Dice score on another hospital's colonoscopy images, and what did and didn't help.",
};

const REPO = "https://github.com/Sanjay-0110/Final-Dissertation";

export default function PolypCaseStudy() {
  return (
    <div style={{ paddingTop: 72, paddingBottom: 96 }}>
      <article className="container cs">
        <header style={{ marginBottom: 48 }}>
          <p className="label" style={{ marginBottom: 12, color: "var(--accent)" }}>
            // research · msc dissertation
          </p>
          <h1 style={{ fontSize: "1.8rem", lineHeight: 1.3 }}>Domain-Robust Polyp Detection</h1>
          <p className="cs-meta">
            MSc Data Science · University of Manchester · 2025–2026 ·{" "}
            <a href={REPO} target="_blank" rel="noopener noreferrer">code on github ↗</a>
          </p>
        </header>

        <section className="cs-tldr">
          <p className="label" style={{ marginBottom: 12 }}>// tl;dr</p>
          <ul>
            <li>
              A segmentation model trained on one hospital&apos;s colonoscopy images lost{" "}
              <strong>45% of its Dice score</strong> on another hospital&apos;s images.
            </li>
            <li>
              I tested whether scanner <strong>colour and lighting</strong> cause that drop. Normalising
              colour barely changed it, so <strong>the hypothesis was not supported</strong>.
            </li>
            <li>
              Compressing only the <strong>middle layers</strong> of the encoder held up better on
              unseen hospitals than compressing all layers equally, in a compact 860K-parameter model.
            </li>
          </ul>
        </section>

        <h2>The problem</h2>
        <p>
          AI models that outline polyps in colonoscopy video can help doctors spot early signs of
          bowel cancer. But a model that scores well on images from the hospital it was trained on
          often does much worse on images from a different hospital, with different scanners and
          settings. If a model can&apos;t be trusted outside its training hospital, it can&apos;t be
          used in practice.
        </p>

        <h2>The hypothesis</h2>
        <p>
          Most of that drop comes from <strong>colour and illumination differences between
          endoscopy scanners</strong>, not from real differences in what polyps look like. If that&apos;s
          true, it&apos;s a domain-shift problem: correcting colour before the image reaches the model
          should recover most of the lost performance.
        </p>

        <h2>Approach</h2>
        <h3>A strict evaluation protocol</h3>
        <ul>
          <li>
            Trained and tuned <strong>only on Kvasir-SEG</strong>. Tested on{" "}
            <strong>CVC-ClinicDB</strong> and <strong>ETIS-LaribPolypDB</strong> with zero fine-tuning,
            so every external score is an honest &quot;new hospital&quot; result.
          </li>
          <li>
            The key metric is the <strong>drop</strong> from in-domain to external performance, not the
            absolute score.
          </li>
          <li>
            Splits are made at the <strong>case level</strong>, never the frame level. Frames from the
            same video are near-duplicates, so splitting them randomly would leak test data into
            training and inflate results.
          </li>
          <li>
            Masks are resized with nearest-neighbour interpolation only, so labels stay strictly binary.
          </li>
        </ul>

        <h3>Pipeline</h3>
        <PipelineDiagram />
        <p>
          Two design choices, each tied to a goal:
        </p>
        <ol>
          <li>
            <strong>A non-learned colour normaliser</strong> (Shades-of-Gray, Minkowski p = 6) maps each
            image&apos;s colour statistics toward the training distribution before any learned weights
            see it. It lives in its own module so it can be switched off to measure its effect.
            Specular highlights are removed <em>before</em> normalising, because bright reflections
            would bias the colour estimate.
          </li>
          <li>
            <strong>Asymmetric compression.</strong> The first and last encoder layers stay full size,
            since they handle edges and colour and make the final decision. Only the middle layers,
            which combine generic features, are compressed. This keeps the model small (about 860K
            parameters) without weakening the layers that matter most when the domain changes.
          </li>
        </ol>
        <p>
          Training ran on the University of Manchester&apos;s CSF3 GPU cluster through SLURM jobs.
        </p>

        <h2>Results</h2>
        <h3>The cross-domain drop is real</h3>
        <figure>
          <Image
            src="/projects/proj-dissertation.webp"
            alt="Bar chart: Dice falls from 0.72 on Kvasir-SEG to 0.40 on unseen CVC-ClinicDB, with almost no change from the colour normaliser"
            width={960}
            height={540}
            className="cs-fig"
          />
          <figcaption>Dice on the training hospital vs an unseen one, with the colour normaliser on and off.</figcaption>
        </figure>
        <div className="cs-table-wrap">
          <table>
            <thead>
              <tr><th>Test set</th><th>Dice</th><th>IoU</th></tr>
            </thead>
            <tbody>
              <tr><td>Kvasir-SEG (held-out, in-domain)</td><td>0.721</td><td>0.615</td></tr>
              <tr><td>CVC-ClinicDB (unseen hospital)</td><td>0.395</td><td>0.282</td></tr>
              <tr className="cs-em"><td>Drop</td><td>−45.2%</td><td></td></tr>
            </tbody>
          </table>
        </div>

        <h3>Colour normalisation: a negative result</h3>
        <div className="cs-table-wrap">
          <table>
            <thead>
              <tr><th></th><th>Normaliser on</th><th>Normaliser off</th></tr>
            </thead>
            <tbody>
              <tr><td>Kvasir-SEG Dice</td><td>0.721</td><td>0.718</td></tr>
              <tr><td>CVC-ClinicDB Dice</td><td>0.395</td><td>0.389</td></tr>
              <tr className="cs-em"><td>Drop</td><td>−45.2%</td><td>−45.8%</td></tr>
            </tbody>
          </table>
        </div>
        <p>
          Turning the normaliser off changed the drop by less than one percentage point. Whatever is
          causing the gap, scanner colour and lighting alone don&apos;t explain it, so{" "}
          <strong>the core hypothesis is not supported</strong>.
        </p>

        <h3>Asymmetric compression: a positive result</h3>
        <figure>
          <Image
            src="/projects/proj-dissertation-compression.webp"
            alt="Bar chart: asymmetric compression drops 41.5% on CVC-ClinicDB and 62.7% on ETIS-Larib, versus 43.6% and 65.1% for uniform compression"
            width={960}
            height={540}
            className="cs-fig"
          />
          <figcaption>Drop from in-domain Dice on each unseen hospital. Both models trained from scratch.</figcaption>
        </figure>
        <div className="cs-table-wrap">
          <table>
            <thead>
              <tr><th></th><th>Asymmetric</th><th>Uniform</th></tr>
            </thead>
            <tbody>
              <tr><td>Kvasir-SEG Dice</td><td>0.707</td><td>0.728</td></tr>
              <tr><td>CVC-ClinicDB Dice (drop)</td><td>0.414 (−41.5%)</td><td>0.411 (−43.6%)</td></tr>
              <tr><td>ETIS-Larib Dice (drop)</td><td>0.263 (−62.7%)</td><td>0.254 (−65.1%)</td></tr>
            </tbody>
          </table>
        </div>
        <p>
          Uniform compression scores higher on the training hospital, but asymmetric compression wins
          on every cross-domain measure. That supports the design reasoning: keeping the edge and
          colour layers at full capacity helps the model generalise, even when it costs a little
          in-domain accuracy.
        </p>

        <h2>Limitations and next steps</h2>
        <ul>
          <li>
            The margins between the two compression schemes are small (2–2.5 points). Repeating
            training with several random seeds would show whether the gap is consistent.
          </li>
          <li>
            The main model and its normaliser-off version don&apos;t have ETIS-LaribPolypDB scores yet,
            so the colour result rests on one external dataset.
          </li>
          <li>
            Next: compare against established segmentation baselines (UNet-family and transformer
            models) under the same tuning budget, and use Grad-CAM to see whether the model&apos;s
            attention shifts on unseen hospitals.
          </li>
          <li>
            Since colour wasn&apos;t the main cause, the next question is what is. Differences in
            texture, resolution, or how polyps are framed are the obvious candidates.
          </li>
        </ul>

        <h2>What this project shows</h2>
        <ul>
          <li>Designing an evaluation that can&apos;t flatter the model: zero fine-tuning, case-level splits, reporting the drop.</li>
          <li>Testing a hypothesis with isolated ablations, and reporting the result honestly when it fails.</li>
          <li>Building a full PyTorch pipeline, from preprocessing to cross-domain evaluation, and running it on an HPC cluster.</li>
        </ul>

        <div className="cs-footer">
          <a href={REPO} target="_blank" rel="noopener noreferrer">view the code on github ↗</a>
          <Link href="/projects">← all projects</Link>
        </div>
      </article>

      <style>{`
        .cs h2 { font-size: 1.15rem; margin: 48px 0 14px; color: var(--text-primary); }
        .cs h3 { font-size: 0.92rem; margin: 28px 0 10px; color: var(--accent); font-weight: 500; }
        .cs p, .cs li { font-size: 0.95rem; color: var(--text-secondary); line-height: 1.75; }
        .cs p { margin-bottom: 14px; }
        .cs strong { color: var(--text-primary); font-weight: 600; }
        .cs ul, .cs ol { padding-left: 20px; margin-bottom: 14px; }
        .cs li { margin-bottom: 8px; }
        .cs a { color: var(--accent); }
        .cs-meta { font-family: var(--font-mono); font-size: 0.75rem; color: var(--text-secondary); margin-top: 10px; }
        .cs-tldr { border: 1px solid var(--border); background: var(--bg-card); padding: 20px 24px; }
        .cs-tldr ul { margin: 0; }
        .cs figure { margin: 18px 0 20px; }
        .cs-fig { display: block; width: 100%; height: auto; border: 1px solid var(--border); }
        .cs figcaption { font-family: var(--font-mono); font-size: 0.72rem; color: var(--text-secondary); margin-top: 8px; }
        .cs-diagram { overflow-x: auto; }
        .cs-table-wrap { overflow-x: auto; margin: 14px 0 18px; }
        .cs table { width: 100%; border-collapse: collapse; font-family: var(--font-mono); font-size: 0.8rem; }
        .cs th, .cs td { text-align: left; padding: 9px 12px; border-bottom: 1px solid var(--border); color: var(--text-primary); white-space: nowrap; }
        .cs th { color: var(--text-secondary); font-weight: 400; }
        .cs-em td { color: var(--accent); }
        .cs-footer { display: flex; justify-content: space-between; flex-wrap: wrap; gap: 12px; margin-top: 56px; padding-top: 20px; border-top: 1px solid var(--border); font-family: var(--font-mono); font-size: 0.8rem; }
      `}</style>
    </div>
  );
}

function PipelineDiagram() {
  const steps = [
    { t: "colonoscopy image", s: "input" },
    { t: "crop field of view", s: "remove borders" },
    { t: "remove highlights", s: "inpaint glare" },
    { t: "colour normaliser", s: "Shades-of-Gray", accent: true },
  ];
  const W = 150, gap = 22, H = 52, y = 10;
  return (
    <figure>
      <div className="cs-diagram">
      <svg
        viewBox="0 0 700 190"
        role="img"
        aria-label="Pipeline: colonoscopy image, crop field of view, remove highlights, colour normaliser, then an encoder with full first layer, compressed middle layers and full last layer, producing a polyp mask"
        style={{ width: "100%", minWidth: 620, height: "auto", display: "block" }}
      >
        <defs>
          <marker id="cs-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M0,0 L10,5 L0,10 z" fill="var(--text-secondary)" />
          </marker>
        </defs>
        {steps.map((st, i) => {
          const x = 10 + i * (W + gap);
          return (
            <g key={st.t}>
              <rect x={x} y={y} width={W} height={H} fill="var(--bg-card)" stroke={st.accent ? "var(--accent)" : "var(--border-hover)"} />
              <text x={x + W / 2} y={y + 22} textAnchor="middle" fontFamily="var(--font-mono)" fontSize="12" fill="var(--text-primary)">{st.t}</text>
              <text x={x + W / 2} y={y + 40} textAnchor="middle" fontFamily="var(--font-mono)" fontSize="10.5" fill="var(--text-secondary)">{st.s}</text>
              {i < steps.length - 1 && (
                <line x1={x + W + 2} y1={y + H / 2} x2={x + W + gap - 2} y2={y + H / 2} stroke="var(--text-secondary)" markerEnd="url(#cs-arrow)" />
              )}
            </g>
          );
        })}
        {/* down to the encoder row */}
        <path d={`M ${10 + 3 * (W + gap) + W / 2} ${y + H + 2} V ${y + H + 30} H 85 V ${y + H + 50}`} fill="none" stroke="var(--text-secondary)" markerEnd="url(#cs-arrow)" />
        {[
          { x: 10, w: 150, t: "first layer", s: "full capacity" },
          { x: 172, w: 200, t: "middle layers", s: "compressed", dashed: true },
          { x: 384, w: 150, t: "last layer", s: "full capacity" },
        ].map((b) => (
          <g key={b.t}>
            <rect x={b.x} y={y + 112} width={b.w} height={H} fill="var(--bg-card)" stroke={b.dashed ? "var(--accent)" : "var(--border-hover)"} strokeDasharray={b.dashed ? "4 3" : undefined} />
            <text x={b.x + b.w / 2} y={y + 134} textAnchor="middle" fontFamily="var(--font-mono)" fontSize="12" fill="var(--text-primary)">{b.t}</text>
            <text x={b.x + b.w / 2} y={y + 152} textAnchor="middle" fontFamily="var(--font-mono)" fontSize="10.5" fill="var(--text-secondary)">{b.s}</text>
          </g>
        ))}
        <line x1={162} y1={y + 138} x2={170} y2={y + 138} stroke="var(--text-secondary)" />
        <line x1={374} y1={y + 138} x2={382} y2={y + 138} stroke="var(--text-secondary)" />
        <line x1={536} y1={y + 138} x2={556} y2={y + 138} stroke="var(--text-secondary)" markerEnd="url(#cs-arrow)" />
        <rect x={560} y={y + 112} width={130} height={H} fill="var(--bg-card)" stroke="var(--border-hover)" />
        <text x={625} y={y + 134} textAnchor="middle" fontFamily="var(--font-mono)" fontSize="12" fill="var(--text-primary)">polyp mask</text>
        <text x={625} y={y + 152} textAnchor="middle" fontFamily="var(--font-mono)" fontSize="10.5" fill="var(--text-secondary)">segmentation</text>
      </svg>
      </div>
      <figcaption>Preprocessing runs once, offline. The normaliser and the compression scheme can each be switched off for the ablations.</figcaption>
    </figure>
  );
}
