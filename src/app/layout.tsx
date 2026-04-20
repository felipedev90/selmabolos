import type { Metadata } from "next";
import { Toaster } from "sonner";
import {
  Plus_Jakarta_Sans,
  Noto_Serif,
  DM_Serif_Display,
  Alex_Brush,
} from "next/font/google";
import "@/src/styles/globals.css";

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
});

const alexBrush = Alex_Brush({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-hand",
});

export const metadata: Metadata = {
  title: "Selma Bolos | Bolos Artesanais em Várzea Paulista e Jundiaí",
  description:
    "Bolos artesanais decorados para festas e eventos. Sabores exclusivos, ingredientes selecionados e muito amor em cada fatia.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Bakery",
    name: "Selma Bolos",
    image: `${process.env.NEXT_PUBLIC_SITE_URL}/images/hero/hero.webp`,
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
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Friday", "Saturday", "Sunday"],
        opens: "09:00",
        closes: "18:00",
      },
    ],
    url: process.env.NEXT_PUBLIC_SITE_URL,
  };

  return (
    <html
      lang="pt-BR"
      // Aqui inserimos TODAS as variáveis de fonte para o Tailwind enxergar
      className={`${jakarta.variable} ${noto.variable} ${dmSerif.variable} ${alexBrush.variable}`}
      data-variation="aconchegante"
      data-palette="blush-cacao"
      data-density="comfortable"
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-bg text-ink font-sans selection:bg-primary selection:text-primary-ink min-h-screen antialiased">
        <Toaster position="bottom-center" richColors />
        {children}
      </body>
    </html>
  );
}
