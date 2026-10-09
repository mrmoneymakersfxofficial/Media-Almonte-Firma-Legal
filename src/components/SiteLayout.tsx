"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { WhatsAppModal } from "@/components/WhatsAppModal";
import { ScrollProgress } from "@/components/ScrollProgress";
import type { SiteSettings } from "@/sanity/types";

export function SiteLayout({
  children,
  siteSettings,
}: {
  children: React.ReactNode;
  siteSettings?: SiteSettings;
}) {
  return (
    <div className="min-h-screen flex flex-col bg-[#0F0F0F]">
      <ScrollProgress />
      <Header siteSettings={siteSettings} />
      <main className="flex-1">{children}</main>
      <Footer siteSettings={siteSettings} />
      <WhatsAppButton />
      <WhatsAppModal />
    </div>
  );
}
