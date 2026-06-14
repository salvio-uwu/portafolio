import { motion } from "framer-motion";
import { MessageSquare, FileCheck, Wrench, Rocket } from "lucide-react";
import SectionWrapper from "./SectionWrapper";

const steps = [
  {
    num: "01",
    icon: MessageSquare,
    title: "Cuéntame tu problema",
    desc: "Te escucho sin filtros técnicos. En 48 horas tienes mi diagnóstico y clasificación del proyecto.",
  },
  {
    num: "02",
    icon: FileCheck,
    title: "Propuesta concreta",
    desc: "Recibes alcance detallado, precio fijo y fecha de entrega. Sin sorpresas ni letras chiquitas.",
  },
  {
    num: "03",
    icon: Wrench,
    title: "Desarrollo y pruebas",
    desc: "Construyo, monto en tu servidor y someto el sistema a pruebas de estrés antes de entregarlo.",
  },
  {
    num: "04",
    icon: Rocket,
    title: "Entrega con soporte",
    desc: "Te entrego documentación, capacitación y acompañamiento post-entrega para que tu equipo sea autónomo.",
  },
];

export default function ComoTrabajo() {
  return (
    <SectionWrapper id="como-trabajo" className="bg-white">
      <div className="mb-16 text-center">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-xs font-semibold tracking-widest text-terracota uppercase"
        >
          Proceso
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-3 text-4xl font-bold leading-tight tracking-tight text-charcoal md:text-5xl"
        >
          Cómo trabajo.
        </motion.h2>
      </div>

      <div className="mx-auto max-w-6xl">
        {/* Horizontal timeline on desktop, vertical on mobile */}
        <div className="relative">
          {/* Connecting line — horizontal on md+, vertical on mobile */}
          <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-charcoal/[0.06] md:left-0 md:top-1/2 md:h-px md:w-full" />

          <div className="relative grid gap-10 md:grid-cols-4">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ delay: i * 0.15, duration: 0.55, ease: "easeOut" }}
                  className="group relative flex flex-col items-center text-center"
                >
                  {/* Dot on the line — mobile center, desktop top */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.15, type: "spring", stiffness: 200 }}
                    className="relative z-10 mb-6 flex h-14 w-14 items-center justify-center rounded-full"
                  >
                    {/* Outer ring pulsing */}
                    <motion.span
                      animate={{
                        scale: [1, 1.4, 1],
                        opacity: [0.3, 0, 0.3],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: i * 0.6,
                        ease: "easeInOut",
                      }}
                      className="absolute inset-0 rounded-full border-2 border-terracota/20"
                    />
                    {/* Number badge */}
                    <motion.span
                      whileHover={{ scale: 1.1 }}
                      className="flex h-full w-full items-center justify-center rounded-full border-2 border-terracota/20 bg-white text-lg font-bold text-terracota shadow-md transition-shadow group-hover:shadow-lg"
                    >
                      {step.num}
                    </motion.span>
                  </motion.div>

                  {/* Content card */}
                  <motion.div
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.2 }}
                    className="flex flex-1 flex-col items-center rounded-2xl border border-transparent p-5 transition-all group-hover:border-terracota/10 group-hover:bg-cream group-hover:shadow-lg"
                  >
                    <motion.div
                      animate={{ rotate: [0, -5, 5, 0] }}
                      transition={{ duration: 4, repeat: Infinity, delay: i * 0.8 }}
                      className="mb-4 text-terracota"
                    >
                      <Icon size={28} strokeWidth={1.5} />
                    </motion.div>

                    <h3 className="mb-2 text-lg font-semibold text-charcoal">
                      {step.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-charcoal/45">
                      {step.desc}
                    </p>
                  </motion.div>

                  {/* Arrow between steps (desktop only) */}
                  {i < steps.length - 1 && (
                    <div className="absolute hidden md:flex -right-2 top-7 items-center text-charcoal/[0.08]">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M5 12h14M13 5l7 7-7 7" />
                      </svg>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
