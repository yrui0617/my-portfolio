"use client";
import { useEffect, useRef } from "react";

export default function GlowCursor() {
  const glowRef = useRef(null);

  useEffect(() => {
    let frame = 0;
    let x = 0;
    let y = 0;

    const updateGlow = () => {
      frame = 0;

      if (glowRef.current) {
        glowRef.current.style.transform = `translate(${x - 100}px, ${y - 100}px)`;
      }
    };

    const moveCursor = (e) => {
      x = e.clientX;
      y = e.clientY;

      if (!frame) {
        frame = window.requestAnimationFrame(updateGlow);
      }
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);

      if (frame) {
        window.cancelAnimationFrame(frame);
      }
    };
  }, []);

  return (
    <div
      ref={glowRef}
      className="pointer-events-none fixed top-0 left-0 z-50"
    >
      <div className="w-48 h-48 bg-blue-500/20 blur-3xl rounded-full"></div>
    </div>
  );
}
