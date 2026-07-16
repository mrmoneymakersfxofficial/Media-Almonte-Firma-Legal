"use client";

import { useState, useRef } from "react";
import { SiteLayout } from "@/components/SiteLayout";
import { ScrollReveal } from "@/components/ScrollReveal";
import {
  FileText,
  Download,
  CheckCircle2,
  AlertTriangle,
  User,
  MapPin,
  Phone,
  Mail,
  MessageSquare,
  Calendar,
  Shield,
  Building2,
  Info,
} from "lucide-react";
import jsPDF from "jspdf";

/* ═══════════════════════════════════════════════════════════════
   TYPES
   ═══════════════════════════════════════════════════════════════ */
interface FormData {
  tipo: "queja" | "reclamo";
  nombres: string;
  dni: string;
  direccion: string;
  departamento: string;
  provincia: string;
  distrito: string;
  telefono: string;
  email: string;
  menorEdad: boolean;
  apoderado: string;
  bienContratado: string;
  descripcion: string;
  pedido: string;
  fecha: string;
}

const INITIAL_FORM: FormData = {
  tipo: "reclamo",
  nombres: "",
  dni: "",
  direccion: "",
  departamento: "",
  provincia: "",
  distrito: "",
  telefono: "",
  email: "",
  menorEdad: false,
  apoderado: "",
  bienContratado: "",
  descripcion: "",
  pedido: "",
  fecha: new Date().toISOString().split("T")[0],
};

/* ═══════════════════════════════════════════════════════════════
   HELPER: Calculate Ficha Number
   ═══════════════════════════════════════════════════════════════ */
function generateFichaNumber(): string {
  const now = new Date();
  const y = now.getFullYear();
  const m = String(now.getMonth() + 1).padStart(2, "0");
  const r = String(Math.floor(Math.random() * 9000) + 1000);
  return `${String(y).slice(-2)}${m}-${r}`;
}

/* ═══════════════════════════════════════════════════════════════
   PDF GENERATOR — Professional INDECOPI-compliant format
   ═══════════════════════════════════════════════════════════════ */
