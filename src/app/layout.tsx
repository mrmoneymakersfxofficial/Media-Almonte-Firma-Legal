import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://jhonyasociados.com"),
  title: "Jhon & Asociados | Especialistas Tributarios - Asesoría Contable y Defensa ante SUNAT en Perú",
  description:
    "Jhon & Asociados: Especialistas en asesoría tributaria, contabilidad integral, constitución de empresas y defensa ante fiscalizaciones de SUNAT. Más de 500 empresas confían en nosotros. Consultoría gratuita.",
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
  authors: [{ name: "Jhon & Asociados" }],
  icons: {
    icon: [
      { url: "/favicon-isologo.png", sizes: "512x512", type: "image/png" },
      { url: "/favicon-isologo-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-isologo-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/favicon-isologo-192x192.png",
  },
  openGraph: {
    title: "Jhon & Asociados | Especialistas Tributarios",
    description:
      "Protege tu patrimonio con los mejores especialistas tributarios del Perú. Constitución, contabilidad y defensa ante SUNAT.",
    type: "website",
    locale: "es_PE",
    siteName: "Jhon & Asociados",
    images: [
      {
        url: "/logo.png",
        width: 1600,
        height: 764,
        alt: "Jhon & Asociados - Especialistas Tributarios",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jhon & Asociados | Especialistas Tributarios",
    description:
      "Protege tu patrimonio. Nosotros nos encargamos de SUNAT. Consultoría gratuita.",
    images: ["/logo.png"],
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
        {children}
        <Toaster />
      </body>
    </html>
  );
}
