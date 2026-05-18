"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, MessageCircle, Phone, User, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useWhatsAppStore, services, generateWhatsAppURL } from "@/lib/whatsapp";

export function WhatsAppModal() {
  const { isOpen, closeModal, selectedServiceId } = useWhatsAppStore();
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [notes, setNotes] = useState("");

  const effectiveSelectedId = selectedId ?? selectedServiceId;
  const selectedService = services.find((s) => s.id === effectiveSelectedId);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);



  function handleSubmit() {
    if (!name.trim() || !phone.trim()) return;
    const serviceName = selectedService?.name || "No especificado";
    const servicePrice = selectedService?.price || "Consultar";
    const url = generateWhatsAppURL(serviceName, servicePrice, name, phone, notes);
    window.open(url, "_blank");
    closeModal();
    setName("");
    setPhone("");
    setNotes("");
    setSelectedId(null);
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 z-50"
            onClick={closeModal}
          />
          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 30 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto">
              {/* Header */}
              <div className="bg-whatsapp p-4 rounded-t-2xl flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                    <MessageCircle className="w-5 h-5 text-whatsapp" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-lg">Solicitar Cotización</h3>
                    <p className="text-white/80 text-sm">Responde por WhatsApp</p>
                  </div>
                </div>
                <button
                  onClick={closeModal}
                  className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors"
                >
                  <X className="w-4 h-4 text-white" />
                </button>
              </div>

              {/* Body */}
              <div className="p-6 space-y-5">
                {/* Service Selection */}
                <div className="space-y-2">
                  <Label className="text-sm font-semibold text-navy">
                    <FileText className="w-4 h-4 inline mr-1" />
                    Seleccione un servicio
                  </Label>
                  <select
                    value={effectiveSelectedId || ""}
                    onChange={(e) => setSelectedId(Number(e.target.value) || null)}
                    className="w-full h-10 rounded-lg border border-gray-300 bg-white px-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald/50 focus:border-emerald transition-all"
                  >
                    <option value="">-- Seleccione un servicio --</option>
                    {services.map((s) => (
                      <option key={s.id} value={s.id}>
                        {s.name} — {s.price}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Price Estimate */}
                {selectedService && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    className="bg-emerald/5 border border-emerald/20 rounded-lg p-3"
                  >
                    <p className="text-sm text-muted-foreground">Precio referencial:</p>
                    <p className="text-xl font-bold text-emerald">{selectedService.price}</p>
                  </motion.div>
                )}

                {/* Name */}
                <div className="space-y-2">
                  <Label className="text-sm font-semibold text-navy">
                    <User className="w-4 h-4 inline mr-1" />
                    Nombre completo *
                  </Label>
                  <Input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Ej: Juan Pérez"
                    className="border-gray-300 focus-visible:ring-emerald/50 focus-visible:border-emerald"
                  />
                </div>

                {/* Phone */}
                <div className="space-y-2">
                  <Label className="text-sm font-semibold text-navy">
                    <Phone className="w-4 h-4 inline mr-1" />
                    Teléfono *
                  </Label>
                  <Input
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Ej: 943366950"
                    className="border-gray-300 focus-visible:ring-emerald/50 focus-visible:border-emerald"
                  />
                </div>

                {/* Notes */}
                <div className="space-y-2">
                  <Label className="text-sm font-semibold text-navy">Consulta adicional</Label>
                  <Textarea
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Cuéntenos sobre su necesidad..."
                    rows={3}
                    className="border-gray-300 focus-visible:ring-emerald/50 focus-visible:border-emerald resize-none"
                  />
                </div>

                {/* Submit */}
                <Button
                  onClick={handleSubmit}
                  disabled={!name.trim() || !phone.trim()}
                  className="w-full bg-whatsapp hover:bg-whatsapp/90 text-white font-semibold h-12 text-base rounded-xl transition-all"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Enviar por WhatsApp
                </Button>

                <p className="text-xs text-center text-muted-foreground">
                  Se abrirá WhatsApp con tu mensaje prellenado. Sin compromiso.
                </p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
