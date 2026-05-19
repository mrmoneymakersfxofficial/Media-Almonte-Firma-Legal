"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle, Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useWhatsAppStore, services } from "@/lib/whatsapp";

const contactInfo = [
  {
    icon: MessageCircle,
    title: "WhatsApp",
    detail: "+51 943 366 950",
    description: "Respuesta inmediata",
    color: "text-whatsapp",
    bg: "bg-whatsapp/10",
  },
  {
    icon: Mail,
    title: "Email",
    detail: "contacto@jhonyasociados.com",
    description: "Respuesta en 24h",
    color: "text-navy",
    bg: "bg-navy/10",
  },
  {
    icon: MapPin,
    title: "Ubicación",
    detail: "Lima, Perú",
    description: "Atención virtual y presencial",
    color: "text-purple",
    bg: "bg-purple/10",
  },
  {
    icon: Clock,
    title: "Horario",
    detail: "Lun - Vie: 8:00 - 18:00",
    description: "Sáb: 9:00 - 13:00",
    color: "text-emerald",
    bg: "bg-emerald/10",
  },
];

export function Contact() {
  const { ref, isVisible } = useScrollAnimation(0.1);
  const { openModal } = useWhatsAppStore();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const serviceName =
      services.find((s) => s.name === formData.service)?.name || formData.service || "General";
    const message = `Hola Jhon & Asociados.

Nombre: ${formData.name}
Email: ${formData.email}
Servicio de interés: ${serviceName}
Mensaje: ${formData.message}`;

    const url = `https://api.whatsapp.com/send?phone=51943366950&text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  }

  return (
    <section id="contacto" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div ref={ref} className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block text-emerald font-semibold text-sm tracking-wider uppercase mb-4"
          >
            Contacto
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy"
          >
            Contáctanos
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-lg text-muted-foreground"
          >
            Estamos listos para ayudarte. Escríbenos y recibe asesoría personalizada.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Form - Left side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-3 bg-white rounded-2xl border border-gray-200 shadow-sm p-6 lg:p-8"
          >
            <h3 className="text-xl font-bold text-navy mb-6">Envíanos un mensaje</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-navy">Nombre completo *</label>
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Tu nombre"
                  className="w-full h-10 rounded-lg border border-gray-300 bg-white px-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald/50 focus:border-emerald transition-all"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-navy">Email</label>
                  <input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="tu@email.com"
                    className="w-full h-10 rounded-lg border border-gray-300 bg-white px-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald/50 focus:border-emerald transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-navy">Servicio de interés</label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full h-10 rounded-lg border border-gray-300 bg-white px-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald/50 focus:border-emerald transition-all"
                  >
                    <option value="">-- Seleccionar --</option>
                    {services.map((s) => (
                      <option key={s.id} value={s.name}>
                        {s.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-navy">Mensaje</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Cuéntanos sobre tu necesidad..."
                  rows={4}
                  className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald/50 focus:border-emerald transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-whatsapp hover:bg-whatsapp/90 text-white py-3.5 rounded-xl font-semibold transition-all shadow-md hover:shadow-lg"
              >
                <Send className="w-5 h-5" />
                Enviar por WhatsApp
              </button>
            </form>
          </motion.div>

          {/* Contact Info - Right side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-2 space-y-4"
          >
            {contactInfo.map((info) => {
              const Icon = info.icon;
              return (
                <div
                  key={info.title}
                  className="bg-white rounded-xl border border-gray-200 p-5 hover:shadow-md transition-all"
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 ${info.bg} rounded-xl flex items-center justify-center shrink-0`}>
                      <Icon className={`w-5 h-5 ${info.color}`} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-navy text-sm">{info.title}</h4>
                      <p className="text-navy font-medium mt-0.5">{info.detail}</p>
                      <p className="text-xs text-muted-foreground mt-0.5">{info.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Quick WhatsApp */}
            <button
              onClick={() => openModal()}
              className="w-full bg-navy hover:bg-navy-light text-white rounded-xl p-5 flex items-center justify-center gap-3 font-semibold transition-all shadow-md hover:shadow-lg"
            >
              <MessageCircle className="w-5 h-5" />
              Consultoría Gratuita
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
