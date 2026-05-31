import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Preloader } from "@/components/Preloader";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://jhonyasociados.com"),
  title: "Jhon&Asociados | Especialistas Tributarios - Asesoría Contable y Defensa ante SUNAT en Perú",
  description:
    "Jhon&Asociados: Especialistas en asesoría tributaria, contabilidad integral, constitución de empresas y defensa ante fiscalizaciones de SUNAT. Más de 500 empresas confían en nosotros. Consultoría gratuita.",
  keywords: [
    "asesoría tributaria Perú",
    "contabilidad Lima",
    "defensa SUNAT",
    "constitución de empresas",
    "Jhon y Asociados",
    "SUNAT",
    "tercerización contable",
    "fiscalización tributaria",
    "planillas Perú",
    "cartas inductivas SUNAT",
    "cobranza coactiva",
  ],
  authors: [{ name: "Jhon&Asociados" }],
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48" },
      { url: "/favicon-isologo.png", sizes: "512x512", type: "image/png" },
      { url: "/favicon-isologo-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-isologo-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Jhon&Asociados | Especialistas Tributarios y Contables en Perú",
    description:
      "Protege tu patrimonio frente a la SUNAT. Contabilidad integral, constitución de empresas y defensa urgente ante fiscalizaciones. Más de 20 años de experiencia. Consultoría gratuita.",
    type: "website",
    locale: "es_PE",
    siteName: "Jhon&Asociados",
    url: "https://jhonyasociados.com",
    images: [
      {
        url: "/og-banner-jhon.png?v=2.1",
        width: 1200,
        height: 630,
        alt: "Jhon&Asociados - Especialistas Tributarios y Contables en Perú",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jhon&Asociados | Especialistas Tributarios",
    description:
      "Asesoría contable integral y defensa urgente ante SUNAT en el Perú. Protegemos el crecimiento de tu empresa con más de 20 años de experiencia.",
    images: ["/og-banner-jhon.png?v=2.1"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${inter.variable} antialiased bg-background text-foreground`}>
        <Preloader />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
