"use client";

import Image from "next/image";
import { MessageCircle } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";

const team = [
  {
    name: "Dr. Eduardo Medina Almonte",
    specialty: "Socio Fundador — Derecho Civil, Penal y de Familia",
    bio: "Abogado con más de 10 años de experiencia en el Rubro Legal, en su condición de ex servidor público del Poder Judicial y Ministerio Público. Cuenta con estudios de postgrado y capacitaciones nacionales y extranjeras. Socio Fundador de la firma con una visión estratégica y práctica del Derecho.",
    photo: "/images/abogados/abogado-principal.webp",
  },
  {
    name: "Equipo Medina Almonte",
    specialty: "Equipo Legal Multidisciplinario",
    bio: "Equipo de abogados asociados especializados en las áreas Civil, Penal y de Familia, con formación continua y compromiso con la ética profesional. Trabajamos de forma colaborativa bajo la dirección del Dr. Eduardo Medina Almonte para garantizar representación legal excepcional y personalizada en cada caso.",
    photo: "/images/abogados/equipo-1.webp",
  },
];

function generateWhatsAppURL(name: string): string {
  const message = `Hola *MEDINA ALMONTE — Lawyers Firm*. Me gustaría consultar sobre los servicios de ${name}.`;
  const encodedMessage = encodeURIComponent(message);
  return `https://api.whatsapp.com/send?phone=51977186734&text=${encodedMessage}`;
}

export function TeamCards() {
  return (
    <div className="space-y-12 md:space-y-16">
      {team.map((member, i) => (
        <ScrollReveal key={member.name} delay={i * 0.08}>
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-10 text-center md:text-left">
            {/* Photo — circular, WebP optimized */}
            <div className="team-avatar-ring w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden bg-[#0F0F0F] flex items-center justify-center shrink-0 relative">
              <Image
                src={member.photo}
                alt={member.name}
                fill
                sizes="(max-width: 768px) 128px, 160px"
                className="object-cover rounded-full"
              />
            </div>
            {/* Info — direct on background */}
            <div className="flex-1 min-w-0">
              <h3
                className="text-white font-bold text-lg sm:text-xl mb-1"
                style={{ fontFamily: "var(--font-playfair), serif" }}
              >
                {member.name}
              </h3>
              <p className="text-[#8B6F47] text-sm font-medium mb-3">
                {member.specialty}
              </p>
              <p className="text-gray-400 text-sm leading-relaxed mb-5 max-w-xl">
                {member.bio}
              </p>
              <a
                href={generateWhatsAppURL(member.name)}
                target="_blank"
                rel="noopener noreferrer"
                className="team-cta-gold inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold gpu-accelerated"
              >
                <MessageCircle className="w-4 h-4" />
                Consultar
              </a>
            </div>
          </div>
          {i < team.length - 1 && <hr className="subtle-divider mt-12 md:mt-16" />}
        </ScrollReveal>
      ))}

      {/* Galería de fotos del equipo */}
      <ScrollReveal delay={0.2}>
        <div className="mt-8">
          <p className="text-center text-[#8B6F47] text-sm font-medium tracking-wider uppercase mb-6">
            Galería del Estudio
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { src: "/images/abogados/equipo-1.webp", alt: "Equipo Medina Almonte 1" },
              { src: "/images/abogados/equipo-2.webp", alt: "Equipo Medina Almonte 2" },
              { src: "/images/abogados/equipo-3.webp", alt: "Equipo Medina Almonte 3" },
              { src: "/images/abogados/equipo-4.webp", alt: "Equipo Medina Almonte 4" },
            ].map((img, idx) => (
              <div
                key={idx}
                className="relative aspect-square rounded-2xl overflow-hidden glass-card"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </div>
  );
}
