"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { useWhatsAppStore } from "@/lib/whatsapp";

const navLinks = [
  { name: "Inicio", href: "/" },
  { name: "Áreas de Práctica", href: "/areas-de-practica" },
  { name: "La Firma", href: "/firma" },
  { name: "Abogados", href: "/abogados" },
  { name: "Resultados", href: "/resultados" },
  { name: "Contacto", href: "/contacto" },
];

/* ─── Gold Ripple on Click ─── */
function GoldRipple({ x, y, onDone }: { x: number; y: number; onDone: () => void }) {
  const size = 120;
  return (
    <motion.span
      className="absolute pointer-events-none rounded-full z-0"
      initial={{ width: 0, height: 0, x: x - size / 2, y: y - size / 2, opacity: 0.7 }}
      animate={{ width: size, height: size, opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      onAnimationComplete={onDone}
      style={{
        background: "radial-gradient(circle, rgba(212,175,55,0.5) 0%, rgba(212,175,55,0) 70%)",
      }}
    />
  );
}

/* ─── Single Nav Link with gold click effect ─── */
function NavLink({
  link,
  index,
  active,
  scrolled,
}: {
  link: (typeof navLinks)[0];
  index: number;
  active: boolean;
  scrolled: boolean;
}) {
  const [ripples, setRipples] = useState<{ id: number; x: number; y: number }[]>([]);
  const [clicked, setClicked] = useState(false);
  const rippleId = useRef(0);
  const ref = useRef<HTMLAnchorElement>(null);

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const id = ++rippleId.current;
      setRipples((prev) => [...prev, { id, x, y }]);
      setClicked(true);
      setTimeout(() => {
        setRipples((prev) => prev.filter((r) => r.id !== id));
        setClicked(false);
      }, 700);
    },
    []
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 + index * 0.06, duration: 0.4, ease: "easeOut" }}
      className="relative"
    >
      <Link
        ref={ref}
        href={link.href}
        onClick={handleClick}
        className={`
          relative px-3 xl:px-4 py-1.5 text-[13px] tracking-wide font-medium
          rounded-md transition-all duration-300 overflow-hidden select-none
          ${
            active
              ? "text-amber-400"
              : scrolled
              ? "text-white/75 hover:text-white"
              : "text-white/85 hover:text-white"
          }
        `}
      >
        {/* Active persistent gold bar */}
        {active && (
          <motion.span
            layoutId="nav-gold-bar"
            className="absolute bottom-0 left-2 right-2 h-[2px] rounded-full"
            style={{
              background: "linear-gradient(90deg, transparent, #D4AF37, #f4e5c2, #D4AF37, transparent)",
              boxShadow: "0 0 8px rgba(212,175,55,0.6), 0 0 20px rgba(212,175,55,0.2)",
            }}
            transition={{ type: "spring", stiffness: 350, damping: 30 }}
          />
        )}

        {/* Click ripple */}
        {ripples.map((r) => (
          <GoldRipple key={r.id} x={r.x} y={r.y} onDone={() => {}} />
        ))}

        {/* Click flash bar */}
        {clicked && (
          <motion.span
            className="absolute bottom-0 left-0 right-0 h-[2px]"
            initial={{ scaleX: 0, opacity: 1 }}
            animate={{ scaleX: 1, opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            style={{
              background: "linear-gradient(90deg, #B87333, #D4AF37, #f4e5c2, #D4AF37, #B87333)",
              boxShadow: "0 2px 12px rgba(212,175,55,0.8), 0 0 30px rgba(212,175,55,0.3)",
              transformOrigin: "center",
            }}
          />
        )}

        <span className="relative z-10">{link.name}</span>
      </Link>
    </motion.div>
  );
}

