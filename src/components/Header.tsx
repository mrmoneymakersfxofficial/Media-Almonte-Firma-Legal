"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";
import { useWhatsAppStore } from "@/lib/whatsapp";
import Image from "next/image";

const navItems = [
  { label: "Inicio", href: "/" },
  { label: "Constitución", href: "/constitucion-de-empresas" },
  { label: "Contabilidad", href: "/contabilidad-tributacion" },
  { label: "Defensa Tributaria", href: "/defensa-tributaria-sunat" },
  { label: "Nosotros", href: "/nosotros-contacto" },
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
            background: 'linear-gradient(90deg, #002350 0%, #481180 50%, #008775 100%)',
            willChange: 'opacity',
            transform: 'translateZ(0)',
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="navbar-brand-fixed">

            {/* ── Logo: premium — nombre completo + isotype 3 barras ── */}
            <Link href="/" className="flex items-center shrink-0 relative z-10">
              <Image
                src={scrolled ? "/logo-header-noslogan.webp" : "/logo-header-white-noslogan.png"}
                alt="Jhon & Asociados"
                width={925}
                height={381}
                priority
                className="brand-logo-fixed transition-opacity duration-300"
              />
            </Link>

            {/* ── Desktop Nav ── */}
            <nav className="hidden lg:flex items-center gap-0.5">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative px-3 py-2 text-[13px] font-medium transition-colors duration-200 rounded-md ${
                    scrolled
                      ? isActive(item.href)
                        ? "text-[#008775]"
                        : "text-[#002350]/80 hover:text-[#008775]"
                      : isActive(item.href)
                        ? "text-white"
                        : "text-white/80 hover:text-[#00a996]"
                  }`}
                >
                  {item.label}
                  {isActive(item.href) && (
                    <span
                      className={`absolute bottom-0 left-3 right-3 h-[2px] rounded-full transition-colors duration-300 ${
                        scrolled ? "bg-[#00a996]" : "bg-white"
                      }`}
                    />
                  )}
                </Link>
              ))}
              <button
                onClick={() => openModal()}
                className={`ml-2 px-5 py-2 rounded-lg text-[13px] font-bold transition-all duration-200 ${
                  scrolled
                    ? "bg-[#008775] hover:bg-[#006655] text-white shadow-sm hover:shadow-md"
                    : "bg-white/15 hover:bg-white/25 backdrop-blur-sm text-white border border-white/25"
                }`}
              >
                Consultoría Gratuita
              </button>
            </nav>

            {/* ── Mobile Hamburger ── */}
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className={`lg:hidden relative z-10 flex items-center justify-center w-10 h-10 rounded-lg transition-all duration-200 ${
                scrolled
                  ? "text-[#002350] hover:bg-[#002350]/5 active:bg-[#002350]/10"
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
              className="fixed top-0 right-0 bottom-0 w-[280px] max-w-[80vw] bg-white z-50 lg:hidden flex flex-col shadow-2xl"
            >
              {/* Drawer Header */}
              <div className="navbar-brand-fixed px-4 border-b border-gray-100 shrink-0">
                <Image
                  src="/logo-header-noslogan.webp"
                  alt="Jhon & Asociados"
                  width={925}
                  height={381}
                  className="brand-logo-fixed"
                />
                <button
                  onClick={() => setIsMobileOpen(false)}
                  className="w-9 h-9 flex items-center justify-center rounded-lg text-[#002350] hover:bg-gray-100 transition-colors"
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
                    className={`flex items-center px-4 py-3 rounded-lg text-[15px] font-semibold transition-colors drawer-nav-link ${
                      isActive(item.href)
                        ? "drawer-nav-active"
                        : "text-[#002350]/70 hover:bg-[#002350]/[0.04] hover:text-[#002350]"
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>

              {/* Drawer Footer */}
              <div className="px-4 pb-4 pt-2 border-t border-gray-100 shrink-0 space-y-2">
                <button
                  onClick={() => { setIsMobileOpen(false); openModal(); }}
                  className="w-full bg-[#008775] hover:bg-[#006655] text-white py-3 rounded-lg text-[15px] font-bold transition-colors"
                >
                  Consultoría Gratuita
                </button>
                <a
                  href="tel:+51943366950"
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-lg text-[14px] font-medium text-[#002350]/70 hover:bg-gray-50 transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  +51 943 366 950
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
