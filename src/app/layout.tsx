import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Noto_Serif } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-jakarta" });
const noto = Noto_Serif({ subsets: ["latin"], style: ["normal", "italic"], variable: "--font-noto" });

export const metadata: Metadata = {
  title: "Selma Bolos | Bolos Artesanais em Várzea Paulista e Jundiaí",
  description: "Bolos sob encomenda e artesanais. Transformamos momentos em memórias com o melhor sabor.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${jakarta.variable} ${noto.variable} scroll-smooth`}>
      <body className="bg-background text-on-surface font-sans selection:bg-primary-container selection:text-on-primary-container min-h-screen antialiased">
        {children}
      </body>
    </html>
  );
}