/* ─── Main Header ─── */
export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const pathname = usePathname();
  const { openModal } = useWhatsAppStore();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isMobileOpen]);

  function isActive(href: string) {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-[#0a0e1a]/92 backdrop-blur-2xl shadow-[0_1px_0_rgba(212,175,55,0.08),0_8px_32px_rgba(0,0,0,0.4)]"
            : "bg-gradient-to-b from-black/50 to-transparent"
        }`}
      >
        {/* Subtle top gold line on scroll */}
        <div
          className="w-full h-[1px] transition-opacity duration-500"
          style={{
            opacity: isScrolled ? 1 : 0,
            background: "linear-gradient(90deg, transparent 5%, rgba(212,175,55,0.3) 30%, rgba(244,229,194,0.5) 50%, rgba(212,175,55,0.3) 70%, transparent 95%)",
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 lg:h-[58px]">

            {/* ── Logo ── */}
            <motion.div
              initial={{ opacity: 0, x: -15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <Link href="/" className="flex items-center gap-2.5 group">
                <motion.div
                  className="w-9 h-9 shrink-0"
                  whileHover={{ scale: 1.08, rotate: 3 }}
                  transition={{ type: "spring", stiffness: 400, damping: 20 }}
                >
                  <div
                    className="w-full h-full rounded-lg flex items-center justify-center"
                    style={{
                      background: "linear-gradient(135deg, #D4AF37 0%, #B87333 50%, #D4AF37 100%)",
                      boxShadow: "0 2px 8px rgba(212,175,55,0.3), inset 0 1px 0 rgba(255,255,255,0.2)",
                    }}
                  >
                    <span className="text-[#0a0e1a] font-bold text-base leading-none" style={{ fontFamily: "'Playfair Display', serif" }}>
                      M
                    </span>
                  </div>
                </motion.div>
                <div className="hidden sm:block leading-none">
                  <p className="text-white font-bold text-[15px] tracking-wide" style={{ fontFamily: "'Playfair Display', serif" }}>
                    MEDINA ALMONTE
                  </p>
                  <p className="text-amber-400/80 text-[9px] tracking-[0.25em] uppercase mt-0.5">
                    Firma Legal
                  </p>
                </div>
              </Link>
            </motion.div>

            {/* ── Desktop Nav ── */}
            <nav className="hidden lg:flex items-center gap-0.5">
              {navLinks.map((link, i) => (
                <NavLink
                  key={link.href}
                  link={link}
                  index={i}
                  active={isActive(link.href)}
                  scrolled={isScrolled}
                />
              ))}
            </nav>

            {/* ── CTA ── */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.4 }}
              className="hidden lg:flex items-center gap-3"
            >
              <button
                onClick={() => openModal()}
                className="group relative px-5 py-2 rounded-lg text-[13px] font-semibold
                         transition-all duration-300 overflow-hidden
                         hover:shadow-[0_0_20px_rgba(212,175,55,0.25)]"
                style={{
                  background: "linear-gradient(135deg, #D4AF37 0%, #c9a961 50%, #B87333 100%)",
                  color: "#0a0e1a",
                  boxShadow: "0 1px 4px rgba(212,175,55,0.2), inset 0 1px 0 rgba(255,255,255,0.15)",
                }}
              >
                {/* Hover shine */}
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 skew-x-12" />
                <span className="relative z-10 flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5" />
                  Consulta Legal
                </span>
              </button>
            </motion.div>

            {/* ── Mobile Toggle ── */}
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className={`lg:hidden w-9 h-9 flex items-center justify-center rounded-lg transition-all duration-200 ${
                isScrolled
                  ? "text-amber-400/80 hover:text-amber-400 hover:bg-amber-400/10"
                  : "text-white/80 hover:text-white hover:bg-white/10"
              }`}
              aria-label="Menú"
            >
              {isMobileOpen ? <X size={20} strokeWidth={2} /> : <Menu size={20} strokeWidth={2} />}
            </button>
          </div>
        </div>
      </header>

      {/* ── Mobile Drawer (right-side) ── */}
      <AnimatePresence>
        {isMobileOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
              onClick={() => setIsMobileOpen(false)}
              style={{ WebkitTapHighlightColor: 'transparent' }}
            />
            {/* Drawer panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-[75%] max-w-[380px] z-50 lg:hidden overflow-y-auto overflow-x-hidden"
              style={{
                background: 'linear-gradient(180deg, #0a0e1a 0%, #060a14 100%)',
                borderLeft: '1px solid rgba(212,175,55,0.15)',
                boxShadow: '-8px 0 40px rgba(0,0,0,0.5)',
                WebkitOverflowScrolling: 'touch',
              }}
            >
              {/* Drawer header */}
              <div className="flex items-center justify-between h-14 px-5 border-b border-white/[0.06]">
                <Link href="/" onClick={() => setIsMobileOpen(false)} className="flex items-center gap-2">
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center"
                    style={{ background: "linear-gradient(135deg, #D4AF37, #B87333)" }}
                  >
                    <span className="text-[#0a0e1a] font-bold text-sm" style={{ fontFamily: "'Playfair Display', serif" }}>M</span>
                  </div>
                  <div>
                    <p className="text-white font-bold text-sm" style={{ fontFamily: "'Playfair Display', serif" }}>MEDINA ALMONTE</p>
                    <p className="text-amber-400/70 text-[8px] tracking-[0.2em] uppercase">Firma Legal</p>
                  </div>
                </Link>
                <button
                  onClick={() => setIsMobileOpen(false)}
                  className="w-9 h-9 flex items-center justify-center rounded-lg text-amber-400/70 hover:text-amber-400 hover:bg-amber-400/10 transition-colors"
                  aria-label="Cerrar menú"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Drawer links */}
              <nav className="px-4 py-4">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.08 + index * 0.05, duration: 0.3 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsMobileOpen(false)}
                      className={`relative flex items-center px-4 py-3.5 rounded-lg text-[15px] font-medium transition-all duration-200 ${
                        isActive(link.href)
                          ? "text-amber-400 bg-amber-400/[0.08]"
                          : "text-white/60 hover:text-amber-400/90 hover:bg-white/[0.04]"
                      }`}
                    >
                      {isActive(link.href) && (
                        <span
                          className="absolute left-0 top-2 bottom-2 w-[3px] rounded-full"
                          style={{
                            background: "linear-gradient(180deg, #D4AF37, #B87333)",
                            boxShadow: "0 0 8px rgba(212,175,55,0.5)",
                          }}
                        />
                      )}
                      <span className="pl-2">{link.name}</span>
                    </Link>
                  </motion.div>
                ))}
              </nav>

              {/* Drawer CTA */}
              <div className="px-5 pb-6 pt-2">
                <button
                  onClick={() => { setIsMobileOpen(false); openModal(); }}
                  className="w-full py-3.5 rounded-lg text-[14px] font-bold transition-all duration-200"
                  style={{
                    background: "linear-gradient(135deg, #D4AF37 0%, #B87333 100%)",
                    color: "#0a0e1a",
                    boxShadow: "0 4px 16px rgba(212,175,55,0.25)",
                  }}
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