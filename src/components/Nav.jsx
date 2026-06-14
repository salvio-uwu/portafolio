import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";

const links = [
  { id: "quien-soy", label: "Sobre mí" },
  { id: "proyectos", label: "Proyectos" },
  { id: "servicios", label: "Servicios" },
  { id: "como-trabajo", label: "Proceso" },
  { id: "respaldo", label: "Stack" },
  { id: "contacto", label: "Contacto" },
];

const darkSections = ["proyectos", "respaldo"];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [ready, setReady] = useState(false);
  const [onDark, setOnDark] = useState(false);

  const handleScroll = useCallback(() => {
    const y = window.scrollY;
    setScrolled(y > 60);

    const navH = 72;
    const checkY = y + navH;

    let dark = false;
    for (const id of darkSections) {
      const el = document.getElementById(id);
      if (el) {
        const top = el.offsetTop;
        const bottom = top + el.offsetHeight;
        if (checkY >= top && checkY < bottom) {
          dark = true;
          break;
        }
      }
    }
    setOnDark(dark);
  }, []);

  useEffect(() => {
    setReady(true);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={false}
      animate={{
        y: ready ? 0 : -20,
        opacity: ready ? 1 : 0,
      }}
      transition={{ delay: 1.5, duration: 0.35 }}
      className="fixed top-0 left-0 right-0 z-40"
    >
      <div
        className={`absolute inset-0 transition-all duration-500 ${
          scrolled
            ? onDark
              ? "bg-charcoal/40 backdrop-blur-xl border-b border-white/[0.04]"
              : "bg-cream/40 backdrop-blur-xl border-b border-charcoal/[0.04]"
            : "bg-transparent"
        }`}
      />

      <div className="relative mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="transition-opacity hover:opacity-80"
        >
          <img src="/logoo.png" alt="Salvio Ulloa" className="h-10 w-auto" />
        </button>

        <div className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className={`rounded-full px-3 py-1.5 text-xs font-medium transition-colors ${
                scrolled && onDark
                  ? "text-cream/35 hover:text-cream/70 hover:bg-white/[0.06]"
                  : "text-charcoal/35 hover:text-charcoal/70 hover:bg-charcoal/[0.04]"
              }`}
            >
              {link.label}
            </button>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}
