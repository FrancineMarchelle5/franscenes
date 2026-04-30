import { useState, useEffect } from "react";

export default function Loader({ onDone }) {
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => setFading(true), 1800);
    const doneTimer = setTimeout(() => onDone(), 2300);
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(doneTimer);
    };
  }, [onDone]);

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center transition-opacity duration-500 [background:#f5f5f5]"
      style={{
        opacity: fading ? 0 : 1,
        pointerEvents: fading ? "none" : "all",
      }}
    >
      <img
        src="/loader.gif"
        alt="loading"
        className="w-32 h-32 sm:w-48 sm:h-48 object-contain"
        draggable={false}
      />
    </div>
  );
}
