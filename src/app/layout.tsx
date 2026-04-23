import type { Metadata } from "next";
import { faqData } from "@/src/data/faqData";
import {
  Plus_Jakarta_Sans,
  Noto_Serif,
  DM_Serif_Display,
  Alex_Brush,
} from "next/font/google";
import "@/src/styles/globals.css";
import ToasterWrapper from "@/src/components/ToasterWrapper";

// --- CONFIGURAÇÃO DAS FONTES ---
const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const noto = Noto_Serif({
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "700"],
  variable: "--font-serif",
});

const dmSerif = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const alexBrush = Alex_Brush({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-hand",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://selmabolos.com.br";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Selma Bolos | Bolos Artesanais em Várzea Paulista e Jundiaí",
  description:
    "Bolos artesanais decorados para festas e eventos. Sabores exclusivos, ingredientes selecionados e muito amor em cada fatia.",
  keywords: [
    "bolos artesanais",
    "confeitaria",
    "bolos decorados",
    "Várzea Paulista",
    "Jundiaí",
    "bolo de festa",
    "bolo trufado",
    "bolo temático",
    "encomenda de bolo",
  ],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteUrl,
    siteName: "Selma Bolos",
    title: "Selma Bolos | Bolos Artesanais em Várzea Paulista e Jundiaí",
    description:
      "Bolos artesanais decorados para festas e eventos. Sabores exclusivos, ingredientes selecionados e muito amor em cada fatia.",
    images: [
      {
        url: "/images/hero/hero.webp",
        width: 1200,
        height: 630,
        alt: "Bolos artesanais Selma Bolos",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Selma Bolos | Bolos Artesanais em Várzea Paulista e Jundiaí",
    description:
      "Bolos artesanais decorados para festas e eventos. Sabores exclusivos, ingredientes selecionados e muito amor em cada fatia.",
    images: ["/images/hero/hero.webp"],
  },
  alternates: {
    canonical: siteUrl,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const bakeryJsonLd = {
    "@context": "https://schema.org",
    "@type": "Bakery",
    name: "Selma Bolos",
    image: `${siteUrl}/images/hero/hero.webp`,
    logo: `${siteUrl}/icon.png`,
    description:
      "Confeitaria artesanal em Várzea Paulista especializada em bolos decorados, trufados e de leite ninho.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Rua Tanque Velho, 55",
      addressLocality: "Várzea Paulista",
      addressRegion: "SP",
      postalCode: "13225-535",
      addressCountry: "BR",
    },
    telephone: "+5511973879147",
    priceRange: "$$",
    servesCuisine: "Confeitaria",
    currenciesAccepted: "BRL",
    paymentAccepted: "PIX, Cartão de Crédito, Cartão de Débito",
    areaServed: ["Várzea Paulista", "Jundiaí", "Campo Limpo Paulista"],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Friday", "Saturday", "Sunday"],
        opens: "09:00",
        closes: "18:00",
      },
    ],
    sameAs: ["https://www.instagram.com/selmabolos._"],
    url: siteUrl,
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqData.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  };

  return (
    <html
      lang="pt-BR"
      // Aqui inserimos TODAS as variáveis de fonte para o Tailwind enxergar
      className={`${jakarta.variable} ${noto.variable} ${dmSerif.variable} ${alexBrush.variable} scroll-smooth`}
      data-variation="aconchegante"
      data-palette="blush-cacao"
      data-density="comfortable"
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(bakeryJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      </head>
      <body className="bg-bg text-ink font-sans selection:bg-primary selection:text-primary-ink min-h-screen antialiased">
        <ToasterWrapper />
        {children}
      </body>
    </html>
  );
}
