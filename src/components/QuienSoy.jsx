import { motion } from "framer-motion";
import { Terminal, Container, MonitorSmartphone, Server } from "lucide-react";
import SectionWrapper from "./SectionWrapper";

const stats = [
  { icon: Server, value: "+5", label: "años en infraestructura corporativa", detail: "Linux, Power AIX, Mainframe, clústeres HA" },
  { icon: Container, value: "K8s", label: "Docker · OpenShift en producción", detail: "Orquestación de microservicios reales" },
  { icon: Terminal, value: "Bash", label: "Python · APIs · Pipelines", detail: "Automatización, scripting e integraciones" },
  { icon: MonitorSmartphone, value: "Apps", label: "iOS · Android · Web publicadas", detail: "React Native, TypeScript, App Store" },
];

export default function QuienSoy() {
  return (
    <SectionWrapper id="quien-soy">
      {/* Header */}
      <div className="mb-18">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-xs font-semibold tracking-widest text-terracota uppercase"
        >
          Sobre mí
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-3 text-4xl font-bold leading-tight tracking-tight text-charcoal md:text-6xl"
        >
          Infraestructura que no se cae.
          <br />
          <span className="text-terracota">Software que sí funciona.</span>
        </motion.h2>
      </div>

      {/* Content grid */}
      <div className="grid gap-16 md:grid-cols-2 md:gap-20">
        {/* Left: narrative */}
        <div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mb-6 text-lg leading-relaxed text-charcoal/55"
          >
            Soy <strong className="text-charcoal">Salvio Ulloa</strong>. Ingeniero en Sistemas.
            Vengo de operar infraestructura crítica en centros de datos: servidores Linux,
            sistemas Power AIX y Mainframes donde cinco minutos de caída no existen.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mb-6 text-lg leading-relaxed text-charcoal/55"
          >
            En paralelo, construyo software. Expedientes clínicos, plataformas SaaS,
            apps publicadas en App Store y Google Play, automatizaciones con WhatsApp.
          </motion.p>


        </div>

        {/* Right: stats */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="flex flex-col gap-10"
        >
          {stats.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + i * 0.12, duration: 0.5, ease: "easeOut" }}
                whileHover={{ x: 6 }}
                className="group flex items-start gap-5"
              >
                <motion.div
                  whileHover={{ rotate: [0, -10, 10, 0], scale: 1.15 }}
                  transition={{ duration: 0.5 }}
                >
                  <Icon
                    size={20}
                    strokeWidth={1.5}
                    className="mt-1 flex-shrink-0 text-terracota/40 transition-colors duration-300 group-hover:text-terracota"
                  />
                </motion.div>

                <div>
                  <div className="flex items-baseline gap-2">
                    <motion.span
                      whileHover={{ scale: 1.05 }}
                      className="inline-block text-3xl font-bold tracking-tight text-charcoal"
                    >
                      {s.value}
                    </motion.span>
                    <motion.span
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.6 + i * 0.12 }}
                      className="text-sm text-charcoal/35"
                    >
                      {s.label}
                    </motion.span>
                  </div>
                  <motion.p
                    initial={{ opacity: 0, y: 4 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.65 + i * 0.12 }}
                    className="mt-1 text-[13px] text-charcoal/25"
                  >
                    {s.detail}
                  </motion.p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