function generatePDF(data: FormData, ficha: string): void {
  const doc = new jsPDF({ orientation: "portrait", unit: "mm", format: "a4" });
  const pageW = doc.internal.pageSize.getWidth();
  const margin = 15;
  const contentW = pageW - margin * 2;
  let y = 12;

  // ─── HEADER BAR ───
  doc.setFillColor(10, 10, 10);
  doc.rect(0, 0, pageW, 32, "F");

  // Gold accent line
  doc.setDrawColor(212, 175, 55);
  doc.setLineWidth(0.8);
  doc.line(0, 32, pageW, 32);

  // Firm name
  doc.setFont("helvetica", "bold");
  doc.setFontSize(16);
  doc.setTextColor(212, 175, 55);
  doc.text("MEDINA ALMONTE", margin, 14);
  doc.setFontSize(10);
  doc.setTextColor(184, 115, 51);
  doc.text("LAWYERS FIRM", margin, 21);

  // RUC + Ficha
  doc.setFontSize(8);
  doc.setTextColor(255, 255, 255);
  doc.text("RUC: Pendiente de Inscripción", pageW - margin, 14, { align: "right" });
  doc.text(`Ficha: ${ficha}`, pageW - margin, 21, { align: "right" });

  y = 40;

  // ─── TITLE ───
  doc.setFontSize(14);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(10, 10, 10);
  doc.text("HOJA DE RECLAMACIONES", pageW / 2, y, { align: "center" });
  y += 4;

  doc.setFontSize(8);
  doc.setFont("helvetica", "normal");
  doc.setTextColor(120, 120, 120);
  doc.text(
    "Conforme al Código de Protección y Defensa del Consumidor (Ley N° 29571) y su Reglamento (D.S. N° 011-2011-PCM)",
    pageW / 2,
    y,
    { align: "center" }
  );
  y += 3;
  doc.text(
    "Artículo 24 del Reglamento - Formato según Anexo 5 de la Resolución N° 007-2017-PCM/INDECOPI",
    pageW / 2,
    y,
    { align: "center" }
  );
  y += 8;

  // ─── FICHA + DATE + TYPE ───
  doc.setFillColor(245, 245, 245);
  doc.roundedRect(margin, y, contentW, 14, 2, 2, "F");

  doc.setFontSize(9);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(10, 10, 10);
  doc.text(`N° Ficha: ${ficha}`, margin + 4, y + 6);
  doc.text(`Fecha: ${data.fecha}`, margin + 4, y + 11);

  const tipoLabel = data.tipo === "reclamo" ? "RECLAMO" : "QUEJA";
  doc.setTextColor(data.tipo === "reclamo" ? 180 : 50, data.tipo === "reclamo" ? 130 : 120, 50);
  doc.text(tipoLabel, pageW - margin - 4, y + 6, { align: "right" });

  doc.setFont("helvetica", "normal");
  doc.setTextColor(120, 120, 120);
  doc.setFontSize(7);
  doc.text(
    data.tipo === "reclamo"
      ? "Disconformidad relacionada a los productos o servicios"
      : "Malestar, decepción o inconformidad no relacionada a los productos o servicios",
    pageW - margin - 4,
    y + 11,
    { align: "right" }
  );
  y += 20;

  // ─── SECTION: DATOS DEL CONSUMIDOR ───
  doc.setFillColor(212, 175, 55);
  doc.roundedRect(margin, y, contentW, 7, 1.5, 1.5, "F");
  doc.setFontSize(9);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(255, 255, 255);
  doc.text("1. DATOS DEL CONSUMIDOR", margin + 4, y + 5);
  y += 11;

  // Consumer fields
  const consumerFields = [
    ["Nombre y Apellidos:", data.nombres],
    ["DNI / CE:", data.dni],
    ["Dirección:", data.direccion],
    ["Ubigeo:", `${data.departamento} / ${data.provincia} / ${data.distrito}`],
    ["Teléfono:", data.telefono],
    ["Correo Electrónico:", data.email],
  ];

  if (data.menorEdad) {
    consumerFields.push(["Apoderado (Menor de Edad):", data.apoderado]);
  }

  consumerFields.forEach(([label, value]) => {
    doc.setFillColor(250, 250, 250);
    doc.roundedRect(margin, y, contentW, 7, 1, 1, "F");
    doc.setFontSize(8);
    doc.setFont("helvetica", "bold");
    doc.setTextColor(80, 80, 80);
    doc.text(String(label), margin + 3, y + 5);
    doc.setFont("helvetica", "normal");
    doc.setTextColor(30, 30, 30);
    const labelW = doc.getTextWidth(String(label));
    const valLines = doc.splitTextToSize(String(value), contentW - labelW - 8);
    doc.text(valLines, margin + labelW + 6, y + 5);
    y += 8;
  });

  y += 2;

  // ─── SECTION: IDENTIFICACION DEL BIEN / SERVICIO ───
  doc.setFillColor(212, 175, 55);
  doc.roundedRect(margin, y, contentW, 7, 1.5, 1.5, "F");
  doc.setFontSize(9);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(255, 255, 255);
  doc.text("2. IDENTIFICACIÓN DEL BIEN CONTRATADO / SERVICIO", margin + 4, y + 5);
  y += 11;

  doc.setFillColor(250, 250, 250);
  const bienLines = doc.splitTextToSize(data.bienContratado || "—", contentW - 6);
  const bienH = Math.max(bienLines.length * 4.5 + 6, 12);
  doc.roundedRect(margin, y, contentW, bienH, 1, 1, "F");
  doc.setFontSize(8);
  doc.setFont("helvetica", "normal");
  doc.setTextColor(30, 30, 30);
  doc.text(bienLines, margin + 3, y + 5);
  y += bienH + 4;

  // ─── SECTION: DESCRIPCION ───
  doc.setFillColor(212, 175, 55);
  doc.roundedRect(margin, y, contentW, 7, 1.5, 1.5, "F");
  doc.setFontSize(9);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(255, 255, 255);
  doc.text("3. DESCRIPCIÓN", margin + 4, y + 5);
  y += 11;

  doc.setFillColor(250, 250, 250);
  const descLines = doc.splitTextToSize(data.descripcion || "—", contentW - 6);
  const descH = Math.max(descLines.length * 4.5 + 6, 25);
  doc.roundedRect(margin, y, contentW, descH, 1, 1, "F");
  doc.setFontSize(8);
  doc.setFont("helvetica", "normal");
  doc.setTextColor(30, 30, 30);
  doc.text(descLines, margin + 3, y + 5);
  y += descH + 4;

  // ─── SECTION: PEDIDO ───
  doc.setFillColor(212, 175, 55);
  doc.roundedRect(margin, y, contentW, 7, 1.5, 1.5, "F");
  doc.setFontSize(9);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(255, 255, 255);
  doc.text("4. PEDIDO DEL CONSUMIDOR", margin + 4, y + 5);
  y += 11;

  doc.setFillColor(250, 250, 250);
  const pedLines = doc.splitTextToSize(data.pedido || "—", contentW - 6);
  const pedH = Math.max(pedLines.length * 4.5 + 6, 18);
  doc.roundedRect(margin, y, contentW, pedH, 1, 1, "F");
  doc.setFontSize(8);
  doc.setFont("helvetica", "normal");
  doc.setTextColor(30, 30, 30);
  doc.text(pedLines, margin + 3, y + 5);
  y += pedH + 6;

  // ─── OBSERVATIONS ───
  doc.setFillColor(212, 175, 55);
  doc.roundedRect(margin, y, contentW, 7, 1.5, 1.5, "F");
  doc.setFontSize(9);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(255, 255, 255);
  doc.text("5. OBSERVACIONES Y ACCIONES TOMADAS POR EL PROVEEDOR", margin + 4, y + 5);
  y += 11;

  doc.setFillColor(250, 250, 250);
  doc.roundedRect(margin, y, contentW, 20, 1, 1, "F");
  doc.setFontSize(8);
  doc.setFont("helvetica", "italic");
  doc.setTextColor(160, 160, 160);
  doc.text("(Espacio reservado para uso exclusivo del proveedor)", margin + 3, y + 5);
  doc.text("Fecha de atención: _____ / _____ / _____", margin + 3, y + 15);
  y += 28;

  // ─── SIGNATURES ───
  doc.setFont("helvetica", "bold");
  doc.setFontSize(8);
  doc.setTextColor(60, 60, 60);

  const sigY = y + 15;
  // Consumer signature
  doc.line(margin, sigY, margin + 65, sigY);
  doc.text("Firma del Consumidor", margin + 32.5, sigY + 5, { align: "center" });
  doc.setFontSize(7);
  doc.setFont("helvetica", "normal");
  doc.setTextColor(120, 120, 120);
  doc.text("(DNI: " + data.dni + ")", margin + 32.5, sigY + 10, { align: "center" });

  // Provider signature
  doc.setFont("helvetica", "bold");
  doc.setFontSize(8);
  doc.setTextColor(60, 60, 60);
  doc.line(pageW - margin - 65, sigY, pageW - margin, sigY);
  doc.text("Firma del Proveedor", pageW - margin - 32.5, sigY + 5, { align: "center" });

  // ─── FOOTER ───
  const footY = doc.internal.pageSize.getHeight() - 12;
  doc.setDrawColor(212, 175, 55);
  doc.setLineWidth(0.3);
  doc.line(margin, footY - 4, pageW - margin, footY - 4);
  doc.setFontSize(7);
  doc.setFont("helvetica", "normal");
  doc.setTextColor(140, 140, 140);
  doc.text(
    "Medina Almonte — Lawyers Firm  |  contacto@medinaalmonte.com  |  +51 977 186 734  |  Lima, Perú",
    pageW / 2,
    footY,
    { align: "center" }
  );
  doc.text(
    "Documento generado electrónicamente. Conforme a la normativa de protección al consumidor peruana.",
    pageW / 2,
    footY + 4,
    { align: "center" }
  );

  doc.save(`Hoja-de-Reclamacion-${ficha}.pdf`);
}

