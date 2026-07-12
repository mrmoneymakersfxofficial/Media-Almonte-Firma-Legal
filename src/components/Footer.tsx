"use client";

import Link from "next/link";
import { Facebook, Instagram, ArrowUp } from "lucide-react";
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
  { label: "Derecho Civil", href: "/areas/civil" },
  { label: "Derecho Penal", href: "/areas/penal" },
  { label: "Derecho Laboral", href: "/areas/laboral" },
  { label: "Derecho Corporativo", href: "/areas/corporativo" },
  { label: "Derecho de Familia", href: "/areas/familia" },
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
                src="https://i.imgur.com/yWjhWfH.webp"
                alt="Medina Almonte Firma Legal"
                width={320}
                height={80}
                className="h-[36px] sm:h-[40px] w-auto object-contain"
                style={{ width: "auto" }}
              />
            </Link>
            <p className="text-white/60 text-sm leading-relaxed">
              Defensa legal estratégica en Derecho Civil, Penal, Laboral, Corporativo y Familiar. Confianza, autoridad y resultados comprobados en Perú.
            </p>
            <a
              href="mailto:contacto@medinaalmonte.com"
              className="text-white/60 hover:text-[#D4AF37] text-sm transition-colors inline-block mt-3"
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

          {/* Áreas de Práctica */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider text-white/80 mb-4">
              Áreas de Práctica
            </h4>
            <ul className="space-y-2.5">
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
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider text-white/80 mb-4">
              Contacto
            </h4>
            <div className="space-y-3 text-sm text-white/60 mb-6">
              <p>+51 943 366 950</p>
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
              © 2026 Medina Almonte Firma Legal. Todos los derechos reservados.
            </p>
            <p className="footer-credits">
              Diseñado y desarrollado por <a href="https://www.fastpagepro.com" target="_blank" rel="noopener noreferrer">FastPagePro</a>
            </p>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/politica-privacidad" className="text-white/40 hover:text-white/60 text-sm transition-colors">
              Política de Privacidad
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