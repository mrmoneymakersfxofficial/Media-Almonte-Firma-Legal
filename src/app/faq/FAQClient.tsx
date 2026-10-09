"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ScrollReveal } from "@/components/ScrollReveal";
import { HelpCircle, MessageSquare } from "lucide-react";
import { ve } from "@/lib/ve";
import type { FaqItem } from "@/sanity/types";

const DEFAULT_FAQS: FaqItem[] = [
  { _id: "faq-1", question: "¿Cuánto cuesta una consulta legal?", answer: "Ofrecemos consultas legales ilimitadas luego de la contratación profesional. Durante la sesión inicial evaluamos tu caso y te orientamos sobre las mejores opciones legales disponibles. Los honorarios por servicios legales se determinan de manera transparente según la complejidad del caso, y te informamos el costo total antes de iniciar cualquier procedimiento." },
  { _id: "faq-2", question: "¿Qué áreas del derecho abarcan?", answer: "Contamos con especialistas en Derecho Civil, Penal y de Familia. Nuestro equipo multidisciplinario permite abordar casos complejos que involucren múltiples ramas del derecho, garantizando una defensa integral y coordinada." },
  { _id: "faq-3", question: "¿Atienden casos fuera de Lima?", answer: "Sí, brindamos asesoría legal a nivel nacional. Aunque nuestra sede principal está en Lima, representamos a clientes en diversas ciudades del Perú y coordinamos con colegas en diferentes jurisdicciones para garantizar una atención oportuna y efectiva." },
  { _id: "faq-4", question: "¿Cuánto tiempo dura un proceso legal?", answer: "La duración varía según el tipo de caso y la jurisdicción. Un proceso civil conciliatorio puede resolverse en 2-3 meses, mientras que un litigio civil complejo o un proceso penal puede extenderse por más de un año. Desde la primera consulta te proporcionamos una estimación realista de los plazos involucrados." },
  { _id: "faq-5", question: "¿Ofrecen planes de pago?", answer: "Sí, entendemos que los servicios legales pueden representar una inversión significativa. Por ello ofrecemos planes de pago flexibles adaptados a las necesidades de cada cliente, permitiendo que accedas a una defensa legal de calidad sin comprometer tu economía." },
  { _id: "faq-6", question: "¿Cómo puedo dar seguimiento a mi caso?", answer: "Mantenemos una comunicación constante con nuestros clientes. Recibirás actualizaciones periódicas sobre el avance de tu caso, y puedes comunicarte con nosotros en cualquier momento a través de WhatsApp, correo electrónico o citas presenciales. La transparencia es uno de nuestros valores fundamentales." },
  { _id: "faq-7", question: "¿Qué documentos necesito para mi primera cita?", answer: "Depende del tipo de caso. En general, te recomendamos traer tu DNI, cualquier documento relacionado con tu situación legal (contratos, notificaciones, recibos), y si es posible, un resumen escrito de los hechos. Durante la cita te indicaremos si se requiere documentación adicional específica." },
  { _id: "faq-8", question: "¿Qué garantías ofrecen sobre los resultados?", answer: "Trabajamos con el máximo compromiso profesional y aplicamos estrategias jurídicas probadas. Si bien en derecho no se pueden garantizar resultados específicos, nuestro historial demuestra un 92% de resoluciones favorables. Nuestro compromiso es brindarte la mejor defensa posible dentro del marco legal vigente." },
];

export default function FAQClient({ faqs }: { faqs?: FaqItem[] }) {
  const items = faqs && faqs.length > 0 ? faqs : DEFAULT_FAQS;

  return (
    <section className="section-dark-gradient min-h-screen py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <ScrollReveal>
            <span className="inline-block px-4 py-1.5 rounded-full border border-[#C9A961]/30 text-[#C9A961] text-sm font-medium tracking-wider uppercase mb-8">Resuelve tus dudas</span>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h1 className="immersive-title font-bold mb-6" style={{ color: "#C9A961", fontFamily: "var(--font-playfair), serif" }}>Preguntas Frecuentes</h1>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <div className="section-divider-gold mb-6" />
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">Encuentra respuestas a las consultas más comunes sobre nuestros servicios legales. Si no encuentras lo que buscas, no dudes en contactarnos directamente.</p>
          </ScrollReveal>
        </div>

        {/* FAQ — accordion with visual editing */}
        <ScrollReveal delay={0.3}>
          <Accordion type="single" collapsible className="w-full">
            {items.map((faq, index) => (
              <AccordionItem
                key={faq._id || index}
                value={`item-${index}`}
                className="faq-accent-bar border-b border-white/[0.06] rounded-none px-0 pl-5"
              >
                <AccordionTrigger
                  className="text-white hover:text-[#C9A961] transition-colors duration-200 text-base md:text-lg font-medium py-5 gap-4 [&[data-state=open]>svg]:text-[#C9A961] cursor-pointer"
                  {...ve(faq._id, "faqItem", "question")}
                >
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent
                  className="text-gray-400 leading-relaxed text-base pb-5 cursor-pointer"
                  {...ve(faq._id, "faqItem", "answer")}
                >
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </ScrollReveal>

        {/* CTA */}
        <ScrollReveal delay={0.4}>
          <div className="mt-16 text-center">
            <hr className="subtle-divider mb-10" />
            <p className="text-gray-500 text-sm mb-6">¿Tienes una pregunta que no aparece aquí?</p>
            <a
              href="https://api.whatsapp.com/send?phone=51977186734&text=Hola%2C%20tengo%20una%20consulta%20para%20MEDINA%20ALMONTE%20Lawyers%20Firm."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 btn-gold-primary gpu-accelerated text-[#0F0F0F] font-bold text-sm px-8 py-3.5 rounded-xl cursor-pointer"
            >
              <MessageSquare className="w-4 h-4" />
              Preguntar por WhatsApp
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}