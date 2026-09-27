'use client';

import { useState } from 'react';

type CategoryId = 'all' | 'stats' | 'analysis' | 'ml' | 'eng' | 'viz';

interface CategoryData {
  label: string;
  axes: string[];
  values: number[];
  caption: string;
}

const skillMap: Record<CategoryId, CategoryData> = {
  all: {
    label: 'All',
    axes: ['Statistics', 'Data Analysis', 'Machine Learning', 'Data Engineering', 'Programming', 'Visualization'],
    values: [85, 88, 90, 78, 92, 84],
    caption: 'A rounded profile across the six core data science domains.',
  },
  stats: {
    label: 'Statistics',
    axes: ['Hypothesis Testing', 'Probability Theory', 'Regression', 'Bayesian Inference', 'Distributions', 'Sampling Methods'],
    values: [90, 85, 88, 70, 82, 78],
    caption: 'The mathematical foundation behind every valid conclusion.',
  },
  analysis: {
    label: 'Data Analysis',
    axes: ['A/B Testing', 'Null Hypothesis', 'Exploratory Analysis', 'Data Cleaning', 'Correlation Analysis', 'Insight Reporting'],
    values: [88, 85, 92, 80, 84, 78],
    caption: 'Turning raw data into tested, trustworthy conclusions.',
  },
  ml: {
    label: 'Machine Learning',
    axes: ['Supervised Learning', 'Unsupervised Learning', 'Deep Learning', 'Model Evaluation', 'Feature Engineering', 'NLP'],
    values: [92, 80, 75, 88, 85, 70],
    caption: 'Building and validating models that generalize well.',
  },
  eng: {
    label: 'Data Engineering',
    axes: ['ETL Pipelines', 'SQL & Databases', 'Cloud Platforms', 'Big Data Tools', 'Data Modeling', 'API Integration'],
    values: [80, 90, 75, 70, 78, 65],
    caption: 'The infrastructure that keeps data flowing and reliable.',
  },
  viz: {
    label: 'Visualization & Comms',
    axes: ['Dashboards', 'Storytelling', 'Tableau / Power BI', 'Presentation Skills', 'Report Writing', 'Stakeholder Comm'],
    values: [85, 90, 80, 88, 82, 86],
    caption: 'Turning analysis into visuals and narratives people act on.',
  },
};

const categoryOrder: CategoryId[] = ['all', 'stats', 'analysis', 'ml', 'eng', 'viz'];

const CX = 320;
const CY = 300;
const R = 200;
const LEVELS = 4;
const N = 6;

function pointFor(i: number, frac: number): [number, number] {
  const angle = (Math.PI * 2 * i) / N - Math.PI / 2;
  return [CX + Math.cos(angle) * R * frac, CY + Math.sin(angle) * R * frac];
}

function polygonPoints(values: number[]) {
  return values.map((v, i) => pointFor(i, v / 100).join(',')).join(' ');
}

