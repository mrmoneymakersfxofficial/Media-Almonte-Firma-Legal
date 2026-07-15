import type { Metadata } from "next";
import { SiteLayout } from "@/components/SiteLayout";
import { ScrollReveal } from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Política de Privacidad | Medina Almonte Firma Legal",
  description: "Política de Privacidad de Medina Almonte Firma Legal. Conoce cómo recopilamos, usamos y protegemos tus datos personales.",
  keywords: ["política de privacidad", "protección de datos", "datos personales", "privacidad abogados"],
};

export default function PoliticaPrivacidadPage() {
  return (
    <SiteLayout>
      <section className="section-dark-gradient min-h-screen py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="mb-14">
            <ScrollReveal>
              <span className="inline-block px-4 py-1.5 rounded-full border border-[#D4AF37]/30 text-[#D4AF37] text-sm font-medium tracking-wider uppercase mb-6">Legal</span>
            </ScrollReveal>
            <ScrollReveal delay={0.05}>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-5" style={{ color: "#D4AF37", fontFamily: "var(--font-playfair), serif" }}>Política de Privacidad</h1>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <div className="section-divider-gold mb-4" style={{ margin: 0 }} />
              <p className="text-gray-500 text-sm mt-4">Última actualización: Junio 2026</p>
            </ScrollReveal>
          </div>

          <div className="space-y-10">
            <ScrollReveal delay={0.15}>
              <p className="text-gray-300 text-base leading-relaxed">
                En <span className="text-white font-semibold">Medina Almonte Firma Legal</span>, nos comprometemos a proteger la privacidad de las personas que interactúan con nuestros servicios. Esta Política de Privacidad explica cómo recopilamos, utilizamos y protegemos tus datos personales cuando visitas nuestro sitio web o nos contactas a través de nuestros canales de atención.
              </p>
            </ScrollReveal>

            <hr className="subtle-divider" />

            <ScrollReveal delay={0.2}>
              <section>
                <h2 className="text-xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-playfair), serif" }}>1. Responsable del Tratamiento</h2>
                <p className="pro-paragraph">
                  El responsable del tratamiento de los datos personales es <span className="text-white">Medina Almonte Firma Legal</span>, con domicilio en Lima, Perú. Para cualquier consulta relacionada con el tratamiento de tus datos personales, puedes contactarnos a través de <a href="mailto:contacto@medinaalmonte.com" className="text-[#D4AF37] hover:underline transition-colors">contacto@medinaalmonte.com</a> o al teléfono <a href="tel:+51977186734" className="text-[#D4AF37] hover:underline transition-colors">+51 977 186 734</a>.
                </p>
              </section>
            </ScrollReveal>

            <hr className="subtle-divider" />

            <ScrollReveal delay={0.25}>
              <section>
                <h2 className="text-xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-playfair), serif" }}>2. Datos que Recopilamos</h2>
                <p className="pro-paragraph mb-4">Recopilamos únicamente los datos necesarios para atenderte adecuadamente. A través de nuestro formulario de contacto, podemos solicitar:</p>
                <ul className="space-y-2.5 pro-paragraph pl-1">
                  {["Nombre completo", "Correo electrónico", "Número de teléfono", "Tipo de caso o área de interés legal", "Mensaje o descripción de la consulta"].map((item) => (
                    <li key={item} className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] shrink-0 mt-2.5" />{item}</li>
                  ))}
                </ul>
                <p className="pro-paragraph mt-4">No recopilamos datos sensibles (como origen racial, salud, creencias religiosas) sin tu consentimiento expreso.</p>
              </section>
            </ScrollReveal>

            <hr className="subtle-divider" />

            <ScrollReveal delay={0.3}>
              <section>
                <h2 className="text-xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-playfair), serif" }}>3. Finalidad del Tratamiento</h2>
                <p className="pro-paragraph mb-4">Los datos personales que recopilamos son utilizados exclusivamente para:</p>
                <ul className="space-y-2.5 pro-paragraph pl-1">
                  {["Atender tu consulta legal y brindarte la asesoría solicitada.", "Comunicarnos contigo sobre nuestros servicios legales.", "Enviar información relevante sobre tu caso o áreas de tu interés.", "Mejorar nuestros servicios y la experiencia del usuario en nuestro sitio web."].map((item) => (
                    <li key={item} className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] shrink-0 mt-2.5" />{item}</li>
                  ))}
                </ul>
                <p className="pro-paragraph mt-4">No utilizaremos tus datos para fines distintos a los descritos sin tu consentimiento previo.</p>
              </section>
            </ScrollReveal>

            <hr className="subtle-divider" />

            <ScrollReveal delay={0.35}>
              <section>
                <h2 className="text-xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-playfair), serif" }}>4. Base Legal del Tratamiento</h2>
                <p className="pro-paragraph">El tratamiento de tus datos personales se realiza sobre las siguientes bases legales, conforme a la Ley N° 29733, Ley de Protección de Datos Personales del Perú:</p>
                <div className="mt-6 space-y-6">
                  <div>
                    <h3 className="text-white font-semibold text-sm mb-1.5">Consentimiento del Titular</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">Cuando nos proporcionas tus datos a través del formulario de contacto, otorgas tu consentimiento expreso para que los tratemos conforme a las finalidades descritas.</p>
                  </div>
                  <hr className="subtle-divider" />
                  <div>
                    <h3 className="text-white font-semibold text-sm mb-1.5">Interés Legítimo</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">También podemos tratar tus datos cuando exista un interés legítimo que no vulnere tus derechos y libertades fundamentales, como la gestión de la relación profesional y la mejora de nuestros servicios.</p>
                  </div>
                </div>
              </section>
            </ScrollReveal>

            <hr className="subtle-divider" />

            <ScrollReveal delay={0.4}>
              <section>
                <h2 className="text-xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-playfair), serif" }}>5. Duración del Tratamiento</h2>
                <p className="pro-paragraph">Tus datos personales serán conservados durante el tiempo necesario para cumplir con la finalidad para la que fueron recopilados, y mientras no solicites su supresión. Una vez finalizada la relación profesional, los datos serán eliminados o anonimizados, salvo aquellos que deban conservarse durante el plazo de prescripción legal aplicable.</p>
              </section>
            </ScrollReveal>

            <hr className="subtle-divider" />

            <ScrollReveal delay={0.45}>
              <section>
                <h2 className="text-xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-playfair), serif" }}>6. Derechos del Titular</h2>
                <p className="pro-paragraph mb-4">Como titular de tus datos personales, tienes derecho a ejercer los siguientes derechos ante nosotros:</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-5">
                  {[
                    { title: "Acceso", desc: "Solicitar información sobre los datos que tenemos sobre ti." },
                    { title: "Rectificación", desc: "Corregir datos inexactos o incompletos." },
                    { title: "Cancelación", desc: "Solicitar la eliminación de tus datos personales." },
                    { title: "Oposición", desc: "Oponerte al tratamiento por motivos legítimos." },
                  ].map((right) => (
                    <div key={right.title}>
                      <h3 className="text-[#D4AF37] font-semibold text-sm mb-1.5">{right.title}</h3>
                      <p className="text-gray-400 text-sm leading-relaxed">{right.desc}</p>
                    </div>
                  ))}
                </div>
                <p className="pro-paragraph mt-4">Para ejercer cualquiera de estos derechos, envía tu solicitud a <a href="mailto:contacto@medinaalmonte.com" className="text-[#D4AF37] hover:underline transition-colors">contacto@medinaalmonte.com</a> y responderemos en un plazo máximo de 30 días hábiles.</p>
              </section>
            </ScrollReveal>

            <hr className="subtle-divider" />

            <ScrollReveal delay={0.5}>
              <section>
                <h2 className="text-xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-playfair), serif" }}>7. Transferencia de Datos</h2>
                <p className="pro-paragraph"><span className="text-white font-medium">No se realizan transferencias internacionales de datos personales.</span> Toda la información que recopilamos se almacena y procesa dentro del territorio peruano, en cumplimiento de la normativa vigente de protección de datos.</p>
              </section>
            </ScrollReveal>

            <hr className="subtle-divider" />

            <ScrollReveal delay={0.55}>
              <section>
                <h2 className="text-xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-playfair), serif" }}>8. Seguridad de los Datos</h2>
                <p className="pro-paragraph">Adoptamos las medidas técnicas y organizativas necesarias para proteger tus datos personales contra accesos no autorizados, pérdida, alteración o destrucción. Estas medidas incluyen protocolos de seguridad en nuestros sistemas, capacitación de nuestro personal y restricciones de acceso a la información.</p>
              </section>
            </ScrollReveal>

            <hr className="subtle-divider" />

            <ScrollReveal delay={0.6}>
              <section>
                <h2 className="text-xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-playfair), serif" }}>9. Contacto</h2>
                <p className="pro-paragraph mb-5">Si tienes cualquier pregunta o inquietud sobre esta Política de Privacidad o el tratamiento de tus datos personales, no dudes en contactarnos:</p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-gray-300 text-sm">
                    <span className="text-[#D4AF37] font-semibold w-28 shrink-0">Correo:</span>
                    <a href="mailto:contacto@medinaalmonte.com" className="text-[#D4AF37] hover:underline transition-colors">contacto@medinaalmonte.com</a>
                  </div>
                  <div className="flex items-center gap-3 text-gray-300 text-sm">
                    <span className="text-[#D4AF37] font-semibold w-28 shrink-0">Teléfono:</span>
                    <a href="tel:+51977186734" className="text-[#D4AF37] hover:underline transition-colors">+51 977 186 734</a>
                  </div>
                  <div className="flex items-center gap-3 text-gray-300 text-sm">
                    <span className="text-[#D4AF37] font-semibold w-28 shrink-0">Ubicación:</span>
                    <span>Lima, Perú</span>
                  </div>
                </div>
              </section>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}