"use client";

import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Constitution } from "@/components/Constitution";
import { Accounting } from "@/components/Accounting";
import { TaxDefense } from "@/components/TaxDefense";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { WhatsAppModal } from "@/components/WhatsAppModal";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <Services />
        <Constitution />
        <Accounting />
        <TaxDefense />
        <About />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
      <WhatsAppModal />
    </div>
  );
}
