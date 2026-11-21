"use client";

import { useEffect, useRef } from "react";

const WORDS = [
  "Taufik Zaqi",
  "zyk",
  "Full Stack",
  "Next.js",
  "React",
  "TypeScript",
  "Node.js",
  "Supabase",
  "Tailwind",
  "Web Security",
  "Ethical Hacking",
  "Vibe Coder",
  "Bug Hunting",
  "PWA",
  "Linux",
];

type Point = { x: number; y: number; age: number; char: string };

export function CursorLetters() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const hasHover = window.matchMedia("(hover: hover)").matches;
    if (prefersReduced || !hasHover) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = 0;
    let height = 0;
    const trail: Point[] = [];
    const maxTrail = 26;
    let raf = 0;

    let wordIndex = 0;
    let charIndex = 0;
    const pickNextChar = () => {
      const word = WORDS[wordIndex % WORDS.length];
      const ch = word[charIndex % word.length];
      charIndex += 1;
      if (charIndex >= word.length) {
        charIndex = 0;
        wordIndex += 1;
      }
      return ch === " " ? WORDS[wordIndex % WORDS.length][0] : ch;
    };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const onMove = (e: MouseEvent) => {
      const last = trail[trail.length - 1];
      if (!last || Math.hypot(e.clientX - last.x, e.clientY - last.y) > 14) {
        trail.push({
          x: e.clientX,
          y: e.clientY,
          age: 0,
          char: pickNextChar(),
        });
        if (trail.length > maxTrail) trail.shift();
      }
    };

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", onMove, { passive: true });

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";

      for (let i = trail.length - 1; i >= 0; i--) {
        const p = trail[i];
        p.age += 1;
        if (p.age > 38) {
          trail.splice(i, 1);
          continue;
        }
        const t = p.age / 38;
        const alpha = (1 - t) * 0.9;
        const size = 15 - t * 4;
        ctx.font = `700 ${size}px ui-monospace, SFMono-Regular, Menlo, monospace`;
        ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
        ctx.shadowColor = `rgba(255, 255, 255, ${alpha * 0.6})`;
        ctx.shadowBlur = 8;
        ctx.fillText(p.char, p.x, p.y);
      }
      ctx.shadowBlur = 0;

      raf = requestAnimationFrame(draw);
    };

    raf = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
    };
  }, []);

  return <canvas className="cursor-letters" aria-hidden="true" ref={canvasRef} />;
}