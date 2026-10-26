import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { ScrollReveals } from "@/components/scroll-reveals";

export const metadata: Metadata = {
  title: "Lidia Gandia — Product Designer",
  description: "Portfolio de Lidia Gandia, diseñadora de producto. Proyectos Aura Wood y EcoFlex Jar.",
  openGraph: {
    title: "Lidia Gandia — Product Designer",
    description: "Diseño de producto, desarrollo conceptual e investigación de materiales.",
    type: "website",
    locale: "es_ES",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" data-scroll-behavior="smooth">
      <body><SiteHeader /><ScrollReveals />{children}</body>
    </html>
  );
}