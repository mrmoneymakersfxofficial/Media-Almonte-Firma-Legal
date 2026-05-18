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
  const isHome = pathname === "/";

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 50);
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileOpen]);

  function isActive(href: string) {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || !isHome
          ? "bg-white shadow-sm"
          : "bg-transparent"
      }`}
      style={!isHome || isScrolled ? { borderBottom: "3px solid #002350" } : {}}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[70px] lg:h-[80px]">
          {/* Logo - logo-header.webp sin márgenes, altura controlada */}
          <Link href="/" className="flex items-center shrink-0">
            <Image
              src={isScrolled || !isHome ? "/logo-header.webp" : "/logo-header-white.png"}
              alt="Jhon & Asociados - Especialistas Tributarios"
              width={173}
              height={65}
              priority
              className="h-[50px] sm:h-[60px] lg:h-[65px] w-auto object-contain"
              style={{ width: "auto" }}
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`px-4 py-2 text-[15px] font-medium rounded-lg transition-all duration-200 ${
                  isActive(item.href)
                    ? isScrolled || !isHome
                      ? "text-[#008775] bg-[#008775]/5 border-b-2 border-[#008775]"
                      : "text-white/90 bg-white/10 border-b-2 border-white/50"
                    : isScrolled || !isHome
                    ? "text-[#002350] hover:text-[#008775] hover:bg-[#002350]/5"
                    : "text-white/80 hover:text-white hover:bg-white/10"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <button
              onClick={() => openModal()}
              className="ml-4 bg-[#008775] hover:bg-[#006655] text-white px-6 py-2.5 rounded-lg text-[15px] font-bold transition-all duration-200 shadow-sm hover:shadow-md hover:scale-[1.02] active:scale-[0.98]"
            >
              Consultoría Gratuita
            </button>
          </nav>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              isScrolled || !isHome ? "text-[#002350] hover:bg-gray-100" : "text-white hover:bg-white/10"
            }`}
            aria-label="Menú de navegación"
          >
            {isMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {isMobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/40 z-40 lg:hidden"
              onClick={() => setIsMobileOpen(false)}
            />
            {/* Drawer */}
            <motion.div
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 w-[300px] bg-white shadow-2xl z-50 lg:hidden overflow-y-auto"
            >
              <div className="flex items-center justify-between p-4 border-b border-gray-100">
                <Image
                  src="/logo-header.webp"
                  alt="Jhon & Asociados"
                  width={140}
                  height={53}
                  className="h-[45px] w-auto object-contain"
                  style={{ width: "auto" }}
                />
                <button
                  onClick={() => setIsMobileOpen(false)}
                  className="p-2 rounded-lg text-[#002350] hover:bg-gray-100 transition-colors"
                  aria-label="Cerrar menú"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              <nav className="p-4 space-y-1">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMobileOpen(false)}
                    className={`block px-4 py-3 text-[15px] font-medium rounded-lg transition-all duration-200 ${
                      isActive(item.href)
                        ? "text-[#008775] bg-[#008775]/5 border-l-3 border-[#008775]"
                        : "text-[#002350] hover:bg-[#002350]/5 hover:text-[#008775]"
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="pt-4 mt-4 border-t border-gray-100">
                  <button
                    onClick={() => {
                      setIsMobileOpen(false);
                      openModal();
                    }}
                    className="w-full bg-[#008775] hover:bg-[#006655] text-white px-5 py-3.5 rounded-lg text-[15px] font-bold transition-all duration-200 shadow-sm"
                  >
                    Consultoría Gratuita
                  </button>
                </div>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
