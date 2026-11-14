import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Pontual Informática | Cartelas personalizadas de Bingo e Rifa",
  description:
    "Solicite cartelas personalizadas de bingos e rifas. Qualidade, praticidade e design profissional para o seu evento!",
  keywords: [
    "cartelas de bingo personalizadas",
    "bingo personalizado",
    "cartelas de rifa personalizadas",
    "rifa personalizada",
    "cartelas com QR Code",
    "Pontual Informática",
  ],
  icons: {
    icon: "/pontual-icon.svg",
  },
  openGraph: {
    title: "Pontual Informática | Cartelas personalizadas de Bingo e Rifa",
    description:
      "Solicite cartelas personalizadas de bingos e rifas. Qualidade, praticidade e design profissional para o seu evento!",
    siteName: "Pontual Informática",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${poppins.variable} font-sans antialiased bg-white text-brand-navy`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
