import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Noto_Serif } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
});
const noto = Noto_Serif({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-noto",
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
    image: "https://selmabolos.com.br/images/hero/hero.webp", 
    description:
      "Confeitaria artesanal em Várzea Paulista especializada em bolos decorados, trufados e de leite ninho.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Rua Jataí, 55",
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
    url: "https://selmabolos.com.br", 
  };

  return (
    <html
      lang="pt-BR"
      className={`${jakarta.variable} ${noto.variable} scroll-smooth`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-background text-on-surface font-sans selection:bg-primary-container selection:text-on-primary-container min-h-screen antialiased">
        {children}
      </body>
    </html>
  );
}
