import { motion } from "framer-motion";
import { Stethoscope, CloudCog, Zap } from "lucide-react";
import SectionWrapper from "./SectionWrapper";

const projects = [
  {
    num: "01",
    icon: Stethoscope,
    title: "Expediente Clínico Electrónico",
    subtitle: "Sistema hospitalario con HA",
    desc: "Administración hospitalaria con ECE integrado. Montado en 4 servidores con balanceo de carga y clúster en Alta Disponibilidad. Cero caídas en entorno médico crítico.",
    tags: ["Linux", "PostgreSQL", "HA Cluster"],
    metric: "4 servidores HA",
    color: "rgba(217,119,87,0.07)",
  },
  {
    num: "02",
    icon: Zap,
    title: "Automatización Inteligente",
    subtitle: "WhatsApp + Backend",
    desc: "Automatización de flujos con integración vía WhatsApp. Procesamiento de solicitudes y actualización de BD en tiempo real. Eliminación de tareas manuales repetitivas.",
    tags: ["Python", "WhatsApp API", "Backend"],
    metric: "Menos carga operativa",
    color: "rgba(184,197,178,0.05)",
  },
  {
    num: "03",
    icon: CloudCog,
    title: "Plataforma SaaS",
    subtitle: "Multiusuario en la nube",
    desc: "Plataforma empresarial con arquitectura multiusuario y despliegue en infraestructura escalable. Cientos de usuarios simultáneos sin degradación de rendimiento.",
    tags: ["Kubernetes", "AWS", "TypeScript"],
    metric: "Escalabilidad comprobada",
    color: "rgba(217,119,87,0.07)",
  },
];

export default function Proyectos() {
  return (
    <SectionWrapper id="proyectos" className="bg-charcoal">
      <div className="mb-24">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-xs font-semibold tracking-widest text-sage uppercase"
        >
          Proyectos
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-3 text-4xl font-bold leading-tight tracking-tight text-cream md:text-6xl"
        >
          Sistemas que
          <br />
          <span className="text-terracota">ya están funcionando.</span>
        </motion.h2>
      </div>

      {projects.map((proj, i) => {
        const Icon = proj.icon;
        const isEven = i % 2 === 0;

        return (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8 }}
            className={`mb-24 last:mb-0 flex flex-col gap-8 md:flex-row md:gap-0 ${
              isEven ? "" : "md:flex-row-reverse"
            }`}
          >
            {/* Visual side — huge number with subtle glow */}
            <div className={`relative flex items-center justify-center md:w-1/2 ${isEven ? "md:pr-16" : "md:pl-16"}`}>
              {/* Glow blob behind the number */}
              <motion.div
                animate={{
                  scale: [1, 1.08, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: i * 1.5 }}
                className="absolute h-64 w-64 rounded-full blur-3xl"
                style={{ backgroundColor: proj.color }}
              />

              {/* Number */}
              <motion.span
                initial={{ opacity: 0, scale: 0.7 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 + i * 0.1, duration: 0.7, ease: "easeOut" }}
                className="relative text-[140px] font-bold leading-none tracking-tighter text-white/[0.02] select-none md:text-[180px]"
              >
                {proj.num}
              </motion.span>
            </div>

            {/* Content side */}
            <div className={`flex flex-col justify-center md:w-1/2 ${isEven ? "md:pl-8" : "md:pr-8 md:text-right"}`}>
              <div className={`mb-4 flex items-center gap-3 ${isEven ? "" : "md:flex-row-reverse"}`}>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  whileHover={{ rotate: [0, -12, 12, 0], scale: 1.15 }}
                >
                  <Icon size={28} strokeWidth={1.5} className="text-terracota" />
                </motion.div>
                <motion.span
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="text-xs font-semibold tracking-widest text-sage/60 uppercase"
                >
                  {proj.subtitle}
                </motion.span>
              </div>

              <motion.h3
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.1 }}
                className="mb-4 text-3xl font-bold leading-snug tracking-tight text-cream md:text-4xl"
              >
                {proj.title}
              </motion.h3>

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + i * 0.1 }}
                className="mb-6 max-w-md text-[15px] leading-relaxed text-cream/35"
              >
                {proj.desc}
              </motion.p>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.55 + i * 0.1 }}
                className={`flex flex-wrap items-center gap-3 ${isEven ? "" : "md:justify-end"}`}
              >
                <div className="flex flex-wrap gap-2">
                  {proj.tags.map((tag, j) => (
                    <motion.span
                      key={tag}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + j * 0.06 + i * 0.1 }}
                      whileHover={{ scale: 1.05, y: -1 }}
                      className="inline-block rounded-lg border border-white/[0.05] px-3 py-1.5 text-[11px] font-medium text-sage/50 transition-colors hover:border-sage/30 hover:text-sage/80"
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
                <div className="flex items-center gap-2">
                  <motion.span
                    animate={{ scale: [1, 1.4, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.8 }}
                    className="h-1.5 w-1.5 rounded-full bg-terracota"
                  />
                  <span className="text-sm font-semibold text-terracota">{proj.metric}</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        );
      })}
    </SectionWrapper>
  );
}
