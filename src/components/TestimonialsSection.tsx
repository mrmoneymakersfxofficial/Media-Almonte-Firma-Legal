"use client";

import { useCallback, useEffect, useState } from "react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { ve } from "@/lib/ve";
import type { Testimonial } from "@/sanity/types";

const DEFAULT_TESTIMONIALS: Testimonial[] = [
  {
    _id: "testimonial-1",
    quote:
      "Los abogados de la firma legal Medina Almonte me ayudaron a redactar los contratos para todos los inquilinos de mi multifamiliar, para estar seguros de precarios...",
    clientName: "Cliente satisfecho",
    caseType: "Derecho Civil",
    rating: 5,
  },
  {
    _id: "testimonial-2",
    quote:
      "El Dr. Medina y su equipo me ayudaron a reunirme otra vez con mi hijo y darle una segunda oportunidad a mi familia con su libertad...",
    clientName: "Cliente satisfecho",
    caseType: "Derecho Penal",
    rating: 5,
  },
  {
    _id: "testimonial-3",
    quote:
      "El equipo de trabajo de este grupo de trabajo me habló con sinceridad, diciéndome lo malo y lo bueno, y con ellos y Dios mediante, mi esposo pudo recuperar su libertad y estar otra vez juntos con mis hijas...",
    clientName: "Cliente satisfecho",
    caseType: "Derecho Penal",
    rating: 5,
  },
  {
    _id: "testimonial-4",
    quote:
      "El Dr. Eduardo me asesoró correctamente en todo momento y junto a su equipo pude conseguir una Sentencia de Alimentos justa para mis hijos y el reconocimiento de su apellido.",
    clientName: "Cliente satisfecho",
    caseType: "Derecho de Familia",
    rating: 5,
  },
];

export function TestimonialsSection({
  testimonials,
}: {
  testimonials?: Testimonial[];
}) {
  const items = testimonials && testimonials.length > 0 ? testimonials : DEFAULT_TESTIMONIALS;
  const [api, setApi] = useState<CarouselApi | null>(null);
  const [current, setCurrent] = useState(0);

  const onSelect = useCallback(() => {
    if (!api) return;
    setCurrent(api.selectedScrollSnap());
  }, [api, setCurrent]);

  useEffect(() => {
    if (!api) return;
    onSelect();
    api.on("select", onSelect);
    api.on("reInit", onSelect);
    return () => {
      api.off("select", onSelect);
      api.off("reInit", onSelect);
    };
  }, [api, onSelect]);

  return (
    <section className="py-20 lg:py-28 section-dark-gradient">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="inline-block text-[#8B6F47] font-semibold text-sm tracking-wider uppercase mb-4">
              Testimonios
            </span>
            <h2
              className="text-2xl sm:text-3xl lg:text-[2.5rem] font-bold leading-[1.15] mb-4"
              style={{ fontFamily: "var(--font-playfair), serif" }}
            >
              <span className="text-white">Lo Que Dicen</span>{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #D4C4B0, #C9A961)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Nuestros Clientes
              </span>
            </h2>
            <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
              La confianza de nuestros clientes es nuestra mayor satisfacción.
              Cada testimonio refleja nuestro compromiso con la excelencia
              jurídica.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <div className="relative max-w-4xl mx-auto">
            <Carousel
              setApi={setApi}
              opts={{ align: "center", loop: true }}
              plugins={[Autoplay({ delay: 5000, stopOnInteraction: true })]}
              className="w-full"
            >
              <CarouselContent className="-ml-4">
                {items.map((t, i) => (
                  <CarouselItem
                    key={t._id || i}
                    className="pl-4 md:basis-[80%] lg:basis-[70%]"
                  >
                    <div className="glass-card gold-border-gradient rounded-2xl p-8 sm:p-10 h-full">
                      <Quote className="w-10 h-10 text-[#C9A961]/25 mb-6" />
                      <p
                        className="text-gray-300 text-base sm:text-lg leading-relaxed mb-8 cursor-pointer"
                        style={{
                          fontFamily: "var(--font-merriweather), serif",
                        }}
                        {...ve(t._id, "testimonial", "quote")}
                      >
                        &ldquo;{t.quote}&rdquo;
                      </p>
                      <div className="flex items-center justify-between flex-wrap gap-4">
                        <div>
                          <p
                            className="text-white font-bold text-base cursor-pointer"
                            {...ve(t._id, "testimonial", "clientName")}
                          >
                            {t.clientName}
                          </p>
                          <p
                            className="text-[#8B6F47] text-sm cursor-pointer"
                            {...ve(t._id, "testimonial", "caseType")}
                          >
                            {t.caseType || "Cliente"}
                          </p>
                        </div>
                        <div className="flex gap-0.5">
                          {[...Array(t.rating || 5)].map((_, si) => (
                            <Star
                              key={si}
                              className="w-4 h-4 fill-[#C9A961] text-[#C9A961]"
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>

            <button
              onClick={() => api?.scrollPrev()}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 sm:-translate-x-5 w-10 h-10 rounded-full glass-card flex items-center justify-center hover:border-[#C9A961]/50 transition-colors gpu-accelerated cursor-pointer"
              aria-label="Anterior"
            >
              <ChevronLeft className="w-5 h-5 text-[#C9A961]" />
            </button>
            <button
              onClick={() => api?.scrollNext()}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 sm:translate-x-5 w-10 h-10 rounded-full glass-card flex items-center justify-center hover:border-[#C9A961]/50 transition-colors gpu-accelerated cursor-pointer"
              aria-label="Siguiente"
            >
              <ChevronRight className="w-5 h-5 text-[#C9A961]" />
            </button>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.25}>
          <div className="flex justify-center gap-2 mt-8">
            {items.map((_, i) => (
              <button
                key={i}
                onClick={() => api?.scrollTo(i)}
                className={`h-2 rounded-full transition-all duration-300 gpu-accelerated cursor-pointer ${
                  current === i
                    ? "w-8 bg-[#C9A961]"
                    : "w-2 bg-[#C9A961]/30 hover:bg-[#C9A961]/50"
                }`}
                aria-label={`Ir al testimonio ${i + 1}`}
              />
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
