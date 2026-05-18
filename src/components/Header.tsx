"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useWhatsAppStore } from "@/lib/whatsapp";
import Image from "next/image";

const navItems = [
  { label: "Inicio", href: "#inicio" },
  { label: "Servicios", href: "#servicios" },
  { label: "Constitución", href: "#constitucion" },
  { label: "Contabilidad", href: "#contabilidad" },
  { label: "Defensa Tributaria", href: "#defensa" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Contacto", href: "#contacto" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const { openModal } = useWhatsAppStore();

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 50);
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function handleNavClick() {
    setIsMobileOpen(false);
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="#inicio" className="flex items-center gap-3 shrink-0">
            <Image
              src="/logo.png"
              alt="Jhon & Asociados"
              width={40}
              height={40}
              className="rounded-lg"
            />
            <div className="hidden sm:block">
              <h1
                className={`text-lg font-bold leading-tight transition-colors duration-300 ${
                  isScrolled ? "text-navy" : "text-white"
                }`}
              >
                Jhon & Asociados
              </h1>
              <p
                className={`text-xs transition-colors duration-300 ${
                  isScrolled ? "text-emerald" : "text-emerald-light"
                }`}
              >
                Especialistas Tributarios
              </p>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors hover:bg-white/10 ${
                  isScrolled
                    ? "text-navy hover:bg-navy/5 hover:text-navy-dark"
                    : "text-white/90 hover:text-white"
                }`}
              >
                {item.label}
              </a>
            ))}
            <button
              onClick={() => openModal()}
              className="ml-3 bg-emerald hover:bg-emerald-dark text-white px-5 py-2 rounded-lg text-sm font-semibold transition-colors"
            >
              Consultoría Gratuita
            </button>
          </nav>

          {/* Mobile hamburger */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              isScrolled ? "text-navy hover:bg-gray-100" : "text-white hover:bg-white/10"
            }`}
            aria-label="Menú"
          >
            {isMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-gray-100 shadow-lg overflow-hidden"
          >
            <nav className="max-w-7xl mx-auto px-4 py-4 space-y-1">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={handleNavClick}
                  className="block px-4 py-3 text-sm font-medium text-navy hover:bg-navy/5 rounded-lg transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <button
                onClick={() => {
                  handleNavClick();
                  openModal();
                }}
                className="w-full mt-3 bg-emerald hover:bg-emerald-dark text-white px-5 py-3 rounded-lg text-sm font-semibold transition-colors"
              >
                Consultoría Gratuita
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
