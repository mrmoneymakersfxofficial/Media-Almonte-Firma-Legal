"use client";

import { useState, type FormEvent } from "react";
import { Phone, Mail, MapPin, Clock, CheckCircle, MessageSquare } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { ve } from "@/lib/ve";
import type { SiteSettings } from "@/sanity/types";

interface FormData {
  nombre: string;
  telefono: string;
  email: string;
  tipoCaso: string;
  mensaje: string;
}

interface FormErrors {
  nombre?: string;
  telefono?: string;
  email?: string;
  tipoCaso?: string;
  mensaje?: string;
}

const CASE_TYPES = [
  "Derecho Civil",
  "Derecho Penal",
  "Derecho de Familia",
  "Consulta General",
];

function validate(data: FormData): FormErrors {
  const errors: FormErrors = {};
  if (!data.nombre.trim() || data.nombre.trim().length < 2) {
    errors.nombre = "El nombre debe tener al menos 2 caracteres.";
  }
  const phoneDigits = data.telefono.replace(/\D/g, "");
  if (!phoneDigits || !/^9\d{8}$/.test(phoneDigits)) {
    errors.telefono = "Ingresa un número válido (9 dígitos que inicien con 9).";
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!data.email.trim() || !emailRegex.test(data.email.trim())) {
    errors.email = "Ingresa un correo electrónico válido.";
  }
  if (!data.tipoCaso) {
    errors.tipoCaso = "Selecciona un tipo de caso.";
  }
  if (!data.mensaje.trim() || data.mensaje.trim().length < 10) {
    errors.mensaje = "El mensaje debe tener al menos 10 caracteres.";
  }
  return errors;
}

function FieldError({ message }: { message?: string }) {
  if (!message) return null;
  return (
    <p className="text-red-500 text-xs mt-1.5 flex items-center gap-1">
      <span className="inline-block w-1 h-1 rounded-full bg-red-500 shrink-0" />
      {message}
    </p>
  );
}

