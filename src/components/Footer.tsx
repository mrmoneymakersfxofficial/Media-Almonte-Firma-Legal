"use client";

import Link from "next/link";
import { Facebook, Instagram, ArrowUp } from "lucide-react";
import Image from "next/image";
import { ve } from "@/lib/ve";
import type { SiteSettings } from "@/sanity/types";

const defaultQuickLinks = [
  { label: "Inicio", href: "/" },
  { label: "Áreas de Práctica", href: "/areas-de-practica" },
  { label: "La Firma", href: "/firma" },
  { label: "Nuestros Abogados", href: "/abogados" },
  { label: "Recursos Legales", href: "/recursos-legales" },
  { label: "Contacto", href: "/contacto" },
  { label: "Libro de Reclamaciones", href: "/libro-de-reclamaciones" },
];

const practiceAreas = [
  { label: "Derecho Civil", href: "/areas/civil" },
  { label: "Derecho Penal", href: "/areas/penal" },
  { label: "Derecho de Familia", href: "/areas/familia" },
];

const defaultSocialLinks = [
  { icon: Facebook, href: "https://www.facebook.com/share/17zonPNHp7/", label: "Facebook" },
  { icon: Instagram, href: "https://www.instagram.com/solucioneslegales.medinaa", label: "Instagram" },
];

export function Footer({ siteSettings }: { siteSettings?: SiteSettings }) {
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  const email = siteSettings?.email || "firmalegalmedinaalmonte@gmail.com";
  const phone = siteSettings?.phone || "+51 977 186 734";
  const address = siteSettings?.address || "Lima, Perú";
  const description =
    siteSettings?.description ||
    "Defensa legal estratégica en Derecho Civil, Penal y de Familia. MEDINA ALMONTE — Lawyers Firm, Perú.";
  const logoSrc = siteSettings?.logoUrl || "/logo-footer.webp";

  return (
    <footer className="bg-[#060f1a] text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-5" {...ve("siteSettings", "siteSettings", "companyName")}>
              <Image
                src={logoSrc}
                alt={siteSettings?.companyName || "MEDINA ALMONTE — Lawyers Firm"}
                width={1000}
                height={220}
                className="h-9 sm:h-10 w-auto object-contain"
                style={{ width: "auto" }}
              />
            </Link>
            <p className="text-white/60 text-sm leading-relaxed" {...ve("siteSettings", "siteSettings", "description")}>
              {description}
            </p>
            <a
              href={`mailto:${email}`}
              className="text-white/60 hover:text-[#C9A961] text-sm transition-colors inline-block mt-3"
              {...ve("siteSettings", "siteSettings", "email")}
            >
              {email}
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider text-white/80 mb-4">
              Navegación
            </h4>
            <ul className="space-y-2.5">
              {defaultQuickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-[#C9A961] text-sm transition-colors"
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
                    className="text-white/60 hover:text-[#C9A961] text-sm transition-colors"
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
              <p {...ve("siteSettings", "siteSettings", "phone")}>{phone}</p>
              <p {...ve("siteSettings", "siteSettings", "email")}>{email}</p>
              <p {...ve("siteSettings", "siteSettings", "address")}>{address}</p>
            </div>

            <h4 className="font-semibold text-sm uppercase tracking-wider text-white/80 mb-3">
              Síguenos
            </h4>
            <div className="flex gap-3">
              {defaultSocialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/10 hover:bg-[#C9A961]/20 rounded-lg flex items-center justify-center transition-colors"
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
              © {new Date().getFullYear()} {siteSettings?.companyName || "MEDINA ALMONTE — Lawyers Firm"}. Todos los derechos reservados.
            </p>
            <p className="footer-credits">
              Diseñado y desarrollado por <a href="https://www.fastpagepro.com" target="_blank" rel="noopener noreferrer">FastPagePro</a>
            </p>
          </div>
          <button
            onClick={scrollToTop}
            aria-label="Volver arriba"
            className="w-10 h-10 bg-white/5 hover:bg-[#C9A961]/20 rounded-lg flex items-center justify-center transition-colors text-white/60 hover:text-[#C9A961] cursor-pointer"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}