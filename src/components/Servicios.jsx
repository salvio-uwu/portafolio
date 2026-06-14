import { motion } from "framer-motion";
import { Database, Monitor, Cloud, Zap } from "lucide-react";
import SectionWrapper from "./SectionWrapper";

const servicios = [
  {
    id: "bd",
    icon: Database,
    title: "Base de Datos y Control de Acceso",
    desc: "Diseño estructuras de datos normalizadas con control granular de roles. Migraciones con cero pérdida, alta disponibilidad con failover automático, backups cifrados y hardening en servidores Linux.",
    subs: ["Esquemas + roles", "Alta disponibilidad", "Backups y DRP", "Hardening Linux"],
  },
  {
    id: "ece",
    icon: Monitor,
    title: "Sistemas a Medida y ECE",
    desc: "Software que se adapta a tu operación. Expediente Clínico Electrónico, sistemas web con roles y auditoría, firma electrónica y flujos de aprobación. Montaje On-Premise o en la nube.",
    subs: ["ECE + normatividad", "Roles y auditoría", "Firma electrónica", "On-Premise o Cloud"],
  },
  {
    id: "saas",
    icon: Cloud,
    title: "Plataformas Cloud e Infraestructura",
    desc: "Clústeres en Alta Disponibilidad, Docker y Kubernetes, pipelines CI/CD con despliegues sin downtime, configuración multi-región con tolerancia a fallos y monitoreo 24/7.",
    subs: ["Clústeres HA", "Docker · Kubernetes", "CI/CD automatizado", "Monitoreo 24/7"],
  },
  {
    id: "auto",
    icon: Zap,
    title: "Automatización de Procesos",
    desc: "Integración con WhatsApp y APIs, enrutamiento inteligente de solicitudes, conexión en tiempo real con bases de datos, dashboards de métricas operativas y webhooks personalizados.",
    subs: ["WhatsApp + APIs", "Enrutamiento inteligente", "Conexión con BD", "Dashboards y webhooks"],
  },
];

export default function Servicios() {
  return (
    <SectionWrapper id="servicios">
      <div className="mb-16 text-center">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-xs font-semibold tracking-widest text-terracota uppercase"
        >
          Servicios
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-3 text-4xl font-bold leading-tight tracking-tight text-charcoal md:text-5xl"
        >
          Lo que construyo
          <br />
          <span className="text-terracota">para tu operación.</span>
        </motion.h2>
      </div>

      <div className="mx-auto max-w-4xl space-y-8">
        {servicios.map((s, i) => {
          const Icon = s.icon;
          const isEven = i % 2 === 0;

          return (
            <motion.div
              key={s.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.1, duration: 0.55, ease: "easeOut" }}
              className={`flex flex-col gap-6 md:flex-row md:items-start ${
                isEven ? "" : "md:flex-row-reverse"
              }`}
            >
              {/* Icono grande */}
              <motion.div
                whileHover={{ scale: 1.15, rotate: isEven ? -6 : 6 }}
                whileInView={{ rotate: [0, 5, 0, -5, 0] }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 200 }}
                className="flex h-20 w-20 flex-shrink-0 items-center justify-center text-terracota"
              >
                <Icon size={34} strokeWidth={1.5} />
              </motion.div>

              {/* Contenido */}
              <div className={`flex-1 ${isEven ? "md:text-left" : "md:text-right"}`}>
                <motion.h3
                  initial={{ opacity: 0, x: isEven ? -15 : 15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
                  className="mb-3 text-2xl font-semibold leading-snug tracking-tight text-charcoal"
                >
                  {s.title}
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.35 + i * 0.1, duration: 0.5 }}
                  className="mb-5 leading-relaxed text-charcoal/55"
                >
                  {s.desc}
                </motion.p>
                <div className={`flex flex-wrap gap-2 ${isEven ? "md:justify-start" : "md:justify-end"}`}>
                  {s.subs.map((sub, j) => (
                    <motion.span
                      key={sub}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 + j * 0.06 + i * 0.1, duration: 0.35 }}
                      whileHover={{ scale: 1.06, y: -1 }}
                      className="inline-block cursor-default rounded-full border border-charcoal/[0.06] bg-cream px-4 py-2 text-[13px] font-medium text-charcoal/45 transition-colors hover:border-terracota/20 hover:text-charcoal/70"
                    >
                      {sub}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="mx-auto mt-14 max-w-xl text-center text-sm text-charcoal/25"
      >
        Todos los proyectos incluyen arquitectura de seguridad Linux, pruebas de estrés y soporte post-entrega.
      </motion.p>
    </SectionWrapper>
  );
}
