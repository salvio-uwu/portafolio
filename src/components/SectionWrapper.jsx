import { motion } from "framer-motion";

export default function SectionWrapper({ children, id, className = "" }) {
  return (
    <section id={id} className={`py-20 md:py-28 ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="mx-auto max-w-6xl px-6"
      >
        {children}
      </motion.div>
    </section>
  );
}
