"use client";

import Link from "next/link";
import { Facebook, Instagram, ArrowUp, FileText } from "lucide-react";
import Image from "next/image";

const quickLinks = [
  { label: "Inicio", href: "/" },
  { label: "Áreas de Práctica", href: "/areas-de-practica" },
  { label: "La Firma", href: "/firma" },
  { label: "Nuestros Abogados", href: "/abogados" },
  { label: "Recursos Legales", href: "/recursos-legales" },
  { label: "Contacto", href: "/contacto" },
];

const practiceAreas = [
  { label: "Derecho Penal", href: "/areas/penal" },
  { label: "Derecho de Familia", href: "/areas/familia" },
  { label: "Derecho Civil", href: "/areas/civil" },
];

const legalLinks = [
  { label: "Libro de Reclamaciones", href: "/libro-de-reclamaciones" },
  { label: "Política de Privacidad", href: "/politica-privacidad" },
];

const socialLinks = [
  { icon: Facebook, href: "https://www.facebook.com/share/17zonPNHp7/", label: "Facebook" },
  { icon: Instagram, href: "https://www.instagram.com/solucioneslegales.medinaa", label: "Instagram" },
];

export function Footer() {
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <footer className="bg-[#060f1a] text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-5">
              <Image
                src="/logo-footer.webp"
                alt="Medina Almonte Lawyers Firm"
                width={1000}
                height={220}
                className="h-9 sm:h-10 w-auto object-contain"
                style={{ width: "auto" }}
              />
            </Link>
            <p className="text-white/60 text-sm leading-relaxed">
              Defensa legal estratégica en Derecho Penal, Familia y Civil. Confianza, autoridad y resultados comprobados en Perú.
            </p>
            <p className="text-white/40 text-xs mt-3 tracking-wider uppercase font-medium">
              MEDINA ALMONTE — LAWYERS FIRM
            </p>
            <a
              href="mailto:contacto@medinaalmonte.com"
              className="text-white/60 hover:text-[#D4AF37] text-sm transition-colors inline-block mt-2"
            >
              contacto@medinaalmonte.com
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider text-white/80 mb-4">
              Navegación
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-[#D4AF37] text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Áreas de Práctica + Legal */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider text-white/80 mb-4">
              Áreas de Práctica
            </h4>
            <ul className="space-y-2.5 mb-6">
              {practiceAreas.map((area) => (
                <li key={area.href}>
                  <Link
                    href={area.href}
                    className="text-white/60 hover:text-[#D4AF37] text-sm transition-colors"
                  >
                    {area.label}
                  </Link>
                </li>
              ))}
            </ul>

            <h4 className="font-semibold text-sm uppercase tracking-wider text-white/80 mb-3">
              Legal
            </h4>
            <ul className="space-y-2.5">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-[#D4AF37] text-sm transition-colors flex items-center gap-1.5"
                  >
                    <FileText className="w-3 h-3" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider text-white/80 mb-4">
              Contacto
            </h4>
            <div className="space-y-3 text-sm text-white/60 mb-6">
              <p>+51 977 186 734</p>
              <p>contacto@medinaalmonte.com</p>
              <p>Lima, Perú</p>
            </div>

            <h4 className="font-semibold text-sm uppercase tracking-wider text-white/80 mb-3">
              Síguenos
            </h4>
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 bg-white/10 hover:bg-[#D4AF37]/20 rounded-lg flex items-center justify-center transition-colors"
                  >
                    <Icon className="w-4 h-4 text-white/70" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-col items-center gap-2">
            <p className="text-white/40 text-sm">
              © 2026 Medina Almonte — Lawyers Firm. Todos los derechos reservados.
            </p>
            <p className="footer-credits">
              Diseñado y desarrollado por <a href="https://www.fastpagepro.com" target="_blank" rel="noopener noreferrer">FastPagePro</a>
            </p>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/politica-privacidad" className="text-white/40 hover:text-white/60 text-sm transition-colors">
              Política de Privacidad
            </Link>
            <Link href="/libro-de-reclamaciones" className="text-white/40 hover:text-white/60 text-sm transition-colors flex items-center gap-1">
              <FileText className="w-3 h-3" />
              Libro de Reclamaciones
            </Link>
            <button
              onClick={scrollToTop}
              className="w-10 h-10 bg-white/10 hover:bg-[#D4AF37]/20 rounded-lg flex items-center justify-center transition-colors"
              aria-label="Ir arriba"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}