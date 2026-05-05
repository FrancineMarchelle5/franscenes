import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const links = [
  { label: "days", anchor: "days" },
  { label: "about", anchor: "about" },
  { label: "acknowledgement", anchor: "acknowledgement" },
  { label: "contact", anchor: "contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();
  const base = pathname === '/' ? '' : '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="fixed top-5 left-0 right-0 z-50 flex justify-center px-4">
      {/* desktop pill */}
      <nav
        className={`hidden md:flex items-center gap-2 rounded-full border border-border px-3 py-3 transition-all duration-500 ${
          scrolled
            ? "bg-background/95 backdrop-blur-md shadow-md shadow-foreground/5"
            : "bg-background/80 backdrop-blur-sm shadow-sm shadow-foreground/5"
        }`}
      >
        {/* brand */}
        <a href="/" className="flex items-center gap-2.5 pl-4 pr-5 py-1.5">
          <span className="font-serif italic text-2xl tracking-wide text-foreground leading-none">
            franscenes
          </span>
        </a>

        <div className="w-px h-5 bg-border mx-2" />

        {links.map(({ label, anchor }) => (
          <a
            key={label}
            href={`${base}#${anchor}`}
            className="px-5 py-2.5 text-xs uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground rounded-full hover:bg-muted transition-all duration-200"
          >
            {label}
          </a>
        ))}

        <div className="w-px h-5 bg-border mx-2" />

        <a
          href={`${base}#days`}
          className="px-6 py-2.5 text-xs uppercase tracking-[0.2em] bg-primary text-primary-foreground rounded-full hover:opacity-90 transition-opacity duration-200"
        >
          explore
        </a>
      </nav>

      {/* mobile pill */}
      <div className="md:hidden w-full max-w-sm">
        <div
          className={`relative flex items-center justify-between rounded-full border border-border px-5 py-3 transition-all duration-500 ${
            scrolled
              ? "bg-background/95 backdrop-blur-md shadow-md shadow-foreground/5"
              : "bg-background/80 backdrop-blur-sm shadow-sm shadow-foreground/5"
          }`}
        >
          <a
            href="/"
            className="font-serif italic text-xl tracking-wide text-foreground leading-none"
          >
            franscenes
          </a>

          <img
            src="/loader.gif"
            alt=""
            className="absolute left-[53%] -translate-x-1/2 w-16 h-16 object-contain pointer-events-none"
            draggable={false}
          />

          <button
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="toggle menu"
            className="text-muted-foreground hover:text-foreground transition-colors duration-200 p-1"
          >
            {menuOpen ? (
              <X size={18} strokeWidth={1.5} />
            ) : (
              <Menu size={18} strokeWidth={1.5} />
            )}
          </button>
        </div>

        {/* dropdown */}
        <div
          className={`mt-2 rounded-2xl border border-border overflow-hidden transition-all duration-300 ease-in-out ${
            menuOpen
              ? "max-h-64 opacity-100"
              : "max-h-0 opacity-0 pointer-events-none"
          } ${
            scrolled
              ? "bg-background/95 backdrop-blur-md"
              : "bg-background/90 backdrop-blur-sm"
          }`}
        >
          <div className="flex flex-col py-2">
            {links.map(({ label, anchor }) => (
              <a
                key={label}
                href={`${base}#${anchor}`}
                onClick={closeMenu}
                className="px-6 py-3.5 text-xs uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-all duration-200"
              >
                {label}
              </a>
            ))}
            <div className="mx-6 my-2 h-px bg-border" />
            <a
              href={`${base}#days`}
              onClick={closeMenu}
              className="mx-4 mb-2 py-3 text-xs uppercase tracking-[0.2em] bg-primary text-primary-foreground rounded-full text-center hover:opacity-90 transition-opacity duration-200"
            >
              explore
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
