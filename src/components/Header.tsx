"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 header-compact ${
        isScrolled
          ? "bg-slate-900/95 backdrop-blur-md shadow-lg py-2"
          : "bg-gradient-to-b from-black/60 to-transparent py-3"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">

          {/* LOGO — Texto blanco + icono dorado */}
          <Link href="/" className="flex-shrink-0">
            <div className="flex items-center gap-3">
              {/* Icono dorado */}
              <div className="w-10 h-10">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <path
                    d="M50 5 L50 25 M30 15 Q50 25 70 15 M30 15 L30 45 L50 35 L70 45 L70 15 M30 45 L30 85 L50 75 L70 85 L70 45"
                    fill="none"
                    stroke="#D4AF37"
                    strokeWidth="3"
                  />
                  <circle cx="30" cy="50" r="8" fill="#D4AF37" />
                  <circle cx="70" cy="50" r="8" fill="#D4AF37" />
                </svg>
              </div>
              {/* Texto blanco para mejor legibilidad */}
              <div className="hidden sm:block">
                <h1 className="text-white font-serif text-lg font-bold leading-tight">
                  MEDINA ALMONTE
                </h1>
                <p className="text-amber-400 text-xs tracking-wider">
                  FIRMA LEGAL
                </p>
              </div>
            </div>
          </Link>

          {/* NAVEGACIÓN ESCRITORIO — Compacta */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`px-3 py-2 text-sm font-medium rounded-md transition-colors duration-200 whitespace-nowrap ${
                  isActive(link.href)
                    ? "text-amber-400 bg-white/5"
                    : "text-white/90 hover:text-amber-400 hover:bg-white/5"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* BOTÓN CTA — Compacto */}
          <div className="hidden lg:block">
            <button
              onClick={() => openModal()}
              className="px-4 py-2 bg-amber-500 hover:bg-amber-600 text-slate-900 text-sm font-semibold rounded-md transition-all duration-200 shadow-lg hover:shadow-amber-500/25"
            >
              Consulta Legal
            </button>
          </div>

          {/* BOTÓN MÓVIL */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-white hover:text-amber-400 transition-colors"
            aria-label="Menú de navegación"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* MENÚ MÓVIL — Dropdown compacto */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-slate-900/98 backdrop-blur-md border-t border-white/10">
          <div className="px-4 py-3 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block px-3 py-3 rounded-md text-sm font-medium transition-colors ${
                  isActive(link.href)
                    ? "text-amber-400 bg-white/5"
                    : "text-white/90 hover:text-amber-400 hover:bg-white/5"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <button
              onClick={() => { setIsMobileMenuOpen(false); openModal(); }}
              className="block w-full px-3 py-3 mt-2 bg-amber-500 text-slate-900 font-semibold rounded-md text-center text-sm hover:bg-amber-600 transition-colors"
            >
              Consulta Legal Inicial
            </button>
          </div>
        </div>
      )}
    </header>
  );
}