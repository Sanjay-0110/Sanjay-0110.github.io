"use client";
import { useEffect } from "react";

// Briefly outlines the card a skill link points to (e.g. /projects#proj-3),
// so it's clear which one you landed on in a grid.
export default function HashHighlight() {
  useEffect(() => {
    const id = decodeURIComponent(window.location.hash.slice(1));
    const el = id ? document.getElementById(id) : null;
    if (!el) return;
    el.classList.add("hash-flash");
    const t = setTimeout(() => el.classList.remove("hash-flash"), 2000);
    return () => clearTimeout(t);
  }, []);
  return null;
}
