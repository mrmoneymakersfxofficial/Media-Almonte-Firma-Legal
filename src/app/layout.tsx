import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Preloader } from "@/components/Preloader";
import { Playfair_Display, Inter, Merriweather } from "next/font/google";
import { VisualEditing } from "@/components/cms/VisualEditing";
import { SanityLiveWithToken } from "@/components/SanityLiveWithToken";

// Fuentes MEDINA ALMONTE — Lawyers Firm
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair', display: 'swap' });
const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });
const merriweather = Merriweather({ weight: ['300', '400', '700'], subsets: ['latin'], variable: '--font-merriweather', display: 'swap' });

export const metadata: Metadata = {
  metadataBase: new URL("https://medinaalmontelawyers.com"),
  title: "MEDINA ALMONTE — Lawyers Firm | Abogados Civiles, Penales y de Familia en Perú",
  description:
    "Defensa legal estratégica en Derecho Civil, Penal y de Familia. Protegemos tus derechos con excelencia y resultados comprobados.",
  keywords: [
    "abogados",
    "lawyers firm",
    "derecho civil",
    "derecho penal",
    "derecho de familia",
    "Medina Almonte",
  ],
  authors: [{ name: "MEDINA ALMONTE — Lawyers Firm" }],
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
    title: "MEDINA ALMONTE — Lawyers Firm | Abogados Civiles, Penales y de Familia en Perú",
    description:
      "Defensa legal estratégica en Derecho Civil, Penal y de Familia. Protegemos tus derechos con excelencia y resultados comprobados.",
    type: "website",
    locale: "es_PE",
    siteName: "MEDINA ALMONTE — Lawyers Firm",
    url: "https://medinaalmontelawyers.com",
    images: [
      {
        url: "https://medinaalmontelawyers.com/og-image.jpg",
        secureUrl: "https://medinaalmontelawyers.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "MEDINA ALMONTE — Lawyers Firm | Abogados en Perú",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MEDINA ALMONTE — Lawyers Firm | Abogados en Perú",
    description:
      "Defensa legal estratégica en Derecho Civil, Penal y de Familia. Protegemos tus derechos con excelencia y resultados comprobados.",
    images: ["https://medinaalmontelawyers.com/og-image.jpg"],
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
              "name": "MEDINA ALMONTE — Lawyers Firm",
              "url": "https://medinaalmontelawyers.com",
              "logo": "https://medinaalmontelawyers.com/logo.svg",
              "description": "Defensa legal estratégica en Derecho Civil, Penal y de Familia en Perú.",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Lima",
                "addressCountry": "PE"
              },
              "telephone": "+51977186734",
              "email": "firmalegalmedinaalmonte@gmail.com",
              "priceRange": "$$",
              "areaServed": "Perú",
              "serviceType": [
                "Derecho Civil",
                "Derecho Penal",
                "Derecho de Familia"
              ]
            })
          }}
        />
        <Preloader />
        <SpeedInsights />
        {children}
        <Toaster />
        <VisualEditing />
        <SanityLiveWithToken includeDrafts={true} />
      </body>
    </html>
  );
}
