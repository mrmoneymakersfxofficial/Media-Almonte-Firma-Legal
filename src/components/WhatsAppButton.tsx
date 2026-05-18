"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle, X } from "lucide-react";
import { useWhatsAppStore } from "@/lib/whatsapp";

export function WhatsAppButton() {
  const { openModal } = useWhatsAppStore();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-end gap-2">
      {/* Text tooltip on hover */}
      <motion.div
        initial={false}
        animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : 10 }}
        transition={{ duration: 0.2 }}
        className="bg-navy text-white px-4 py-2 rounded-xl text-sm font-medium shadow-lg whitespace-nowrap pointer-events-none"
      >
        ¿Necesitas ayuda?
      </motion.div>

      {/* Button */}
      <motion.button
        onClick={() => openModal()}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="relative w-14 h-14 bg-whatsapp rounded-full flex items-center justify-center shadow-lg whatsapp-pulse hover:shadow-xl transition-shadow"
        aria-label="Contactar por WhatsApp"
      >
        <MessageCircle className="w-7 h-7 text-white" />
      </motion.button>
    </div>
  );
}
