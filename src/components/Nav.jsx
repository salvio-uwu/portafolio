import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

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
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef(null);

  const handleScroll = useCallback(() => {
    const y = window.scrollY;
    setScrolled(y > 60);

    const nav = navRef.current;
    if (!nav) return;
    const navH = nav.offsetHeight;

    let dark = false;
    for (const id of darkSections) {
      const el = document.getElementById(id);
      if (el) {
        const rect = el.getBoundingClientRect();
        const sectionTop = rect.top + y;
        const sectionBottom = rect.bottom + y;
        if (y + navH > sectionTop && y < sectionBottom) {
          dark = true;
          break;
        }
      }
    }
    setOnDark(dark);
  }, []);

  useEffect(() => {
    setReady(true);

    const raf = () => {
      handleScroll();
      ticking = false;
    };
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(raf);
        ticking = true;
      }
    };

    handleScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [handleScroll]);

  const scrollTo = (id) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const linkColor = scrolled && onDark
    ? "text-cream/35 hover:text-cream/70 hover:bg-white/[0.06]"
    : "text-charcoal/35 hover:text-charcoal/70 hover:bg-charcoal/[0.04]";

  const isDarkBg = scrolled && onDark;

  return (
    <motion.nav
      ref={navRef}
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
              ? "bg-charcoal/85 max-md:bg-charcoal/95 md:backdrop-blur-xl border-b border-white/[0.04]"
              : "bg-cream/85 max-md:bg-cream/95 md:backdrop-blur-xl border-b border-charcoal/[0.04]"
            : "bg-transparent"
        }`}
      />

      <div className="relative mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="transition-opacity hover:opacity-80 flex-shrink-0"
        >
          <img src="/logoo.png" alt="Salvio Ulloa" className="h-7 w-auto" />
        </button>

        {/* Desktop links */}
        <div className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className={`rounded-full px-3 py-1.5 text-xs font-medium transition-colors ${linkColor}`}
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className={`flex md:hidden items-center justify-center w-10 h-10 rounded-full transition-colors ${
            scrolled
              ? isDarkBg
                ? "text-cream/70 hover:text-cream"
                : "text-charcoal/50 hover:text-charcoal"
              : "text-charcoal/50 hover:text-charcoal"
          }`}
          aria-label="Abrir menú"
        >
          {menuOpen ? <X size={22} strokeWidth={1.5} /> : <Menu size={22} strokeWidth={1.5} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className={`overflow-hidden md:hidden ${
              isDarkBg
                ? "bg-charcoal/95 border-b border-white/[0.04]"
                : "bg-cream/95 border-b border-charcoal/[0.04]"
            }`}
          >
            <div className="flex flex-col px-6 pb-6 pt-2 gap-1">
              {links.map((link, i) => (
                <motion.button
                  key={link.id}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => scrollTo(link.id)}
                  className={`text-left rounded-lg px-4 py-3 text-sm font-medium transition-colors ${
                    isDarkBg
                      ? "text-cream/50 hover:text-cream hover:bg-white/[0.04]"
                      : "text-charcoal/45 hover:text-charcoal hover:bg-charcoal/[0.03]"
                  }`}
                >
                  {link.label}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
