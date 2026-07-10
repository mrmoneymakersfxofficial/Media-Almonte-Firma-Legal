import { create } from "zustand";

export interface Service {
  id: number;
  name: string;
  price: string;
  priceNum: number;
}

export const services: Service[] = [
  { id: 1, name: "Derecho Civil", price: "Consultar", priceNum: 0 },
  { id: 2, name: "Derecho Penal", price: "Consultar", priceNum: 0 },
  { id: 3, name: "Derecho Laboral", price: "Consultar", priceNum: 0 },
  { id: 4, name: "Derecho Corporativo", price: "Consultar", priceNum: 0 },
  { id: 5, name: "Derecho de Familia", price: "Consultar", priceNum: 0 },
  { id: 6, name: "Consulta Legal Inicial", price: "Gratis", priceNum: 0 },
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
  const message = `Hola *Medina Almonte Firma Legal*.

Servicio: ${serviceName}
Nombre: ${name}
Consulta: ${notes}`;

  const encodedMessage = encodeURIComponent(message);
  return `https://api.whatsapp.com/send?phone=51943366950&text=${encodedMessage}`;
}