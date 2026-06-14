import { motion } from "framer-motion";

export default function SectionTitle({ children }) {
  return (
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="mb-4 text-3xl font-semibold tracking-tight text-charcoal md:text-4xl"
    >
      {children}
    </motion.h2>
  );
}
