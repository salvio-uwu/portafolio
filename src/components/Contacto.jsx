import { motion } from "framer-motion";
import { Mail, Phone, ArrowRight } from "lucide-react";
import SectionWrapper from "./SectionWrapper";

export default function Contacto() {
  return (
    <SectionWrapper id="contacto">
      <div className="mx-auto max-w-2xl text-center">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-xs font-semibold tracking-widest text-terracota uppercase"
        >
          Contacto
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-3 text-4xl font-bold leading-tight tracking-tight text-charcoal md:text-6xl"
        >
          Cuéntame tu
          <br />
          <span className="text-terracota">proyecto.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="mt-6 text-lg leading-relaxed text-charcoal/50"
        >
          Te respondo en menos de 48 horas con una propuesta sin costo.
        </motion.p>

        {/* Contact links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-8"
        >
          {[
            { icon: Mail, label: "salvioulloa@gmail.com", href: "mailto:salvioulloa@gmail.com" },
            { icon: Phone, label: "81 3138 0156", href: "tel:+528131380156" },
          ].map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.a
                key={i}
                href={item.href}
                whileHover={{ scale: 1.04 }}
                className="group inline-flex items-center gap-3 rounded-full border border-charcoal/[0.06] px-6 py-3 text-sm font-medium text-charcoal/45 transition-all hover:border-terracota/30 hover:text-terracota hover:shadow-sm"
              >
                <Icon size={16} strokeWidth={1.5} />
                {item.label}
              </motion.a>
            );
          })}
        </motion.div>

        {/* Big WhatsApp CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.45 }}
          className="mt-8"
        >
          <motion.a
            href="https://wa.me/528131380156?text=Hola%20Salvio,%20cu%C3%A9ntame%20de%20tu%20proyecto"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03, gap: "12px" }}
            className="group inline-flex items-center gap-2 rounded-full bg-charcoal px-8 py-4 text-sm font-medium text-cream transition-all hover:bg-charcoal/90 hover:shadow-lg"
          >
            Escríbeme por WhatsApp
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
          </motion.a>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
