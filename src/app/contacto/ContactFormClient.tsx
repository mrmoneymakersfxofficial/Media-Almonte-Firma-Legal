"use client";

import { useState, type FormEvent } from "react";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, MessageSquare } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

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
  "Derecho Penal",
  "Derecho de Familia",
  "Derecho Civil",
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

const contactInfo = [
  { icon: Phone, label: "WhatsApp", value: "+51 977 186 734", href: "https://api.whatsapp.com/send?phone=51977186734", color: "#25D366" },
  { icon: Mail, label: "Correo Electrónico", value: "contacto@medinaalmonte.com", href: "mailto:contacto@medinaalmonte.com", color: "#D4AF37" },
  { icon: MapPin, label: "Ubicación", value: "Lima, Perú", href: undefined, color: "#B87333" },
  { icon: Clock, label: "Horario de Atención", value: "Lunes a Viernes\n9:00 am – 5:00 pm", href: undefined, color: "#D4AF37" },
];

export default function ContactFormClient() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<FormData>({ nombre: "", telefono: "", email: "", tipoCaso: "", mensaje: "" });
  const [errors, setErrors] = useState<FormErrors>({});

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
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
      `Hola *Medina Almonte Firma Legal*,`,
      ``,
      `*Nombre:* ${formData.nombre.trim()}`,
      `*Teléfono:* +51 ${formData.telefono.replace(/\D/g, "")}`,
      `*Correo:* ${formData.email.trim()}`,
      `*Tipo de Caso:* ${formData.tipoCaso}`,
      `*Mensaje:* ${formData.mensaje.trim()}`,
    ].join("\n");
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://api.whatsapp.com/send?phone=51977186734&text=${encodedMessage}`;
    toast({ title: "¡Mensaje preparado!", description: "Se abrirá WhatsApp con tu consulta. Nuestro equipo te responderá pronto." });
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
            <span className="inline-block px-4 py-1.5 rounded-full border border-[#D4AF37]/30 text-[#D4AF37] text-sm font-medium tracking-wider uppercase mb-6">
              Hablemos
            </span>
            <h1 className="immersive-title font-bold mb-5" style={{ color: "#D4AF37", fontFamily: "var(--font-playfair), serif" }}>
              Contáctanos
            </h1>
            <div className="section-divider-gold mb-6" />
            <p className="pro-paragraph-lg max-w-2xl mx-auto">
              Cuéntanos tu situación legal. Completa el formulario y te contactaremos a la brevedad para brindarte la asesoría que necesitas.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-14">
          {/* Form — no card, direct on background */}
          <div className="lg:col-span-3">
            <ScrollReveal>
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <div>
                  <label htmlFor="nombre" className="block text-sm font-medium text-gray-300 mb-2">Nombre completo <span className="text-red-400">*</span></label>
                  <Input id="nombre" name="nombre" type="text" required minLength={2} placeholder="Ej. Juan Pérez López" value={formData.nombre} onChange={handleChange} className="bg-[#0A0A0A] border-white/10 text-white placeholder:text-gray-600 h-12 rounded-lg focus-visible:border-[#D4AF37]/60 focus-visible:ring-[#D4AF37]/20" />
                  <FieldError message={errors.nombre} />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="telefono" className="block text-sm font-medium text-gray-300 mb-2">Teléfono <span className="text-red-400">*</span></label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-sm pointer-events-none">+51</span>
                      <Input id="telefono" name="telefono" type="tel" required pattern="[0-9]{9}" placeholder="977 186 734" value={formData.telefono} onChange={handleChange} className="bg-[#0A0A0A] border-white/10 text-white placeholder:text-gray-600 h-12 rounded-lg pl-12 focus-visible:border-[#D4AF37]/60 focus-visible:ring-[#D4AF37]/20" />
                    </div>
                    <FieldError message={errors.telefono} />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Correo electrónico <span className="text-red-400">*</span></label>
                    <Input id="email" name="email" type="email" required placeholder="correo@ejemplo.com" value={formData.email} onChange={handleChange} className="bg-[#0A0A0A] border-white/10 text-white placeholder:text-gray-600 h-12 rounded-lg focus-visible:border-[#D4AF37]/60 focus-visible:ring-[#D4AF37]/20" />
                    <FieldError message={errors.email} />
                  </div>
                </div>
                <div>
                  <label htmlFor="tipoCaso" className="block text-sm font-medium text-gray-300 mb-2">Tipo de caso <span className="text-red-400">*</span></label>
                  <select id="tipoCaso" name="tipoCaso" required value={formData.tipoCaso} onChange={handleChange} className="w-full bg-[#0A0A0A] border border-white/10 text-white h-12 rounded-lg px-3 text-sm focus:outline-none focus:border-[#D4AF37]/60 focus:ring-2 focus:ring-[#D4AF37]/20 appearance-none cursor-pointer" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%239CA3AF' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E")`, backgroundRepeat: "no-repeat", backgroundPosition: "right 12px center" }}>
                    <option value="" disabled className="text-gray-600">Selecciona una opción</option>
                    {CASE_TYPES.map((tipo) => (<option key={tipo} value={tipo} className="bg-[#111111]">{tipo}</option>))}
                  </select>
                  <FieldError message={errors.tipoCaso} />
                </div>
                <div>
                  <label htmlFor="mensaje" className="block text-sm font-medium text-gray-300 mb-2">Mensaje <span className="text-red-400">*</span></label>
                  <Textarea id="mensaje" name="mensaje" required minLength={10} rows={5} placeholder="Describe brevemente tu situación legal o consulta..." value={formData.mensaje} onChange={handleChange} className="bg-[#0A0A0A] border-white/10 text-white placeholder:text-gray-600 rounded-lg resize-none focus-visible:border-[#D4AF37]/60 focus-visible:ring-[#D4AF37]/20 min-h-[120px]" />
                  <FieldError message={errors.mensaje} />
                </div>
                <Button type="submit" disabled={isSubmitting} className="w-full h-13 btn-gold-primary gpu-accelerated text-[#0A0A0A] font-bold text-base rounded-xl transition-colors duration-300 mt-2 cursor-pointer">
                  {isSubmitting ? (<span className="flex items-center gap-2"><span className="w-4 h-4 border-2 border-[#0A0A0A]/30 border-t-[#0A0A0A] rounded-full animate-spin" />Enviando...</span>) : (<span className="flex items-center gap-2"><Send className="w-4 h-4" />Enviar Consulta por WhatsApp</span>)}
                </Button>
                <p className="text-gray-600 text-xs text-center pt-1">Al enviar, se abrirá WhatsApp con tu consulta prellenada. Tu primera consulta es gratuita.</p>
              </form>
            </ScrollReveal>
          </div>

          {/* Contact info — no cards, icon + text direct */}
          <div className="lg:col-span-2 flex flex-col gap-8">
            {contactInfo.map((item, index) => {
              const Icon = item.icon;
              const content = (
                <ScrollReveal key={item.label} delay={0.1 * (index + 1)}>
                  <div className="flex items-start gap-4">
                    <Icon className="w-5 h-5 mt-0.5 shrink-0" style={{ color: item.color }} />
                    <div className="min-w-0">
                      <h3 className="text-white text-sm font-semibold mb-1" style={{ fontFamily: "var(--font-playfair), serif" }}>{item.label}</h3>
                      <p className="text-gray-400 text-sm leading-relaxed whitespace-pre-line">{item.value}</p>
                    </div>
                  </div>
                  {index < contactInfo.length - 1 && <hr className="subtle-divider mt-8" />}
                </ScrollReveal>
              );
              if (item.href) {
                return (<a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer" className="block">{content}</a>);
              }
              return <div key={item.label}>{content}</div>;
            })}

            <ScrollReveal delay={0.2}>
              <hr className="subtle-divider" />
              <div className="mt-8">
                <div className="flex items-center gap-3 mb-3">
                  <MessageSquare className="w-5 h-5 text-[#D4AF37]" />
                  <h3 className="text-white text-base font-semibold" style={{ fontFamily: "var(--font-playfair), serif" }}>¿Prefieres hablar ahora?</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">Escribe directamente por WhatsApp y recibe una respuesta inmediata de nuestro equipo legal.</p>
                <a href="https://api.whatsapp.com/send?phone=51977186734&text=Hola%2C%20necesito%20asesor%C3%ADa%20legal%20de%20Medina%20Almonte%20Firma%20Legal." target="_blank" rel="noopener noreferrer" className="team-cta-gold inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-bold gpu-accelerated">
                  <CheckCircle className="w-4 h-4" />Chatear por WhatsApp
                </a>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Offices section — 3 offices placeholder */}
        <ScrollReveal delay={0.15}>
          <section className="mt-20">
            <hr className="subtle-divider mb-10" />
            <div className="text-center mb-10">
              <span className="inline-block px-4 py-1.5 rounded-full border border-[#D4AF37]/30 text-[#D4AF37] text-sm font-medium tracking-wider uppercase mb-4">
                Nuestras Sedes
              </span>
              <h2
                className="text-2xl md:text-3xl font-bold text-white mb-4"
                style={{ fontFamily: "var(--font-playfair), serif" }}
              >
                Tres Oficinas para Atenderte
              </h2>
              <p className="text-gray-400 text-base leading-relaxed max-w-2xl mx-auto">
                Contamos con tres sedes estratégicamente ubicadas en Lima para brindarte una atención cercana y accesible.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              {[
                {
                  name: "Oficina Principal",
                  address: "Dirección pendiente por confirmar",
                  phone: "+51 977 186 734",
                  status: "Próximamente",
                },
                {
                  name: "Oficina Norte",
                  address: "Dirección pendiente por confirmar",
                  phone: "+51 977 186 734",
                  status: "Próximamente",
                },
                {
                  name: "Oficina Sur",
                  address: "Dirección pendiente por confirmar",
                  phone: "+51 977 186 734",
                  status: "Próximamente",
                },
              ].map((office, idx) => (
                <ScrollReveal key={office.name} delay={0.1 * (idx + 1)}>
                  <div className="text-center p-6 sm:p-8 rounded-2xl border border-[#D4AF37]/10 bg-white/[0.02]">
                    <div className="w-12 h-12 rounded-xl bg-[#D4AF37]/10 flex items-center justify-center mx-auto mb-4">
                      <MapPin className="w-6 h-6 text-[#D4AF37]" />
                    </div>
                    <h3
                      className="text-white font-bold text-lg mb-2"
                      style={{ fontFamily: "var(--font-playfair), serif" }}
                    >
                      {office.name}
                    </h3>
                    <p className="text-gray-500 text-sm mb-1">{office.address}</p>
                    <p className="text-[#B87333] text-sm font-medium mb-3">{office.phone}</p>
                    <span className="inline-block px-3 py-1 rounded-full border border-[#D4AF37]/20 text-[#D4AF37] text-xs font-medium">
                      {office.status}
                    </span>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </section>
        </ScrollReveal>

        {/* Map section */}
        <ScrollReveal delay={0.15}>
          <section className="mt-20">
            <hr className="subtle-divider mb-10" />
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6" style={{ fontFamily: "var(--font-playfair), serif" }}>Encuéntranos en Lima</h2>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62414.07!2d-77.03!3d-12.0464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c5f619ee3ec7%3A0x14206cb9cc452e4a!2sLima%2C%20Per%C3%BA!5e0!3m2!1ses!2spe!4v1234567890" width="100%" height="400" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="maps-premium rounded-2xl" />
          </section>
        </ScrollReveal>
      </div>
    </section>
  );
}