export default function ContactFormClient({
  siteSettings,
}: {
  siteSettings?: SiteSettings;
}) {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    nombre: "",
    telefono: "",
    email: "",
    tipoCaso: "",
    mensaje: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});

  const phone = siteSettings?.phone || "+51 977 186 734";
  const email = siteSettings?.email || "firmalegalmedinaalmonte@gmail.com";
  const address = siteSettings?.address || "Lima, Perú";
  const schedule = siteSettings?.schedule || "Lun–Vie 9:00–17:00";

  const contactInfo = [
    {
      icon: Phone,
      label: "WhatsApp",
      value: phone,
      href: `https://api.whatsapp.com/send?phone=51977186734`,
      color: "#25D366",
      vePath: "phone",
    },
    {
      icon: Mail,
      label: "Correo Electrónico",
      value: email,
      href: `mailto:${email}`,
      color: "#C9A961",
      vePath: "email",
    },
    {
      icon: MapPin,
      label: "Ubicación",
      value: address,
      href: undefined,
      color: "#8B6F47",
      vePath: "address",
    },
    {
      icon: Clock,
      label: "Horario de Atención",
      value: schedule,
      href: undefined,
      color: "#C9A961",
      vePath: "schedule",
    },
  ];

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const validationErrors = validate(formData);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;
    setIsSubmitting(true);
    const message = [
      `Hola *MEDINA ALMONTE — Lawyers Firm*,`,
      ``,
      `*Nombre:* ${formData.nombre.trim()}`,
      `*Teléfono:* +51 ${formData.telefono.replace(/\D/g, "")}`,
      `*Correo:* ${formData.email.trim()}`,
      `*Tipo de Caso:* ${formData.tipoCaso}`,
      `*Mensaje:* ${formData.mensaje.trim()}`,
    ].join("\n");
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://api.whatsapp.com/send?phone=51977186734&text=${encodedMessage}`;
    toast({
      title: "¡Mensaje preparado!",
      description:
        "Se abrirá WhatsApp con tu consulta. Nuestro equipo te responderá pronto.",
    });
    window.open(whatsappURL, "_blank", "noopener,noreferrer");
    setFormData({ nombre: "", telefono: "", email: "", tipoCaso: "", mensaje: "" });
    setIsSubmitting(false);
  }

  return (
    <section className="section-dark-gradient min-h-screen py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full border border-[#C9A961]/30 text-[#C9A961] text-sm font-medium tracking-wider uppercase mb-6">
              Hablemos
            </span>
            <h1
              className="immersive-title font-bold mb-5"
              style={{ color: "#C9A961", fontFamily: "var(--font-playfair), serif" }}
            >
              Contáctanos
            </h1>
            <div className="section-divider-gold mb-6" />
            <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              Cuéntanos tu situación legal. Completa el formulario y te contactaremos
              a la brevedad para brindarte la asesoría que necesitas.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-14">
          {/* Form */}
          <div className="lg:col-span-3">
            <ScrollReveal>
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <div>
                  <label htmlFor="nombre" className="block text-sm font-medium text-gray-300 mb-2">
                    Nombre completo <span className="text-red-400">*</span>
                  </label>
                  <Input
                    id="nombre"
                    name="nombre"
                    type="text"
                    required
                    minLength={2}
                    placeholder="Ej. Juan Pérez López"
                    value={formData.nombre}
                    onChange={handleChange}
                    className="bg-[#0F0F0F] border-white/10 text-white placeholder:text-gray-600 h-12 rounded-lg focus-visible:border-[#C9A961]/60 focus-visible:ring-[#C9A961]/20"
                  />
                  <FieldError message={errors.nombre} />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="telefono" className="block text-sm font-medium text-gray-300 mb-2">
                      Teléfono / Celular <span className="text-red-400">*</span>
                    </label>
                    <Input
                      id="telefono"
                      name="telefono"
                      type="tel"
                      required
                      placeholder="Ej. 987 654 321"
                      value={formData.telefono}
                      onChange={handleChange}
                      className="bg-[#0F0F0F] border-white/10 text-white placeholder:text-gray-600 h-12 rounded-lg focus-visible:border-[#C9A961]/60 focus-visible:ring-[#C9A961]/20"
                    />
                    <FieldError message={errors.telefono} />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Correo electrónico <span className="text-red-400">*</span>
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="Ej. juan@correo.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="bg-[#0F0F0F] border-white/10 text-white placeholder:text-gray-600 h-12 rounded-lg focus-visible:border-[#C9A961]/60 focus-visible:ring-[#C9A961]/20"
                    />
                    <FieldError message={errors.email} />
                  </div>
                </div>

                <div>
                  <label htmlFor="tipoCaso" className="block text-sm font-medium text-gray-300 mb-2">
                    Tipo de caso <span className="text-red-400">*</span>
                  </label>
                  <select
                    id="tipoCaso"
                    name="tipoCaso"
                    required
                    value={formData.tipoCaso}
                    onChange={handleChange}
                    className="w-full bg-[#0F0F0F] border border-white/10 text-white h-12 rounded-lg px-3 focus-visible:border-[#C9A961]/60 focus-visible:ring-[#C9A961]/20"
                  >
                    <option value="" disabled>Selecciona una opción</option>
                    {CASE_TYPES.map((t) => (
                      <option key={t} value={t} className="bg-[#0F0F0F] text-white">
                        {t}
                      </option>
                    ))}
                  </select>
                  <FieldError message={errors.tipoCaso} />
                </div>

                <div>
                  <label htmlFor="mensaje" className="block text-sm font-medium text-gray-300 mb-2">
                    Detalle de tu caso <span className="text-red-400">*</span>
                  </label>
                  <Textarea
                    id="mensaje"
                    name="mensaje"
                    rows={4}
                    required
                    minLength={10}
                    placeholder="Describe brevemente tu caso o consulta legal..."
                    value={formData.mensaje}
                    onChange={handleChange}
                    className="bg-[#0F0F0F] border-white/10 text-white placeholder:text-gray-600 rounded-lg focus-visible:border-[#C9A961]/60 focus-visible:ring-[#C9A961]/20"
                  />
                  <FieldError message={errors.mensaje} />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-gold-primary w-full py-4 text-base font-bold text-[#0F0F0F] rounded-xl cursor-pointer"
                >
                  Enviar Consulta por WhatsApp
                </Button>
                <p className="text-gray-600 text-xs text-center pt-1">
                  Al enviar, se abrirá WhatsApp con tu consulta prellenada. Ofrecemos consultas legales ilimitadas luego de la contratación profesional.
                </p>
              </form>
            </ScrollReveal>
          </div>

          {/* Contact info */}
          <div className="lg:col-span-2 flex flex-col gap-8">
            {contactInfo.map((item, index) => {
              const Icon = item.icon;
              const content = (
                <ScrollReveal key={item.label} delay={0.1 * (index + 1)}>
                  <div className="flex items-start gap-4">
                    <Icon className="w-5 h-5 mt-0.5 shrink-0" style={{ color: item.color }} />
                    <div className="min-w-0">
                      <h3
                        className="text-white text-sm font-semibold mb-1"
                        style={{ fontFamily: "var(--font-playfair), serif" }}
                      >
                        {item.label}
                      </h3>
                      <p
                        className="text-gray-400 text-sm leading-relaxed whitespace-pre-line cursor-pointer"
                        {...ve("siteSettings", "siteSettings", item.vePath)}
                      >
                        {item.value}
                      </p>
                    </div>
                  </div>
                  {index < contactInfo.length - 1 && <hr className="subtle-divider mt-8" />}
                </ScrollReveal>
              );
              if (item.href) {
                return (
                  <a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer" className="block cursor-pointer">
                    {content}
                  </a>
                );
              }
              return <div key={item.label}>{content}</div>;
            })}

            <ScrollReveal delay={0.2}>
              <hr className="subtle-divider" />
              <div className="mt-8">
                <div className="flex items-center gap-3 mb-3">
                  <MessageSquare className="w-5 h-5 text-[#C9A961]" />
                  <h3 className="text-white text-base font-semibold" style={{ fontFamily: "var(--font-playfair), serif" }}>
                    ¿Prefieres hablar ahora?
                  </h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  Escribe directamente por WhatsApp y recibe una respuesta inmediata de nuestro equipo legal.
                </p>
                <a
                  href="https://api.whatsapp.com/send?phone=51977186734&text=Hola%2C%20necesito%20asesor%C3%ADa%20legal%20de%20MEDINA%20ALMONTE%20Lawyers%20Firm."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="team-cta-gold inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-bold gpu-accelerated cursor-pointer"
                >
                  <CheckCircle className="w-4 h-4" />
                  Chatear por WhatsApp
                </a>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Map section */}
        <ScrollReveal delay={0.15}>
          <section className="mt-20">
            <hr className="subtle-divider mb-10" />
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6" style={{ fontFamily: "var(--font-playfair), serif" }}>
              Encuéntranos en Lima
            </h2>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62414.07!2d-77.03!3d-12.0464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c5f619ee3ec7%3A0x14206cb9cc452e4a!2sLima%2C%20Per%C3%BA!5e0!3m2!1ses!2spe!4v1234567890"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="maps-premium rounded-2xl"
            />
          </section>
        </ScrollReveal>
      </div>
    </section>
  );
}