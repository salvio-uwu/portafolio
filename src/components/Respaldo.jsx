import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionWrapper from "./SectionWrapper";

const skills = [
  { name: "Linux (RHEL, Rocky, Ubuntu)", color: "border-terracota/50 bg-terracota/15 text-terracota", desc: "Administración avanzada de servidores Linux en entornos corporativos. Hardening, monitoreo y optimización del kernel." },
  { name: "IBM AIX / Mainframe", color: "border-terracota/50 bg-terracota/15 text-terracota", desc: "Gestión de sistemas operativos IBM AIX y entornos mainframe en centros de datos de misión crítica." },
  { name: "Kubernetes", color: "border-terracota/50 bg-terracota/15 text-terracota", desc: "Orquestación de contenedores a escala empresarial. Clústeres, auto-scaling y balanceo de carga automatizado." },
  { name: "Docker", color: "border-terracota/50 bg-terracota/15 text-terracota", desc: "Containerización de aplicaciones para entornos portables, reproducibles y listos para CI/CD." },
  { name: "OpenShift", color: "border-terracota/50 bg-terracota/15 text-terracota", desc: "Plataforma enterprise Kubernetes de Red Hat. Despliegue, gestión y seguridad de aplicaciones containerizadas." },
  { name: "AWS", color: "border-terracota/50 bg-terracota/15 text-terracota", desc: "Arquitectura cloud sobre Amazon Web Services. EC2, S3, RDS, VPC y servicios gestionados." },
  { name: "Ansible", color: "border-sage/50 bg-sage/15 text-sage", desc: "Automatización de configuración y despliegue sin agentes. Infraestructura como código para entornos Linux y cloud." },
  { name: "CI/CD", color: "border-sage/50 bg-sage/15 text-sage", desc: "Pipelines de integración y entrega continua. Despliegues automatizados con cero downtime." },
  { name: "Nginx", color: "border-sage/50 bg-sage/15 text-sage", desc: "Servidor web y proxy reverso de alto rendimiento. Balanceo de carga, SSL termination y caching." },
  { name: "Terraform", color: "border-sage/50 bg-sage/15 text-sage", desc: "Infraestructura como código multi-cloud. Provisionamiento declarativo y control de versiones de la infraestructura." },
  { name: "Python", color: "border-cream/20 bg-cream/[0.06] text-cream/90", desc: "Desarrollo backend, automatización de procesos, webhooks e integraciones con APIs y bases de datos." },
  { name: "TypeScript", color: "border-cream/20 bg-cream/[0.06] text-cream/90", desc: "Desarrollo frontend y backend tipado. Aplicaciones robustas con tipado estático y tooling moderno." },
  { name: "React / React Native", color: "border-cream/20 bg-cream/[0.06] text-cream/90", desc: "Construcción de interfaces web y aplicaciones móviles nativas para iOS y Android desde un mismo codebase." },
  { name: "PostgreSQL", color: "border-cream/20 bg-cream/[0.06] text-cream/90", desc: "Base de datos relacional de grado empresarial. Diseño de esquemas, optimización de queries y alta disponibilidad." },
  { name: "Git", color: "border-cream/20 bg-cream/[0.06] text-cream/90", desc: "Control de versiones distribuido. Flujos de trabajo colaborativos, branching strategies y code review." },
  { name: "Bash", color: "border-cream/10 bg-cream/[0.03] text-cream/60", desc: "Shell scripting para automatización de tareas del sistema, despliegues y administración de servidores Linux." },
  { name: "Firewall y Seguridad", color: "border-cream/10 bg-cream/[0.03] text-cream/60", desc: "Configuración de firewalls, reglas de filtrado, hardening de sistemas y políticas de seguridad perimetral." },
  { name: "TCP/IP y DNS", color: "border-cream/10 bg-cream/[0.03] text-cream/60", desc: "Protocolos fundamentales de red. Configuración, diagnóstico y resolución de problemas de conectividad." },
  { name: "VPN", color: "border-cream/10 bg-cream/[0.03] text-cream/60", desc: "Configuración de túneles seguros site-to-site y acceso remoto cifrado para infraestructura distribuida." },
  { name: "CCNA", color: "border-cream/10 bg-cream/[0.03] text-cream/60", desc: "Fundamentos de networking Cisco. Enrutamiento, switching, VLANs y configuración de dispositivos de red." },
];

function SkillBadge({ skill, activeId, setActiveId }) {
  const ref = useRef(null);
  const isActive = activeId === skill.name;

  useEffect(() => {
    if (!isActive) return;
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setActiveId(null);
      }
    };
    document.addEventListener("mousedown", handler);
    document.addEventListener("touchstart", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("touchstart", handler);
    };
  }, [isActive, setActiveId]);

  return (
    <div
      ref={ref}
      className="relative"
      onMouseEnter={() => setActiveId(skill.name)}
      onMouseLeave={() => setActiveId(null)}
    >
      <motion.span
        whileHover={{ scale: 1.08, y: -2, transition: { duration: 0.15 } }}
        onClick={() => setActiveId(isActive ? null : skill.name)}
        className={`inline-block cursor-pointer rounded-xl border px-4 py-2.5 text-sm font-semibold transition-all ${skill.color} ${isActive ? "z-20" : "z-10"}`}
      >
        {skill.name}
      </motion.span>

      <AnimatePresence>
        {isActive && (
          <motion.div
            initial={{ opacity: 0, y: 6, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 4, scale: 0.97 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="absolute bottom-full left-1/2 z-30 mb-3 w-64 -translate-x-1/2 rounded-xl border border-white/[0.08] bg-charcoal px-4 py-3 shadow-2xl shadow-black/40"
          >
            <p className="text-xs leading-relaxed text-cream/70">{skill.desc}</p>
            <div className="absolute left-1/2 top-full -translate-x-1/2 border-[6px] border-transparent border-t-charcoal" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Respaldo() {
  const [activeSkill, setActiveSkill] = useState(null);

  return (
    <SectionWrapper id="respaldo" className="bg-charcoal">
      <div className="text-center">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-xs font-semibold tracking-widest text-sage uppercase"
        >
          Stack tecnológico
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mt-3 mb-6 max-w-2xl text-4xl font-bold leading-tight tracking-tight text-cream md:text-5xl"
        >
          Lo que uso para que
          <br />
          <span className="text-terracota">tu sistema no falle.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mx-auto mb-14 max-w-xl text-cream/55"
        >
          Cada herramienta elegida por estabilidad, no por moda. Tecnología que ha soportado
          operaciones críticas en centros de datos corporativos sin interrupción.
        </motion.p>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mx-auto flex max-w-3xl flex-wrap justify-center gap-3"
        >
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: {
                  opacity: 1,
                  scale: 1,
                  transition: { delay: 0.02 * i, duration: 0.35, ease: "easeOut" },
                },
              }}
            >
              <SkillBadge skill={skill} activeId={activeSkill} setActiveId={setActiveSkill} />
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="mt-14 text-sm font-semibold tracking-widest text-cream/15 uppercase"
        >
          Estabilidad · Seguridad · Rendimiento
        </motion.p>
      </div>
    </SectionWrapper>
  );
}
