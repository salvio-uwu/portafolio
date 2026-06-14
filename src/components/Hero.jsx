import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import WhatsAppButton from "./WhatsAppButton";

const chars = ["→", "↓", "←", "↑", "↙", "↘", "↗", "↖"];

const titleLine1 = "Infraestructura".split("");
const titleLine2 = "que no se cae.".split("");

export default function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });

  useEffect(() => {
    const handleMouse = (e) => {
      setMousePos({ x: e.clientX / window.innerWidth, y: e.clientY / window.innerHeight });
    };
    window.addEventListener("mousemove", handleMouse);
    return () => window.removeEventListener("mousemove", handleMouse);
  }, []);

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute h-[700px] w-[700px] rounded-full bg-terracota/4 blur-3xl"
          style={{
            left: `${mousePos.x * 50 + 25}%`,
            top: `${mousePos.y * 50 + 10}%`,
            transform: "translate(-50%, -50%)",
          }}
        />
        <div
          className="absolute h-[500px] w-[500px] rounded-full bg-sage/8 blur-3xl"
          style={{
            left: `${mousePos.x * 40 + 30}%`,
            top: `${mousePos.y * 40 + 60}%`,
            transform: "translate(-50%, -50%)",
          }}
        />
      </div>

      {Array.from({ length: 16 }).map((_, i) => (
        <motion.span
          key={i}
          className="pointer-events-none absolute text-sm text-terracota/7 select-none"
          style={{ left: `${4 + Math.random() * 92}%`, top: `${4 + Math.random() * 92}%` }}
          animate={{ y: [-20, 20, -20], x: [-5, 5, -5], rotate: [-10, 10, -10], opacity: [0.05, 0.18, 0.05] }}
          transition={{ duration: 7 + Math.random() * 6, repeat: Infinity, delay: Math.random() * 5, ease: "easeInOut" }}
        >
          {chars[i % chars.length]}
        </motion.span>
      ))}

      {["{ }", "[ ]", "</ >", "( )"].map((pair, i) => (
        <motion.span
          key={`bracket-${i}`}
          className="pointer-events-none absolute text-xs text-terracota/4 select-none"
          style={{ left: `${10 + i * 25}%`, top: `${20 + (i % 2) * 50}%` }}
          animate={{ y: [-40, 40, -40], opacity: [0.03, 0.1, 0.03] }}
          transition={{ duration: 12 + i * 2, repeat: Infinity, delay: i * 2, ease: "easeInOut" }}
        >
          {pair}
        </motion.span>
      ))}

      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="mb-12"
        >
          <span className="inline-block rounded-full border border-terracota/40 px-5 py-2 text-xs font-semibold tracking-[0.2em] text-terracota uppercase">
            Infrastructure Architect y Developer
          </span>
        </motion.div>

        <div className="mb-12">
          <motion.h1 className="text-[12vw] font-bold leading-[0.82] tracking-[-0.03em] text-charcoal md:text-7xl lg:text-8xl">
            <span className="block pb-2">
              {titleLine1.map((char, i) => (
                <motion.span
                  key={i}
                  initial={{ y: 100, rotateX: -45 }}
                  animate={{ y: 0, rotateX: 0 }}
                  transition={{ delay: 0.2 + i * 0.03, duration: 0.65, ease: [0.25, 0.1, 0, 1] }}
                  className="inline-block"
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </span>
            <span className="block text-terracota pb-2">
              {titleLine2.map((char, i) => (
                <motion.span
                  key={i}
                  initial={{ y: 100, rotateX: -45 }}
                  animate={{ y: 0, rotateX: 0 }}
                  transition={{ delay: 0.55 + i * 0.03, duration: 0.65, ease: [0.25, 0.1, 0, 1] }}
                  className="inline-block"
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.95, duration: 0.7, ease: [0.25, 0.1, 0, 1] }}
            className="mt-8 text-[4.5vw] font-medium leading-tight tracking-[-0.01em] text-charcoal/25 md:text-2xl lg:text-3xl"
          >
            Software que corre sobre ella.
          </motion.p>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.7 }}
          className="mb-4 max-w-md text-base leading-relaxed text-charcoal/55 md:text-lg"
        >
          Diseño la arquitectura en la nube y en servidores físicos,
          y programo las aplicaciones que corren dentro.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.35, duration: 0.7 }}
          className="mb-14 text-sm font-medium text-charcoal/35 md:text-base"
        >
          De la terminal al producto final.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.55, duration: 0.7 }}
          className="flex flex-col items-center gap-4 sm:flex-row"
        >
          <WhatsAppButton />
          <motion.button
            onClick={() => window.open("https://wa.me/528131380156?text=Hola%20Salvio,%20h%C3%A1blame%20de%20tu%20proyecto", "_blank")}
            whileHover={{ scale: 1.03 }}
            className="group inline-flex items-center gap-2 rounded-full border border-charcoal/15 px-8 py-4 text-sm font-medium text-charcoal/45 transition-all hover:border-charcoal/30 hover:text-charcoal/70 hover:shadow-sm"
          >
            Hablemos
          </motion.button>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8"
        animate={{ y: [0, 10, 0], opacity: [0.12, 0.35, 0.12] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <ArrowDown size={18} className="text-terracota/20" strokeWidth={1.5} />
      </motion.div>
    </section>
  );
}
