import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export default function WhatsAppButton({ floating = false }) {
  const handleClick = () => {
    window.open(
      "https://wa.me/528131380156?text=Hola%20Salvio,%20quiero%20cotizar%20un%20proyecto",
      "_blank"
    );
  };

  if (floating) {
    return (
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.15 }}
        transition={{ delay: 1.5, type: "spring", stiffness: 200 }}
        onClick={handleClick}
        className="fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full text-[#25D366]"
        aria-label="Contactar por WhatsApp"
      >
        {/* Pulse rings — border only, no background */}
        <motion.span
          animate={{ scale: [1, 1.8, 1], opacity: [0.4, 0, 0.4] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 rounded-full border-2 border-[#25D366]/40"
        />
        <motion.span
          animate={{ scale: [1, 1.4, 1], opacity: [0.3, 0, 0.3] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
          className="absolute inset-0 rounded-full border-2 border-[#25D366]/30"
        />
        <MessageCircle size={24} strokeWidth={1.5} />
      </motion.button>
    );
  }

  return (
    <motion.button
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      onClick={handleClick}
      className="inline-flex items-center gap-2.5 rounded-full border border-charcoal/15 px-8 py-4 text-sm font-medium text-charcoal/60 transition-all hover:border-terracota/30 hover:text-terracota hover:shadow-sm"
    >
      <motion.span
        animate={{ rotate: [0, 10, -10, 0] }}
        transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
      >
        <MessageCircle size={18} strokeWidth={1.5} />
      </motion.span>
      Cotiza tu proyecto
    </motion.button>
  );
}
