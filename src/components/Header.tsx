"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useWhatsAppStore } from "@/lib/whatsapp";
import Image from "next/image";

const navItems = [
  { label: "Inicio", href: "/" },
  { label: "Áreas de Práctica", href: "/areas-de-practica" },
  { label: "La Firma", href: "/firma" },
  { label: "Nuestros Abogados", href: "/abogados" },
  { label: "Resultados", href: "/resultados" },
  { label: "Contacto", href: "/contacto" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const pathname = usePathname();
  const { openModal } = useWhatsAppStore();

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 50);
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = "hidden";
      document.documentElement.classList.add("mobile-menu-open");
    } else {
      document.body.style.overflow = "";
      document.documentElement.classList.remove("mobile-menu-open");
    }
    return () => {
      document.body.style.overflow = "";
      document.documentElement.classList.remove("mobile-menu-open");
    };
  }, [isMobileOpen]);

  function isActive(href: string) {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  }

  const scrolled = isScrolled;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 overflow-visible transition-all duration-300 ease-in-out ${
          scrolled
            ? "header-scrolled"
            : "header-hero"
        }`}
      >
        {/* Brand gradient line — smooth 4px with GPU compositing */}
        <div
          className={`w-full h-[4px] transition-opacity duration-300 ${
            scrolled ? "opacity-100" : "opacity-0"
          }`}
          style={{
            background: 'linear-gradient(90deg, #0f172a 0%, #B87333 30%, #D4AF37 50%, #f4e5c2 70%, #0f172a 100%)',
            willChange: 'opacity',
            transform: 'translateZ(0)',
          }}
        />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="navbar-brand-fixed">

            {/* ── Logo ── */}
            <Link href="/" className="flex items-center shrink-0 relative z-10">
              <Image
                src="https://i.imgur.com/Uf6PTZV.png"
                alt="Medina Almonte Firma Legal"
                width={1181}
                height={285}
                priority
                className="brand-logo-fixed transition-opacity duration-300"
              />
            </Link>

            {/* ── Desktop Nav — Ultra Premium Gold Links ── */}
            <nav className="hidden lg:flex items-center gap-0.5">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`nav-link-premium ${
                    scrolled ? "nav-link-gold" : "nav-link-white"
                  } ${isActive(item.href) ? "nav-link-active" : ""}`}
                >
                  {item.label}
                </Link>
              ))}
              <button
                onClick={() => openModal()}
                className={`ml-3 px-5 py-2.5 rounded-lg text-[14px] tracking-wide transition-all duration-300 ${
                  scrolled
                    ? "nav-cta-gold"
                    : "bg-white/15 hover:bg-white/25 backdrop-blur-sm text-white border border-white/25 hover:border-[#D4AF37]/40"
                }`}
              >
                Consulta Legal Inicial
              </button>
            </nav>

            {/* ── Mobile Hamburger — Gold when scrolled ── */}
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className={`lg:hidden relative z-10 flex items-center justify-center w-10 h-10 rounded-lg transition-all duration-200 ${
                scrolled
                  ? "hamburger-gold"
                  : "text-white hover:bg-white/10 active:bg-white/20"
              }`}
              aria-label="Menú de navegación"
            >
              {isMobileOpen ? (
                <X className="w-5 h-5" strokeWidth={2} />
              ) : (
                <Menu className="w-5 h-5" strokeWidth={2} />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* ── Mobile Drawer ── */}
      <AnimatePresence>
        {isMobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 lg:hidden"
              onClick={() => setIsMobileOpen(false)}
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 w-[280px] max-w-[80vw] z-50 lg:hidden flex flex-col shadow-2xl"
              style={{
                background: 'linear-gradient(180deg, #0f172a 0%, #0A0A0A 100%)',
              }}
            >
              {/* Drawer Header */}
              <div className="navbar-brand-fixed px-4 border-b border-[#D4AF37]/10 shrink-0">
                <Image
                  src="https://i.imgur.com/Uf6PTZV.png"
                  alt="Medina Almonte Firma Legal"
                  width={1181}
                  height={285}
                  className="brand-logo-fixed"
                />
                <button
                  onClick={() => setIsMobileOpen(false)}
                  className="w-9 h-9 flex items-center justify-center rounded-lg text-[#D4AF37]/80 hover:text-[#D4AF37] hover:bg-[#D4AF37]/10 transition-colors"
                  aria-label="Cerrar menú"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Drawer Nav */}
              <nav className="flex-1 overflow-y-auto px-3 py-3">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMobileOpen(false)}
                    className={`flex items-center px-4 py-3 rounded-lg text-[15px] font-semibold transition-all duration-300 drawer-nav-link ${
                      isActive(item.href)
                        ? "drawer-nav-active"
                        : "text-white/50 hover:bg-[#D4AF37]/5 hover:text-[#D4AF37]"
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>

              {/* Drawer Footer */}
              <div className="px-4 pb-4 pt-2 border-t border-[#D4AF37]/10 shrink-0 space-y-2">
                <button
                  onClick={() => { setIsMobileOpen(false); openModal(); }}
                  className="w-full bg-[#D4AF37] hover:bg-[#B87333] text-[#0A0A0A] py-3 rounded-lg text-[15px] font-bold transition-colors"
                >
                  Consulta Legal Inicial
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}