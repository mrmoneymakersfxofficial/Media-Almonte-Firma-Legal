"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Facebook, Instagram, Linkedin, Youtube, ArrowUp } from "lucide-react";
import Image from "next/image";

const quickLinks = [
  { label: "Inicio", href: "/" },
  { label: "Constitución de Empresas", href: "/constitucion-de-empresas" },
  { label: "Contabilidad y Tributación", href: "/contabilidad-tributacion" },
  { label: "Defensa Tributaria", href: "/defensa-tributaria-sunat" },
  { label: "Nosotros", href: "/nosotros-contacto" },
];

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Youtube, href: "#", label: "YouTube" },
];

export function Footer() {
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <footer className="bg-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-5">
              <Image
                src="/logo-header-white.png"
                alt="Jhon & Asociados"
                width={260}
                height={100}
                className="h-[36px] sm:h-[40px] w-auto object-contain"
                style={{ width: "auto" }}
              />
            </Link>
            <p className="text-white/60 text-sm leading-relaxed">
              Protegemos tu patrimonio con asesoría tributaria, contabilidad integral
              y defensa ante SUNAT. Más de 500 empresas confían en nosotros.
            </p>
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
                    className="text-white/60 hover:text-emerald-light text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider text-white/80 mb-4">
              Servicios
            </h4>
            <ul className="space-y-2.5">
              <li>
                <Link href="/constitucion-de-empresas" className="text-white/60 hover:text-emerald-light text-sm transition-colors">
                  Constitución de Empresas
                </Link>
              </li>
              <li>
                <Link href="/contabilidad-tributacion" className="text-white/60 hover:text-emerald-light text-sm transition-colors">
                  Contabilidad Integral
                </Link>
              </li>
              <li>
                <Link href="/defensa-tributaria-sunat" className="text-white/60 hover:text-emerald-light text-sm transition-colors">
                  Defensa Tributaria
                </Link>
              </li>
              <li>
                <Link href="/contabilidad-tributacion" className="text-white/60 hover:text-emerald-light text-sm transition-colors">
                  Planillas y Laboral
                </Link>
              </li>
              <li>
                <Link href="/contabilidad-tributacion" className="text-white/60 hover:text-emerald-light text-sm transition-colors">
                  Asesoría al Inversionista
                </Link>
              </li>
              <li>
                <Link href="/contabilidad-tributacion" className="text-white/60 hover:text-emerald-light text-sm transition-colors">
                  Capacitaciones
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider text-white/80 mb-4">
              Contacto
            </h4>
            <div className="space-y-3 text-sm text-white/60 mb-6">
              <p>+51 943 366 950</p>
              <p>contacto@jhonyasociados.com</p>
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
                    className="w-10 h-10 bg-white/10 hover:bg-emerald/30 rounded-lg flex items-center justify-center transition-colors"
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm">
            © 2026 Jhon & Asociados. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-white/40 hover:text-white/60 text-sm transition-colors">
              Política de Privacidad
            </a>
            <button
              onClick={scrollToTop}
              className="w-10 h-10 bg-white/10 hover:bg-emerald/30 rounded-lg flex items-center justify-center transition-colors"
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