export default function SkillRadar() {
  const [active, setActive] = useState<CategoryId>('all');
  const current = skillMap[active];

  return (
    <div className="radar-wrap">
      <div className="eyebrow">Skill profile</div>
      <h2>Data Science Skill Map</h2>

      <div className="tabs">
        {categoryOrder.map((id) => (
          <button
            key={id}
            className={`tab ${active === id ? 'active' : ''}`}
            onClick={() => setActive(id)}
          >
            {skillMap[id].label}
          </button>
        ))}
      </div>

      <div className="chart">
        <svg viewBox="0 0 640 620">
          {/* grid rings */}
          {Array.from({ length: LEVELS }).map((_, l) => {
            const frac = (l + 1) / LEVELS;
            const pts = Array.from({ length: N }).map((_, i) => pointFor(i, frac).join(',')).join(' ');
            return <polygon key={l} points={pts} className="grid-line" />;
          })}

          {/* spokes */}
          {Array.from({ length: N }).map((_, i) => {
            const [x, y] = pointFor(i, 1);
            return <line key={i} x1={CX} y1={CY} x2={x} y2={y} className="spoke" />;
          })}

          {/* center dot */}
          <circle cx={CX} cy={CY} r={5} className="center-dot" />

          {/* axis labels — swap per category */}
          {current.axes.map((label, i) => {
            const [x, y] = pointFor(i, 1.26);
            const anchor = Math.abs(x - CX) < 5 ? 'middle' : x > CX ? 'start' : 'end';
            const words = label.split(' ');
            return (
              <text key={`${active}-${i}`} x={x} y={y} textAnchor={anchor} className="axis-label">
                {words.length > 2 ? (
                  <>
                    <tspan x={x} dy="0">{words.slice(0, Math.ceil(words.length / 2)).join(' ')}</tspan>
                    <tspan x={x} dy="14">{words.slice(Math.ceil(words.length / 2)).join(' ')}</tspan>
                  </>
                ) : (
                  label
                )}
              </text>
            );
          })}

          {/* data shape */}
          <polygon points={polygonPoints(current.values)} className="data-shape" />

          {/* data dots + values */}
          {current.values.map((v, i) => {
            const [x, y] = pointFor(i, v / 100);
            return (
              <g key={`${active}-dot-${i}`}>
                <circle cx={x} cy={y} r={5} className="data-dot" />
                <text x={x} y={y - 12} textAnchor="middle" className="axis-value">
                  {v}
                </text>
              </g>
            );
          })}
        </svg>
      </div>

      <p className="caption">{current.caption}</p>

      <style jsx>{`
        .radar-wrap {
          --bg: #060608;
          --line: #232330;
          --accent: #a855f7;
          --accent-fill: rgba(139, 60, 220, 0.38);
          --text: #f4f2f8;
          --text-dim: #8b8a97;
          --pill-bg: #131319;

          background: var(--bg);
          color: var(--text);
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 48px 20px 70px;
          border-radius: 16px;
        }
        .eyebrow {
          color: var(--text-dim);
          font-size: 12px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          margin-bottom: 6px;
        }
        h2 {
          font-size: 22px;
          font-weight: 600;
          margin: 0 0 30px;
        }
        .tabs {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
          justify-content: center;
          margin-bottom: 52px;
        }
        .tab {
          padding: 10px 18px;
          border-radius: 999px;
          border: 1px solid var(--line);
          background: var(--pill-bg);
          color: var(--text-dim);
          font-size: 13.5px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.25s ease;
          white-space: nowrap;
        }
        .tab:hover {
          border-color: #3a3a48;
          color: var(--text);
        }
        .tab.active {
          background: linear-gradient(135deg, #a855f7, #7c3aed);
          color: #fff;
          border-color: transparent;
          box-shadow: 0 0 24px rgba(168, 85, 247, 0.35);
        }
        .chart {
          width: min(640px, 92vw);
        }
        .chart svg {
          width: 100%;
          height: auto;
          display: block;
          overflow: visible;
        }
        :global(.grid-line) {
          fill: none;
          stroke: var(--line);
          stroke-dasharray: 3 4;
          stroke-width: 1;
        }
        :global(.spoke) {
          stroke: var(--line);
          stroke-dasharray: 3 4;
          stroke-width: 1;
        }
        :global(.data-shape) {
          fill: var(--accent-fill);
          stroke: var(--accent);
          stroke-width: 2.5;
          stroke-linejoin: round;
          transition: all 0.4s ease;
        }
        :global(.data-dot) {
          fill: #050506;
          stroke: var(--accent);
          stroke-width: 2;
        }
        :global(.center-dot) {
          fill: #000;
        }
        :global(.axis-label) {
          font-size: 12.5px;
          font-weight: 600;
          fill: var(--text);
        }
        :global(.axis-value) {
          font-size: 11px;
          fill: var(--accent);
          font-weight: 700;
        }
        .caption {
          margin-top: 18px;
          font-size: 12.5px;
          color: var(--text-dim);
          text-align: center;
          max-width: 440px;
          line-height: 1.5;
        }
      `}</style>
    </div>
  );
}