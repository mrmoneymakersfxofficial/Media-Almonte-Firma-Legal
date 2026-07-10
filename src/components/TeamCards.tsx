"use client";

import { MessageCircle } from "lucide-react";

const team = [
  {
    name: "Dr. Ricardo Medina Almonte",
    specialty: "Director General",
    bio: "Abogado con más de 15 años de experiencia en litigios corporativos, civiles y penales. Fundador de la firma con una visión estratégica del derecho.",
    initials: "RM",
  },
  {
    name: "Dra. Sofía Castillo",
    specialty: "Derecho Civil y Familia",
    bio: "Especialista en derecho de familia y sucesiones. Reconocida por su enfoque empático y resultados favorables en casos complejos.",
    initials: "SC",
  },
  {
    name: "Dr. Andrés Mendoza",
    specialty: "Derecho Penal",
    bio: "Defensor penal con trayectoria en casos de alta complejidad. Experto en investigaciones y garantías constitucionales.",
    initials: "AM",
  },
  {
    name: "Dra. Valentina Rojas",
    specialty: "Derecho Laboral y Corporativo",
    bio: "Abogada laboral y corporativa con amplia experiencia en compliance, contratos y negociaciones colectivas.",
    initials: "VR",
  },
];

function generateWhatsAppURL(name: string): string {
  const message = `Hola *Medina Almonte Firma Legal*. Me gustaría consultar sobre los servicios del Dr./Dra. ${name}.`;
  const encodedMessage = encodeURIComponent(message);
  return `https://api.whatsapp.com/send?phone=51943366950&text=${encodedMessage}`;
}

export function TeamCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
      {team.map((member, i) => (
        <div
          key={member.name}
          className="bg-[#0B1A2E] border border-[#D4AF37]/10 rounded-2xl p-6 sm:p-7 flex flex-col items-center text-center hover:border-[#D4AF37]/25 transition-colors"
          style={{
            animationDelay: `${0.15 * i}s`,
          }}
        >
          {/* Avatar */}
          <div className="w-24 h-24 rounded-full bg-[#0A0A0A] border-2 border-[#D4AF37]/20 flex items-center justify-center mb-5">
            <span
              className="text-[#D4AF37] text-xl font-bold"
              style={{ fontFamily: "var(--font-playfair), serif" }}
            >
              {member.initials}
            </span>
          </div>

          {/* Info */}
          <h3
            className="text-white font-bold text-base sm:text-lg mb-1"
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            {member.name}
          </h3>
          <p className="text-[#B87333] text-sm font-medium mb-4">
            {member.specialty}
          </p>
          <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
            {member.bio}
          </p>

          {/* WhatsApp CTA */}
          <a
            href={generateWhatsAppURL(member.name)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#D4AF37] hover:bg-[#B87333] text-[#0A0A0A] px-5 py-2.5 rounded-xl text-sm font-bold transition-all shadow-lg shadow-[#D4AF37]/25 hover:shadow-xl active:scale-[0.98] w-full justify-center"
          >
            <MessageCircle className="w-4 h-4" />
            Consultar
          </a>
        </div>
      ))}
    </div>
  );
}