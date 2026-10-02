"use client";
// Liquid-metal pill link: a WebGL shader draws an animated metal rim around a dark pill.
// Adapted from a v0 component: renders a link (not a button), sizes to its label,
// respects reduced motion, and falls back to a static CSS rim if WebGL is unavailable.
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  liquidMetalFragmentShader,
  ShaderMount,
  ShaderFitOptions,
  defaultPatternSizing,
} from "@paper-design/shaders";

const IDLE_SPEED = 0.6;
const HOVER_SPEED = 1;

interface LiquidMetalButtonProps {
  href: string;
  children: React.ReactNode;
  /** Render a plain download link (for files like cv.pdf) instead of a Next.js page link */
  download?: boolean;
}

export function LiquidMetalButton({ href, children, download }: LiquidMetalButtonProps) {
  const shaderRef = useRef<HTMLSpanElement>(null);
  const mount = useRef<ShaderMount | null>(null);
  const reducedMotion = useRef(false);
  const [pressed, setPressed] = useState(false);

  useEffect(() => {
    if (!shaderRef.current) return;
    reducedMotion.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    try {
      mount.current = new ShaderMount(
        shaderRef.current,
        liquidMetalFragmentShader,
        {
          u_colorBack: [0, 0, 0, 0],
          u_colorTint: [1, 1, 1, 1],
          u_repetition: 4,
          u_softness: 0.5,
          u_shiftRed: 0.3,
          u_shiftBlue: 0.3,
          u_distortion: 0,
          u_contour: 0,
          u_angle: 45,
          u_shape: 0, // full-fill: the dark pill on top leaves only the rim visible
          u_isImage: false,
          u_fit: ShaderFitOptions[defaultPatternSizing.fit],
          u_scale: defaultPatternSizing.scale,
          u_rotation: defaultPatternSizing.rotation,
          u_originX: defaultPatternSizing.originX,
          u_originY: defaultPatternSizing.originY,
          u_offsetX: defaultPatternSizing.offsetX,
          u_offsetY: defaultPatternSizing.offsetY,
          u_worldWidth: defaultPatternSizing.worldWidth,
          u_worldHeight: defaultPatternSizing.worldHeight,
        },
        undefined,
        reducedMotion.current ? 0 : IDLE_SPEED,
      );
    } catch (error) {
      // No WebGL: the CSS gradient on .lm-rim stays visible as a static fallback
      console.warn("Liquid metal shader unavailable:", error);
    }
    return () => {
      mount.current?.dispose();
      mount.current = null;
    };
  }, []);

  const setSpeed = (speed: number) => {
    if (!reducedMotion.current) mount.current?.setSpeed(speed);
  };

  const linkProps = {
    href,
    className: "lm-btn",
    "data-pressed": pressed || undefined,
    onMouseEnter: () => setSpeed(HOVER_SPEED),
    onMouseLeave: () => {
      setSpeed(IDLE_SPEED);
      setPressed(false);
    },
    onMouseDown: () => setPressed(true),
    onMouseUp: () => setPressed(false),
  };

  const content = (
    <>
      <span ref={shaderRef} className="lm-rim" aria-hidden="true" />
      <span className="lm-face">{children}</span>

      <style>{`
        .lm-btn {
          position: relative;
          display: inline-flex;
          padding: 2px;
          border-radius: 999px;
          isolation: isolate;
          box-shadow: 0 0 0 1px rgba(0,0,0,0.3), 0 9px 9px rgba(0,0,0,0.12), 0 2px 5px rgba(0,0,0,0.15);
          transition: transform 0.15s ease, box-shadow 0.15s ease;
        }
        .lm-btn:hover { box-shadow: 0 0 0 1px rgba(0,0,0,0.4), 0 4px 4px rgba(0,0,0,0.15), 0 1px 2px rgba(0,0,0,0.2); }
        .lm-btn[data-pressed] { transform: translateY(1px) scale(0.98); }
        .lm-btn:focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; }
        .lm-rim {
          position: absolute;
          inset: 0;
          z-index: -1;
          overflow: hidden;
          border-radius: inherit;
          background: linear-gradient(135deg, #f5f5f5, #8a8a8a 35%, #e8e8e8 55%, #6b6b6b 80%, #d4d4d4);
        }
        .lm-rim canvas {
          position: absolute !important;
          inset: 0;
          width: 100% !important;
          height: 100% !important;
          display: block;
        }
        .lm-face {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 10px 22px;
          border-radius: inherit;
          background: linear-gradient(180deg, #202020 0%, #000 100%);
          color: #e8e8e8;
          font-family: var(--font-mono);
          font-size: 0.78rem;
          letter-spacing: 0.04em;
          white-space: nowrap;
          text-shadow: 0 1px 2px rgba(0,0,0,0.5);
        }
        .lm-btn[data-pressed] .lm-face {
          box-shadow: inset 0 2px 4px rgba(0,0,0,0.4), inset 0 1px 2px rgba(0,0,0,0.3);
        }
      `}</style>
    </>
  );

  return download ? <a {...linkProps} download>{content}</a> : <Link {...linkProps}>{content}</Link>;
}
