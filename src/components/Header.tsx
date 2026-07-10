"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import { useWhatsAppStore } from "@/lib/whatsapp";

const navLinks = [
  { name: "Inicio", href: "/" },
  { name: "Áreas de Práctica", href: "/areas-de-practica" },
  { name: "La Firma", href: "/firma" },
  { name: "Nuestros Abogados", href: "/abogados" },
  { name: "Resultados", href: "/resultados" },
  { name: "Contacto", href: "/contacto" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<number | null>(null);
  const pathname = usePathname();
  const { openModal } = useWhatsAppStore();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  function isActive(href: string) {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-slate-900/95 backdrop-blur-xl shadow-2xl shadow-black/20"
          : "bg-gradient-to-b from-black/70 via-black/40 to-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 lg:h-24 gap-6">

          {/* LOGO con animación */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <Link href="/" className="flex items-center gap-3 group">
              <motion.div
                className="w-12 h-12"
                whileHover={{ rotate: 5, scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="w-full h-full bg-gradient-to-br from-amber-400 to-amber-600 rounded-lg flex items-center justify-center shadow-lg group-hover:shadow-amber-500/30 transition-shadow duration-300">
                  <span className="text-slate-900 font-bold text-2xl">M</span>
                </div>
              </motion.div>
              <div className="hidden sm:block">
                <h1 className="text-white font-serif text-xl font-bold tracking-wide">
                  MEDINA ALMONTE
                </h1>
                <p className="text-amber-400 text-xs tracking-[0.2em] uppercase">
                  Firma Legal
                </p>
              </div>
            </Link>
          </motion.div>

          {/* NAVEGACIÓN CON EFECTOS PRO */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Link
                  href={link.href}
                  onMouseEnter={() => setHoveredLink(index)}
                  onMouseLeave={() => setHoveredLink(null)}
                  className={`relative px-4 py-2 text-sm font-medium transition-colors duration-300 group ${
                    isActive(link.href)
                      ? "text-amber-400"
                      : "text-white/90 hover:text-white"
                  }`}
                >
                  {/* Línea animada inferior */}
                  <motion.span
                    className="absolute bottom-0 left-1/2 h-0.5 bg-gradient-to-r from-amber-400 to-amber-600"
                    animate={{
                      width: hoveredLink === index || isActive(link.href) ? "100%" : "0%",
                      left: hoveredLink === index || isActive(link.href) ? "0%" : "50%",
                    }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  />

                  {/* Glow effect */}
                  <motion.div
                    className="absolute inset-0 bg-amber-500/5 rounded-md -z-10"
                    animate={{
                      opacity: hoveredLink === index ? 1 : 0,
                    }}
                    transition={{ duration: 0.2 }}
                  />

                  <span className="relative z-10">{link.name}</span>
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* BOTÓN CTA ULTRA-PRO */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="hidden lg:block"
          >
            <button
              onClick={() => openModal()}
              className="relative group inline-flex items-center gap-2 px-6 py-3
                       bg-gradient-to-r from-amber-500 to-amber-600
                       text-slate-900 font-bold text-sm rounded-lg
                       overflow-hidden transition-all duration-300
                       hover:shadow-2xl hover:shadow-amber-500/30 hover:scale-105"
            >
              {/* Shine effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.6 }}
              />

              <span className="relative z-10">Consulta Legal</span>
              <ArrowRight
                className="w-4 h-4 relative z-10 transition-transform duration-300
                         group-hover:translate-x-1"
              />
            </button>
          </motion.div>

          {/* BOTÓN MÓVIL */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-white hover:text-amber-400
                     transition-colors duration-200"
            aria-label="Menú de navegación"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </div>

      {/* MENÚ MÓVIL CON ANIMACIONES */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-slate-900/98 backdrop-blur-xl border-t border-white/10
                     overflow-hidden"
          >
            <div className="px-4 py-4 space-y-2">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 group ${
                      isActive(link.href)
                        ? "text-amber-400 bg-white/5"
                        : "text-white/90 hover:text-amber-400 hover:bg-white/5"
                    }`}
                  >
                    <motion.span
                      className="inline-block"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      {link.name}
                    </motion.span>
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.05 }}
              >
                <button
                  onClick={() => { setIsMobileMenuOpen(false); openModal(); }}
                  className="block w-full px-4 py-3 mt-4 bg-gradient-to-r from-amber-500 to-amber-600
                           text-slate-900 font-bold rounded-lg text-center text-sm
                           shadow-lg shadow-amber-500/20 hover:shadow-amber-500/40 transition-shadow"
                >
                  Consulta Legal Inicial
                </button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}