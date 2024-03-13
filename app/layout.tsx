import type { Metadata } from "next";
import { Manrope, Poppins } from "next/font/google";

import "@/app/globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
  adjustFontFallback: false,
});
const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-manrope",
  display: "swap",
  adjustFontFallback: false,
});

export const metadata: Metadata = {
  title: "Hanazaki Studio",
  description:
    "A Hanazaki Studio oferece soluções personalizadas em visualização arquitetônica, buscando atender às necessidades específicas de cada cliente para impulsionar vendas e alcançar metas empresariais. Conheça as oportunidades para potencializar seu empreendimento.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${poppins.variable} ${manrope.variable} bg-gray-primary overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
