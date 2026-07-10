import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Preloader } from "@/components/Preloader";
import { Oswald } from "next/font/google";

// Oswald — condensada gótica, idéntica a News Gothic BT, misma que villamares.com.pe
const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://medinaalmonte.com"),
  title: "Medina Almonte Firma Legal | Abogados Corporativos y Tributarios",
  description:
    "Especialistas en Derecho Corporativo, Laboral, Tributario, Civil y Penal. Confianza y autoridad legal en Perú.",
  keywords: [
    "abogados",
    "firma legal",
    "derecho corporativo",
    "tributario",
    "Medina Almonte",
    "derecho civil",
    "derecho penal",
    "derecho laboral",
    "Perú",
  ],
  authors: [{ name: "Medina Almonte Firma Legal" }],
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
    title: "Medina Almonte Firma Legal | Abogados Corporativos y Tributarios en Perú",
    description:
      "Especialistas en Derecho Corporativo, Laboral, Tributario, Civil y Penal. Confianza y autoridad legal en Perú.",
    type: "website",
    locale: "es_PE",
    siteName: "Medina Almonte Firma Legal",
    url: "https://medinaalmonte.com",
    images: [
      {
        url: "/og-banner-jhon.png?v=2.1",
        width: 1200,
        height: 630,
        alt: "Medina Almonte Firma Legal - Abogados Corporativos y Tributarios en Perú",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Medina Almonte Firma Legal | Abogados Corporativos y Tributarios",
    description:
      "Especialistas en Derecho Corporativo, Laboral, Tributario, Civil y Penal. Confianza y autoridad legal en Perú.",
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
      <body className={`${oswald.variable} antialiased bg-background text-foreground`}>
        <Preloader />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
