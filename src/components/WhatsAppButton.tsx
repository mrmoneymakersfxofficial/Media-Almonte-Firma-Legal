"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useWhatsAppStore } from "@/lib/whatsapp";

// Rotating notification messages — each with a different intent
const NOTIFICATIONS = [
  {
    title: "Jhon&Asociados",
    message: "¿Necesitas ayuda con tu empresa? Conversemos ahora",
    time: "ahora",
  },
  {
    title: "Constitución de Empresas",
    message: "Formaliza tu negocio desde S/ 380. ¡Consulta gratis!",
    time: "hace 1 min",
  },
  {
    title: "¿Inconvenientes con SUNAT?",
    message: "Te defendemos de fiscalizaciones y cobranzas coactivas",
    time: "hace 3 min",
  },
  {
    title: "Contabilidad Integral",
    message: "Terceriza tus libros y declara a tiempo. Desde S/ 350/mes",
    time: "hace 5 min",
  },
  {
    title: "Asesoría Tributaria",
    message: "Evita multas. Consultoría gratuita sin compromiso",
    time: "hace 8 min",
  },
  {
    title: "Planillas y Laboral",
    message: "Nosotros manejamos tu planilla. Tú creces tu negocio",
    time: "hace 10 min",
  },
  {
    title: "Cotización Inmediata",
    message: "Solicita tu cotización personalizada por WhatsApp",
    time: "hace 12 min",
  },
];

// Timing constants
const FIRST_DELAY = 5000;        // 5s before first notification
const CYCLE_INTERVAL = 35000;    // 35s between notifications
const VISIBLE_DURATION = 5000;   // 5s each notification stays visible
const VIBRATE_DURATION = 1500;   // 1.5s vibration
const MAX_NOTIFICATIONS = 7;     // One full cycle through all messages

export function WhatsAppButton() {
  const { openModal } = useWhatsAppStore();
  const [isHovered, setIsHovered] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [isVibrating, setIsVibrating] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCount, setShowCount] = useState(0);
  const [lastUserInteraction, setLastUserInteraction] = useState(0);
  const timersRef = useRef<ReturnType<typeof setTimeout>[]>([]);

  const clearAllTimers = useCallback(() => {
    timersRef.current.forEach(clearTimeout);
    timersRef.current = [];
  }, []);

  const showNotificationBubble = useCallback((index: number) => {
    const notif = NOTIFICATIONS[index];
    if (!notif) return;

    setCurrentIndex(index);
    setShowCount(prev => prev + 1);

    // Vibrate first
    setIsVibrating(true);

    // Show bubble after short vibration
    const showTimer = setTimeout(() => {
      setShowNotification(true);
    }, 400);
    timersRef.current.push(showTimer);

    // Stop vibration
    const stopVibTimer = setTimeout(() => {
      setIsVibrating(false);
    }, VIBRATE_DURATION);
    timersRef.current.push(stopVibTimer);

    // Auto-dismiss
    const dismissTimer = setTimeout(() => {
      setShowNotification(false);
    }, VISIBLE_DURATION);
    timersRef.current.push(dismissTimer);
  }, []);

  useEffect(() => {
    // First notification after 5s
    const firstTimer = setTimeout(() => {
      showNotificationBubble(0);
    }, FIRST_DELAY);
    timersRef.current.push(firstTimer);

    // Cycle through remaining notifications
    const cycleTimer = setInterval(() => {
      // Don't show if user interacted recently (clicked widget or modal in last 60s)
      if (Date.now() - lastUserInteraction < 60000) return;

      const nextCount = showCount + 1;
      if (nextCount >= MAX_NOTIFICATIONS) {
        clearInterval(cycleTimer);
        return;
      }
      const nextIndex = nextCount % NOTIFICATIONS.length;
      showNotificationBubble(nextIndex);
    }, CYCLE_INTERVAL);

    return () => {
      clearAllTimers();
      clearInterval(cycleTimer);
    };
  }, [showNotificationBubble, showCount, lastUserInteraction, clearAllTimers]);

  const handleNotificationClick = () => {
    openModal();
    setShowNotification(false);
    setLastUserInteraction(Date.now());
  };

  const handleButtonClick = () => {
    openModal();
    setShowNotification(false);
    setLastUserInteraction(Date.now());
  };

  const currentNotif = NOTIFICATIONS[currentIndex];

  return (
    <div
      className="whatsapp-float"
      style={{ position: "fixed", bottom: "25px", right: "25px", zIndex: 999999 }}
    >
      {/* Notification Bubble */}
      <AnimatePresence mode="wait">
        {showNotification && currentNotif && (
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 15, scale: 0.85 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="absolute bottom-[72px] right-0 w-[270px] sm:w-[290px] cursor-pointer"
            onClick={handleNotificationClick}
          >
            {/* Bubble arrow */}
            <div className="absolute bottom-0 right-[24px] translate-y-full">
              <div
                className="w-3 h-3 rotate-45"
                style={{ backgroundColor: "#FFFFFF", boxShadow: "2px 2px 4px rgba(0,0,0,0.08)" }}
              />
            </div>
            {/* Bubble content */}
            <div className="bg-white rounded-xl shadow-2xl p-4 border border-gray-100 relative overflow-hidden">
              {/* Green accent bar at top */}
              <div className="absolute top-0 left-0 right-0 h-[3px]" style={{ backgroundColor: "#25D366" }} />
              <div className="flex gap-3 items-start pt-1">
                {/* Mini WhatsApp icon */}
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
                  style={{ backgroundColor: "#25D366" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    style={{ width: "20px", height: "20px", fill: "#FFFFFF" }}
                  >
                    <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
                  </svg>
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-bold text-gray-900 leading-tight">{currentNotif.title}</p>
                  <p className="text-xs text-gray-500 mt-1 leading-relaxed">{currentNotif.message}</p>
                </div>
              </div>
              {/* Time ago */}
              <p className="text-[10px] text-gray-400 mt-2.5 text-right">{currentNotif.time}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hover tooltip (desktop only) — hide when notification is showing */}
      <AnimatePresence>
        {isHovered && !showNotification && (
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 10 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-1/2 right-[68px] translate-y-1/2 bg-[#002350] text-white px-4 py-2 rounded-xl text-sm font-medium shadow-lg whitespace-nowrap pointer-events-none hidden sm:block"
          >
            ¿Necesitas ayuda?
            <div className="absolute top-1/2 -right-2 -translate-y-1/2 w-2 h-2 bg-[#002350] rotate-45" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* WhatsApp Button */}
      <button
        onClick={handleButtonClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`relative w-[60px] h-[60px] rounded-full flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95 ${
          isVibrating ? "whatsapp-vibrate" : ""
        }`}
        style={{
          backgroundColor: "#25D366",
          boxShadow: isVibrating
            ? "0 0 0 8px rgba(37, 211, 102, 0.2), 0 0 20px rgba(37, 211, 102, 0.3)"
            : "0 4px 20px rgba(37, 211, 102, 0.4)",
        }}
        aria-label="Contactar por WhatsApp"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
          style={{ width: "32px", height: "32px", fill: "#FFFFFF" }}
        >
          <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
        </svg>

        {/* Red notification badge — visible during vibration */}
        <AnimatePresence>
          {isVibrating && (
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              transition={{ type: "spring", stiffness: 500, damping: 15 }}
              className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center border-2 border-white shadow-md"
            >
              <span className="text-white text-[10px] font-bold leading-none">1</span>
            </motion.span>
          )}
        </AnimatePresence>
      </button>
    </div>
  );
}
