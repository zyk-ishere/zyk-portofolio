"use client";

import { useEffect, useRef } from "react";

const CHARS = "0123456789ABCDEF";

export function CyberRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = 0;
    let height = 0;
    const fontSize = 16;
    let columns = 0;
    let drops: number[] = [];
    const cursor = { x: -9999, y: -9999 };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      columns = Math.max(1, Math.floor(width / fontSize));
      drops = Array.from({ length: columns }, () => Math.random() * -40);
      ctx.fillStyle = "#0a0a0a";
      ctx.fillRect(0, 0, width, height);
    };

    const onMove = (e: MouseEvent) => {
      cursor.x = e.clientX;
      cursor.y = e.clientY;
    };

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", onMove, { passive: true });

    let raf = 0;
    const draw = () => {
      ctx.fillStyle = "rgba(10, 10, 10, 0.09)";
      ctx.fillRect(0, 0, width, height);
      ctx.font = `${fontSize}px ui-monospace, SFMono-Regular, Menlo, monospace`;

      for (let i = 0; i < columns; i++) {
        const x = i * fontSize;
        const y = drops[i] * fontSize;
        const ch = CHARS[Math.floor(Math.random() * CHARS.length)];
        const dist = Math.hypot(x - cursor.x, y - cursor.y);
        const near = dist < 130;

        ctx.fillStyle = near
          ? "rgba(255, 255, 255, 0.95)"
          : "rgba(255, 255, 255, 0.16)";
        ctx.fillText(ch, x, y);

        if (y > height && Math.random() > 0.975) {
          drops[i] = 0;
        } else {
          drops[i] += near ? 1.1 : 0.55 + Math.random() * 0.45;
        }
      }

      raf = requestAnimationFrame(draw);
    };

    raf = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
    };
  }, []);

  return <canvas className="cyber-rain" aria-hidden="true" ref={canvasRef} />;
}