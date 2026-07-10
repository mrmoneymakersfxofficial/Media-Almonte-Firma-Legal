import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Preloader } from "@/components/Preloader";
import { Playfair_Display, Inter, Merriweather } from "next/font/google";

// Fuentes Medina Almonte Firma Legal
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair', display: 'swap' });
const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });
const merriweather = Merriweather({ weight: ['300', '400', '700'], subsets: ['latin'], variable: '--font-merriweather', display: 'swap' });

export const metadata: Metadata = {
  metadataBase: new URL("https://medinaalmonte.com"),
  title: "Medina Almonte Firma Legal | Abogados Corporativos, Civiles, Penales y Laborales en Perú",
  description:
    "Defensa legal estratégica en Derecho Civil, Penal, Laboral, Corporativo y Familiar. Protegemos tus derechos con excelencia y resultados comprobados.",
  keywords: [
    "abogados",
    "firma legal",
    "derecho civil",
    "derecho penal",
    "derecho laboral",
    "derecho corporativo",
    "derecho de familia",
    "Medina Almonte",
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
    title: "Medina Almonte Firma Legal | Abogados Corporativos, Civiles, Penales y Laborales en Perú",
    description:
      "Defensa legal estratégica en Derecho Civil, Penal, Laboral, Corporativo y Familiar. Protegemos tus derechos con excelencia y resultados comprobados.",
    type: "website",
    locale: "es_PE",
    siteName: "Medina Almonte Firma Legal",
    url: "https://medinaalmonte.com",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Medina Almonte Firma Legal - Abogados en Perú",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Medina Almonte Firma Legal | Abogados en Perú",
    description:
      "Defensa legal estratégica en Derecho Civil, Penal, Laboral, Corporativo y Familiar. Protegemos tus derechos con excelencia y resultados comprobados.",
    images: ["/og-image.png"],
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
      <body className={`${playfair.variable} ${inter.variable} ${merriweather.variable} antialiased bg-background text-foreground`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LegalService",
              "name": "Medina Almonte Firma Legal",
              "url": "https://medinaalmonte.com",
              "logo": "https://medinaalmonte.com/logo.svg",
              "description": "Defensa legal estratégica en Derecho Civil, Penal, Laboral, Corporativo y Familiar en Perú.",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Lima",
                "addressCountry": "PE"
              },
              "telephone": "+51943366950",
              "email": "contacto@medinaalmonte.com",
              "priceRange": "$$",
              "areaServed": "Perú",
              "serviceType": [
                "Derecho Civil",
                "Derecho Penal",
                "Derecho Laboral",
                "Derecho Corporativo",
                "Derecho de Familia"
              ]
            })
          }}
        />
        <Preloader />
        <SpeedInsights />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
