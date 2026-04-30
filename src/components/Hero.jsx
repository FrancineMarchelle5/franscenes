import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

const slides = [
  "/carousel/IMG_2134.JPG",
  "/carousel/IMG_2355.JPG",
  "/carousel/IMG_2455.JPG",
  "/carousel/IMG_2564.JPG",
  "/carousel/IMG_2845.JPG",
  "/carousel/IMG_2895.JPG",
  "/carousel/IMG_3945.JPG",
  "/carousel/IMG_4365.JPG",
  "/carousel/IMG_4591.JPG",
  "/carousel/IMG_4779.JPG",
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const intervalRef = useRef(null);
  const touchStartX = useRef(null);

  const resetTimer = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(
      () => setCurrent((i) => (i + 1) % slides.length),
      4000,
    );
  };

  useEffect(() => {
    resetTimer();
    return () => clearInterval(intervalRef.current);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const prev = () => {
    setCurrent((i) => (i - 1 + slides.length) % slides.length);
    resetTimer();
  };

  const next = () => {
    setCurrent((i) => (i + 1) % slides.length);
    resetTimer();
  };

  const onTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const delta = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(delta) > 50) {
      delta > 0 ? next() : prev();
    }
    touchStartX.current = null;
  };

  return (
    <section
      className="relative min-h-[65vh] md:min-h-screen flex items-center justify-center overflow-hidden"
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      {/* carousel slides — all stacked, crossfade via opacity */}
      {slides.map((src, i) => (
        <div
          key={src}
          aria-hidden="true"
          className="absolute inset-0 transition-opacity duration-700 ease-in-out"
          style={{
            backgroundImage: `url('${src}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: i === current ? 1 : 0,
          }}
        />
      ))}

      {/* warm overlay — reduced opacity so images read through */}
      <div className="absolute inset-0 bg-background/30" />

      {/* desktop prev / next buttons */}
      <button
        onClick={prev}
        aria-label="previous slide"
        className="absolute left-5 top-1/2 -translate-y-1/2 z-20 hidden md:flex items-center justify-center w-10 h-10 rounded-full border border-foreground/20 bg-background/25 backdrop-blur-sm text-foreground/50 hover:text-foreground hover:border-foreground/40 hover:bg-background/40 transition-all duration-200"
      >
        <ChevronLeft size={18} strokeWidth={1.5} />
      </button>
      <button
        onClick={next}
        aria-label="next slide"
        className="absolute right-5 top-1/2 -translate-y-1/2 z-20 hidden md:flex items-center justify-center w-10 h-10 rounded-full border border-foreground/20 bg-background/25 backdrop-blur-sm text-foreground/50 hover:text-foreground hover:border-foreground/40 hover:bg-background/40 transition-all duration-200"
      >
        <ChevronRight size={18} strokeWidth={1.5} />
      </button>

      {/* content */}
      <div className="relative z-10 text-center px-6 max-w-3xl mt-20 sm:mt-0">
        <h1
          className="font-serif italic leading-tight text-foreground mb-6"
          style={{ fontSize: "clamp(2.2rem, 6vw, 4.5rem)" }}
        >
          Beyond the Classroom:
          <br />A Week in the Real World
        </h1>

        <p className="text-[10px] uppercase tracking-[0.5em] text-foreground/70 mb-2">
          seven days in retrospect
        </p>

        <p className="text-[11px] uppercase tracking-[0.3em] text-foreground/60 mb-12">
          an educational tour
        </p>

        <a
          href="#days"
          className="group relative inline-flex items-center gap-3 text-[10px] uppercase tracking-[0.35em] border border-foreground/25 px-10 py-3.5 text-foreground hover:bg-foreground hover:text-background transition-all duration-300 overflow-hidden"
        >
          {/* shimmer sweep */}
          <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none" />
          explore
          {/* animated arrow */}
          <ArrowRight
            size={12}
            strokeWidth={1.5}
            className="inline-block translate-x-0 group-hover:translate-x-1.5 transition-transform duration-300 ease-out"
          />
        </a>
      </div>

      {/* slide indicators */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setCurrent(i);
              resetTimer();
            }}
            aria-label={`go to slide ${i + 1}`}
            className={`h-px transition-all duration-500 bg-foreground ${
              i === current ? "w-8 opacity-60" : "w-3 opacity-20"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
