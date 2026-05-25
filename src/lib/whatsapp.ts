import { create } from "zustand";

export interface Service {
  id: number;
  name: string;
  price: string;
  priceNum: number;
}

export const services: Service[] = [
  { id: 1, name: "Constitución SAC", price: "S/ 1,600", priceNum: 1600 },
  { id: 2, name: "Constitución EIRL", price: "S/ 1,600", priceNum: 1600 },
  { id: 3, name: "Constitución SRL", price: "S/ 1,600", priceNum: 1600 },
  { id: 4, name: "Contabilidad Integral (mensual)", price: "Desde S/ 350", priceNum: 350 },
  { id: 5, name: "Asesoría Tributaria - Cartas Inductivas", price: "Desde S/ 200", priceNum: 200 },
  { id: 6, name: "Asesoría Tributaria - Fiscalización", price: "Consultar", priceNum: 0 },
  { id: 7, name: "Cobranza Coactiva", price: "Consultar", priceNum: 0 },
  { id: 8, name: "Planilla y Laboral (mensual)", price: "Desde S/ 250", priceNum: 250 },
  { id: 9, name: "Asesoría Inversionista", price: "Consultar", priceNum: 0 },
  { id: 10, name: "Capacitación Tributaria", price: "Gratis", priceNum: 0 },
  { id: 11, name: "Carta Incremento Patrimonial No Justificado", price: "Consultar", priceNum: 0 },
];

interface WhatsAppState {
  isOpen: boolean;
  selectedServiceId: number | null;
  openModal: (serviceId?: number) => void;
  closeModal: () => void;
}

export const useWhatsAppStore = create<WhatsAppState>((set) => ({
  isOpen: false,
  selectedServiceId: null,
  openModal: (serviceId) =>
    set({ isOpen: true, selectedServiceId: serviceId ?? null }),
  closeModal: () =>
    set({ isOpen: false, selectedServiceId: null }),
}));

export function generateWhatsAppURL(
  serviceName: string,
  servicePrice: string,
  name: string,
  notes: string
): string {
  const message = `Hola *Jhon&Asociados*.

Servicio: ${serviceName}
Precio referencial: ${servicePrice}
Nombre: ${name}
Consulta: ${notes}`;

  const encodedMessage = encodeURIComponent(message);
  return `https://api.whatsapp.com/send?phone=51943366950&text=${encodedMessage}`;
}
