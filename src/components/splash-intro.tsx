"use client";

import { useEffect, useState } from "react";

export function SplashIntro() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const timer = window.setTimeout(
      () => setVisible(false),
      reduced ? 0 : 5000,
    );
    return () => window.clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div
      className="splash-overlay"
      onClick={() => setVisible(false)}
      role="button"
      tabIndex={0}
      aria-label="Skip intro"
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") setVisible(false);
      }}
    >
      <div className="splash-glow" />
      <div className="splash-content">
        <div className="splash-logo">ZYK</div>
        <div className="splash-subtitle">Portfolio • Web Development • Security</div>
        <div className="splash-bar">
          <div className="splash-bar-fill" />
        </div>
      </div>
    </div>
  );
}