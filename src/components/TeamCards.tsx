"use client";

import { MessageCircle, Crown } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";

const team = [
  {
    name: "Dr. Eduardo Medina Almonte",
    specialty: "Socio Fundador & CEO",
    bio: "Abogado con más de 10 años de experiencia en litigios penales, civiles y de familia. Fundador de Medina Almonte — Lawyers Firm con una visión estratégica del derecho y un compromiso inquebrantable con la justicia. Bajo su liderazgo, la firma ha logrado resultados favorables en más del 92% de los casos atendidos, consolidándose como referente en el ejercicio jurídico peruano.",
    initials: "EM",
    isCEO: true,
  },
  {
    name: "Dra. Sofía Castillo",
    specialty: "Derecho Civil y Familia",
    bio: "Especialista en derecho de familia y sucesiones. Reconocida por su enfoque empático y resultados favorables en casos complejos de divorcio, custodia y pensiones alimenticias.",
    initials: "SC",
    isCEO: false,
  },
  {
    name: "Dr. Andrés Mendoza",
    specialty: "Derecho Penal",
    bio: "Defensor penal con trayectoria en casos de alta complejidad. Experto en investigaciones preliminares, garantías constitucionales y litigación oral.",
    initials: "AM",
    isCEO: false,
  },
];

function generateWhatsAppURL(name: string): string {
  const message = `Hola *Medina Almonte — Lawyers Firm*. Me gustaría consultar sobre los servicios del Dr./Dra. ${name}.`;
  const encodedMessage = encodeURIComponent(message);
  return `https://api.whatsapp.com/send?phone=51977186734&text=${encodedMessage}`;
}

export function TeamCards() {
  return (
    <div className="space-y-12 md:space-y-16">
      {team.map((member, i) => (
        <ScrollReveal key={member.name} delay={i * 0.08}>
          <div className={`flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-10 text-center md:text-left ${member.isCEO ? 'relative' : ''}`}>
            {/* CEO badge */}
            {member.isCEO && (
              <div className="absolute -top-3 left-1/2 md:left-0 md:-translate-x-0 -translate-x-1/2 z-10">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest"
                  style={{
                    background: "linear-gradient(135deg, #D4AF37, #B87333)",
                    color: "#0A0A0A",
                  }}
                >
                  <Crown className="w-3 h-3" />
                  Socio Fundador
                </div>
              </div>
            )}

            {/* Avatar — circular */}
            <div className="team-avatar-ring w-20 h-20 md:w-24 md:h-24 rounded-full bg-[#0A0A0A] flex items-center justify-center shrink-0">
              <span
                className="text-[#D4AF37] text-xl font-bold"
                style={{ fontFamily: "var(--font-playfair), serif" }}
              >
                {member.initials}
              </span>
            </div>
            {/* Info */}
            <div className="flex-1 min-w-0">
              <h3
                className="text-white font-bold text-lg sm:text-xl mb-1"
                style={{ fontFamily: "var(--font-playfair), serif" }}
              >
                {member.name}
              </h3>
              <p className="text-[#B87333] text-sm font-medium mb-3">
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
    </div>
  );
}