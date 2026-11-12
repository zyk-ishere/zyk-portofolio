"use client";
import { useEffect, useState } from "react";

export function TypingText({ texts, speed = 80, pause = 1400 }: { texts: string[]; speed?: number; pause?: number }) {
  const [i, setI] = useState(0);
  const [shown, setShown] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = texts[i % texts.length];
    let timer: ReturnType<typeof setTimeout>;
    if (!deleting && shown.length < current.length) {
      timer = setTimeout(() => setShown(current.slice(0, shown.length + 1)), speed);
    } else if (!deleting && shown.length === current.length) {
      timer = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && shown.length > 0) {
      timer = setTimeout(() => setShown(shown.slice(0, -1)), speed / 2);
    } else {
      setDeleting(false);
      setI((v) => v + 1);
    }
    return () => clearTimeout(timer);
  }, [shown, deleting, i, texts, speed, pause]);

  return (
    <span className="mono">
      {shown}
      <span className="inline-block w-[2px] h-[1.1em] bg-foreground ml-1 align-middle cursor-blink" />
    </span>
  );
}