/* ═══════════════════════════════════════════════════════════════
   COMPONENT
   ═══════════════════════════════════════════════════════════════ */
export function LibroDeReclamacionesClient() {
  const [form, setForm] = useState<FormData>(INITIAL_FORM);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [submitted, setSubmitted] = useState(false);
  const [fichaNum, setFichaNum] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  function updateField(field: keyof FormData, value: string | boolean) {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  }

  function validate(): boolean {
    const e: Partial<Record<keyof FormData, string>> = {};
    if (!form.nombres.trim()) e.nombres = "Ingrese su nombre completo";
    if (!form.dni.trim()) e.dni = "Ingrese su DNI";
    else if (!/^\d{8}$/.test(form.dni.trim())) e.dni = "DNI debe tener 8 dígitos";
    if (!form.direccion.trim()) e.direccion = "Ingrese su dirección";
    if (!form.telefono.trim()) e.telefono = "Ingrese su teléfono";
    if (!form.bienContratado.trim()) e.bienContratado = "Describa el bien o servicio";
    if (!form.descripcion.trim()) e.descripcion = "Describa su reclamo o queja";
    if (!form.pedido.trim()) e.pedido = "Indique qué solución espera";
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Email inválido";
    if (form.menorEdad && !form.apoderado.trim()) e.apoderado = "Ingrese nombre del apoderado";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    const ficha = generateFichaNumber();
    setFichaNum(ficha);
    setSubmitted(true);
    generatePDF(form, ficha);
  }

  function handleReset() {
    setForm(INITIAL_FORM);
    setErrors({});
    setSubmitted(false);
    setFichaNum("");
  }

  /* ─── Input Field Component ─── */
  function Field({
    label,
    field,
    type = "text",
    placeholder,
    required,
    icon: Icon,
    colSpan,
  }: {
    label: string;
    field: keyof FormData;
    type?: string;
    placeholder?: string;
    required?: boolean;
    icon: React.ElementType;
    colSpan?: string;
  }) {
    return (
      <div className={colSpan || ""}>
        <label className="block text-white/70 text-sm font-medium mb-1.5">
          {label} {required && <span className="text-[#D4AF37]">*</span>}
        </label>
        <div className="relative">
          <Icon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
          <input
            type={type}
            value={String(form[field])}
            onChange={(e) => updateField(field, e.target.value)}
            placeholder={placeholder}
            className={`w-full bg-white/[0.04] border ${
              errors[field] ? "border-red-500/60" : "border-white/[0.08]"
            } rounded-lg pl-10 pr-4 py-3 text-white text-sm placeholder:text-white/25 focus:outline-none focus:border-[#D4AF37]/50 focus:ring-1 focus:ring-[#D4AF37]/20 transition-colors`}
          />
        </div>
        {errors[field] && (
          <p className="text-red-400 text-xs mt-1 flex items-center gap-1">
            <AlertTriangle className="w-3 h-3" /> {errors[field]}
          </p>
        )}
      </div>
    );
  }

  /* ═══════════════════════════════════════════════════════════════
     RENDER
     ═══════════════════════════════════════════════════════════════ */
  return (
    <SiteLayout>
      <section className="section-dark-gradient min-h-screen py-24 px-4">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-14">
            <ScrollReveal>
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[#D4AF37]/10 mb-6">
                <FileText className="w-8 h-8 text-[#D4AF37]" />
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h1
                className="immersive-title font-bold mb-4"
                style={{
                  color: "#D4AF37",
                  fontFamily: "var(--font-playfair), serif",
                }}
              >
                Libro de Reclamaciones
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <div className="section-divider-gold mb-6" />
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="text-gray-400 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
                Conforme al Código de Protección y Defensa del Consumidor
                (Ley N° 29571) y su Reglamento aprobado por D.S. N°
                011-2011-PCM. Ejerce tu derecho a presentar quejas o
                reclamos de forma segura y documentada.
              </p>
            </ScrollReveal>
          </div>

          {/* Legal info banner */}
          <ScrollReveal delay={0.25}>
            <div
              className="rounded-xl p-4 sm:p-5 mb-10 border border-[#D4AF37]/15"
              style={{ background: "rgba(212,175,55,0.04)" }}
            >
              <div className="flex items-start gap-3">
                <Info className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                <div className="text-sm text-white/60 leading-relaxed">
                  <p className="text-white/80 font-medium mb-1">
                    Información Legal (Art. 24 del Reglamento)
                  </p>
                  <p>
                    <strong>Queja:</strong> Malestar, decepción o inconformidad
                    no relacionada con los productos o servicios.{" "}
                    <strong>Reclamo:</strong> Disconformidad relacionada con los
                    productos o servicios prestados. La respuesta se dará en un
                    plazo no mayor de 30 días hábiles.
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* ─── SUCCESS STATE ─── */}
          {submitted ? (
            <ScrollReveal>
              <div className="rounded-2xl p-8 sm:p-10 text-center border border-[#D4AF37]/20"
                style={{ background: "rgba(212,175,55,0.05)" }}
              >
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[#D4AF37]/10 mb-6">
                  <CheckCircle2 className="w-10 h-10 text-[#D4AF37]" />
                </div>
                <h2
                  className="text-2xl sm:text-3xl font-bold text-white mb-3"
                  style={{ fontFamily: "var(--font-playfair), serif" }}
                >
                  Reclamo Registrado
                </h2>
                <p className="text-white/50 text-sm mb-2">
                  Número de Ficha
                </p>
                <p
                  className="text-3xl sm:text-4xl font-bold mb-6"
                  style={{
                    background: "linear-gradient(135deg, #c9a961, #d4af37)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    fontFamily: "var(--font-playfair), serif",
                  }}
                >
                  {fichaNum}
                </p>
                <p className="text-gray-400 text-sm leading-relaxed mb-8 max-w-md mx-auto">
                  Su hoja de reclamaciones ha sido descargada automáticamente
                  en formato PDF. Guarde este documento como comprobante. Nuestro
                  equipo se pondrá en contacto con usted en un plazo máximo de 30
                  días hábiles.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                  <button
                    onClick={() => generatePDF(form, fichaNum)}
                    className="btn-gold-primary inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold gpu-accelerated"
                  >
                    <Download className="w-4 h-4" />
                    Descargar PDF
                  </button>
                  <button
                    onClick={handleReset}
                    className="btn-gold-outline inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold gpu-accelerated"
                  >
                    Presentar Otro Reclamo
                  </button>
                </div>
              </div>
            </ScrollReveal>
          ) : (
            /* ─── FORM ─── */
            <ScrollReveal delay={0.3}>
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="space-y-8"
              >
                {/* Tipo de Reclamo */}
                <div>
                  <label className="block text-white/70 text-sm font-medium mb-3">
                    Tipo de Acción <span className="text-[#D4AF37]">*</span>
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {(
                      [
                        {
                          value: "reclamo",
                          label: "Reclamo",
                          desc: "Disconformidad con producto o servicio",
                          icon: MessageSquare,
                        },
                        {
                          value: "queja",
                          label: "Queja",
                          desc: "Malestar o decepción general",
                          icon: AlertTriangle,
                        },
                      ] as const
                    ).map((opt) => {
                      const Icon = opt.icon;
                      const isActive = form.tipo === opt.value;
                      return (
                        <button
                          key={opt.value}
                          type="button"
                          onClick={() => updateField("tipo", opt.value)}
                          className={`relative p-4 rounded-xl border text-left transition-all duration-300 gpu-accelerated ${
                            isActive
                              ? "border-[#D4AF37]/50 bg-[#D4AF37]/10"
                              : "border-white/[0.08] bg-white/[0.02] hover:border-white/[0.15]"
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <Icon
                              className={`w-5 h-5 ${isActive ? "text-[#D4AF37]" : "text-white/30"}`}
                            />
                            <div>
                              <p
                                className={`font-semibold text-sm ${isActive ? "text-[#D4AF37]" : "text-white/70"}`}
                              >
                                {opt.label}
                              </p>
                              <p className="text-white/40 text-xs mt-0.5">
                                {opt.desc}
                              </p>
                            </div>
                          </div>
                          {isActive && (
                            <div
                              className="absolute top-2 right-2 w-3 h-3 rounded-full"
                              style={{
                                background: "linear-gradient(135deg, #D4AF37, #a08520)",
                                boxShadow: "0 0 8px rgba(212,175,55,0.4)",
                              }}
                            />
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <hr className="subtle-divider" />

                {/* 1. Datos del Consumidor */}
                <div>
                  <h3 className="flex items-center gap-2 text-white font-bold text-base mb-5" style={{ fontFamily: "var(--font-playfair), serif" }}>
                    <User className="w-4 h-4 text-[#D4AF37]" />
                    1. Datos del Consumidor
                  </h3>
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <Field label="Nombre y Apellidos" field="nombres" placeholder="Ej: Juan Pérez López" required icon={User} />
                      <Field label="DNI / Carnet de Extranjería" field="dni" placeholder="Ej: 12345678" required icon={Shield} />
                    </div>
                    <Field label="Dirección" field="direccion" placeholder="Ej: Av. Arequipa 1234, Lima" required icon={MapPin} />
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <Field label="Departamento" field="departamento" placeholder="Ej: Lima" icon={Building2} />
                      <Field label="Provincia" field="provincia" placeholder="Ej: Lima" icon={Building2} />
                      <Field label="Distrito" field="distrito" placeholder="Ej: Miraflores" icon={Building2} />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <Field label="Teléfono" field="telefono" placeholder="Ej: 987654321" required icon={Phone} />
                      <Field label="Correo Electrónico" field="email" placeholder="Ej: correo@ejemplo.com" icon={Mail} />
                    </div>

                    {/* Menor de edad toggle */}
                    <div className="flex items-center gap-3 pt-1">
                      <button
                        type="button"
                        onClick={() => updateField("menorEdad", !form.menorEdad)}
                        className={`relative w-11 h-6 rounded-full transition-colors duration-300 ${form.menorEdad ? "bg-[#D4AF37]" : "bg-white/15"}`}
                      >
                        <div
                          className={`absolute top-0.5 w-5 h-5 rounded-full bg-white shadow transition-transform duration-300 ${form.menorEdad ? "translate-x-5.5 left-0.5" : "left-0.5"}`}
                        />
                      </button>
                      <span className="text-white/60 text-sm">
                        Soy menor de edad (se requiere apoderado)
                      </span>
                    </div>

                    {form.menorEdad && (
                      <Field
                        label="Nombre del Apoderado"
                        field="apoderado"
                        placeholder="Nombre completo del apoderado legal"
                        required
                        icon={User}
                      />
                    )}
                  </div>
                </div>

                <hr className="subtle-divider" />

                {/* 2. Identificación del Bien / Servicio */}
                <div>
                  <h3 className="flex items-center gap-2 text-white font-bold text-base mb-5" style={{ fontFamily: "var(--font-playfair), serif" }}>
                    <Building2 className="w-4 h-4 text-[#D4AF37]" />
                    2. Identificación del Bien Contratado / Servicio
                  </h3>
                  <Field label="Bien o Servicio" field="bienContratado" placeholder="Describa el servicio legal contratado (ej: Asesoría en derecho penal, representación en proceso civil...)" required icon={FileText} />
                </div>

                <hr className="subtle-divider" />

                {/* 3. Descripción */}
                <div>
                  <h3 className="flex items-center gap-2 text-white font-bold text-base mb-5" style={{ fontFamily: "var(--font-playfair), serif" }}>
                    <MessageSquare className="w-4 h-4 text-[#D4AF37]" />
                    3. Descripción del Reclamo o Queja
                  </h3>
                  <div>
                    <div className="relative">
                      <MessageSquare className="absolute left-3 top-3 w-4 h-4 text-white/30" />
                      <textarea
                        value={form.descripcion}
                        onChange={(e) => updateField("descripcion", e.target.value)}
                        placeholder="Describa detalladamente los hechos que motivan su reclamo o queja. Incluya fechas, nombres y cualquier información relevante..."
                        rows={5}
                        className={`w-full bg-white/[0.04] border ${
                          errors.descripcion ? "border-red-500/60" : "border-white/[0.08]"
                        } rounded-lg pl-10 pr-4 py-3 text-white text-sm placeholder:text-white/25 focus:outline-none focus:border-[#D4AF37]/50 focus:ring-1 focus:ring-[#D4AF37]/20 transition-colors resize-y min-h-[120px]`}
                      />
                    </div>
                    {errors.descripcion && (
                      <p className="text-red-400 text-xs mt-1 flex items-center gap-1">
                        <AlertTriangle className="w-3 h-3" /> {errors.descripcion}
                      </p>
                    )}
                  </div>
                </div>

                <hr className="subtle-divider" />

                {/* 4. Pedido */}
                <div>
                  <h3 className="flex items-center gap-2 text-white font-bold text-base mb-5" style={{ fontFamily: "var(--font-playfair), serif" }}>
                    <Shield className="w-4 h-4 text-[#D4AF37]" />
                    4. Pedido del Consumidor
                  </h3>
                  <div>
                    <div className="relative">
                      <Shield className="absolute left-3 top-3 w-4 h-4 text-white/30" />
                      <textarea
                        value={form.pedido}
                        onChange={(e) => updateField("pedido", e.target.value)}
                        placeholder="Indique qué solución o respuesta espera de nuestra firma legal..."
                        rows={3}
                        className={`w-full bg-white/[0.04] border ${
                          errors.pedido ? "border-red-500/60" : "border-white/[0.08]"
                        } rounded-lg pl-10 pr-4 py-3 text-white text-sm placeholder:text-white/25 focus:outline-none focus:border-[#D4AF37]/50 focus:ring-1 focus:ring-[#D4AF37]/20 transition-colors resize-y min-h-[80px]`}
                      />
                    </div>
                    {errors.pedido && (
                      <p className="text-red-400 text-xs mt-1 flex items-center gap-1">
                        <AlertTriangle className="w-3 h-3" /> {errors.pedido}
                      </p>
                    )}
                  </div>
                </div>

                {/* Date (auto-filled) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Field label="Fecha" field="fecha" type="date" icon={Calendar} />
                  <div className="flex items-end">
                    <p className="text-white/30 text-xs pb-3">
                      * Campos obligatorios. Conforme al Art. 24 del Reglamento
                      de la Ley N° 29571.
                    </p>
                  </div>
                </div>

                {/* Submit */}
                <div className="pt-4">
                  <button
                    type="submit"
                    className="btn-gold-primary w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-10 py-4 rounded-xl text-base font-bold gpu-accelerated"
                  >
                    <FileText className="w-5 h-5" />
                    Registrar y Descargar PDF
                  </button>
                </div>
              </form>
            </ScrollReveal>
          )}

          {/* Provider info */}
          <ScrollReveal delay={0.35}>
            <div className="mt-16 text-center">
              <hr className="subtle-divider mb-8" />
              <p className="text-white/40 text-sm font-medium mb-1">
                PROVEEDOR
              </p>
              <p className="text-white/70 text-base font-semibold">
                Medina Almonte — Lawyers Firm
              </p>
              <p className="text-white/40 text-sm mt-1">
                RUC: Pendiente de Inscripción
              </p>
              <p className="text-white/40 text-sm">
                contacto@medinaalmonte.com | +51 977 186 734
              </p>
              <p className="text-white/40 text-sm">
                Lima, Perú
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </SiteLayout>
  );
}