"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ScrollReveal } from "@/components/ScrollReveal";
import { HelpCircle, MessageSquare } from "lucide-react";

const faqs = [
  { question: "¿Cuánto cuesta una consulta legal?", answer: "La primera consulta es completamente gratuita y sin compromiso. Durante esta sesión evaluamos tu caso y te orientamos sobre las mejores opciones legales disponibles. Los honorarios por servicios legales se determinan de manera transparente según la complejidad del caso, y te informamos el costo total antes de iniciar cualquier procedimiento." },
  { question: "¿Qué áreas del derecho abarcan?", answer: "Contamos con especialistas en Derecho Penal, de Familia y Civil. Nuestro equipo multidisciplinario permite abordar casos complejos que involucren múltiples ramas del derecho, garantizando una defensa integral y coordinada." },
  { question: "¿Atienden casos fuera de Lima?", answer: "Sí, brindamos asesoría legal a nivel nacional. Aunque nuestra sede principal está en Lima, representamos a clientes en diversas ciudades del Perú y coordinamos con colegas en diferentes jurisdicciones para garantizar una atención oportuna y efectiva." },
  { question: "¿Cuánto tiempo dura un proceso legal?", answer: "La duración varía según el tipo de caso y la jurisdicción. Un proceso de familia o una conciliación civil puede resolverse en 2-4 meses, mientras que un litigio penal complejo puede extenderse por más tiempo. Desde la primera consulta te proporcionamos una estimación realista de los plazos involucrados en tu caso específico." },
  { question: "¿Ofrecen planes de pago?", answer: "Sí, entendemos que los servicios legales pueden representar una inversión significativa. Por ello ofrecemos planes de pago flexibles adaptados a las necesidades de cada cliente, permitiendo que accedas a una defensa legal de calidad sin comprometer tu economía." },
  { question: "¿Cómo puedo dar seguimiento a mi caso?", answer: "Mantenemos una comunicación constante con nuestros clientes. Recibirás actualizaciones periódicas sobre el avance de tu caso, y puedes comunicarte con nosotros en cualquier momento a través de WhatsApp, correo electrónico o citas presenciales. La transparencia es uno de nuestros valores fundamentales." },
  { question: "¿Qué documentos necesito para mi primera cita?", answer: "Depende del tipo de caso. En general, te recomendamos traer tu DNI, cualquier documento relacionado con tu situación legal (contratos, notificaciones, recibos), y si es posible, un resumen escrito de los hechos. Durante la cita gratuita te indicaremos si se requiere documentación adicional específica." },
  { question: "¿Qué garantías ofrecen sobre los resultados?", answer: "Trabajamos con el máximo compromiso profesional y aplicamos estrategias jurídicas probadas. Si bien en derecho no se pueden garantizar resultados específicos, nuestro historial demuestra un 92% de resoluciones favorables. Nuestro compromiso es brindarte la mejor defensa posible dentro del marco legal vigente." },
];

export default function FAQClient() {
  return (
    <section className="section-dark-gradient min-h-screen py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <ScrollReveal>
            <span className="inline-block px-4 py-1.5 rounded-full border border-[#D4AF37]/30 text-[#D4AF37] text-sm font-medium tracking-wider uppercase mb-8">Resuelve tus dudas</span>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h1 className="immersive-title font-bold mb-6" style={{ color: "#D4AF37", fontFamily: "var(--font-playfair), serif" }}>Preguntas Frecuentes</h1>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <div className="section-divider-gold mb-6" />
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="pro-paragraph-lg max-w-2xl mx-auto">Encuentra respuestas a las consultas más comunes sobre nuestros servicios legales. Si no encuentras lo que buscas, no dudes en contactarnos directamente.</p>
          </ScrollReveal>
        </div>

        {/* FAQ — no card, just accent bar on left */}
        <ScrollReveal delay={0.3}>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="faq-accent-bar border-b border-white/[0.06] rounded-none px-0 pl-5"
              >
                <AccordionTrigger className="text-white hover:text-[#D4AF37] transition-colors duration-200 text-base md:text-lg font-medium py-5 gap-4 [&[data-state=open]>svg]:text-[#D4AF37]">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="pro-paragraph pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </ScrollReveal>

        {/* CTA — no card */}
        <ScrollReveal delay={0.4}>
          <div className="mt-16 text-center">
            <hr className="subtle-divider mb-10" />
            <div className="flex justify-center mb-4">
              <div className="w-12 h-12 bg-[#D4AF37]/15 rounded-xl flex items-center justify-center icon-glow">
                <MessageSquare className="w-6 h-6 text-[#D4AF37]" />
              </div>
            </div>
            <h3 className="text-white text-xl md:text-2xl font-bold mb-3" style={{ fontFamily: "var(--font-playfair), serif" }}>¿No encontraste tu respuesta?</h3>
            <p className="pro-paragraph mb-6 max-w-lg mx-auto">Nuestro equipo está listo para resolver todas tus consultas. Escríbenos y recibe orientación legal personalizada.</p>
            <a href="https://api.whatsapp.com/send?phone=51977186734&text=Hola%2C%20tengo%20una%20consulta%20sobre%20sus%20servicios%20legales." target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 btn-gold-primary gpu-accelerated text-[#0A0A0A] font-bold text-sm px-7 py-3 rounded-xl">
              <HelpCircle className="w-4 h-4" />Consultar por WhatsApp
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}