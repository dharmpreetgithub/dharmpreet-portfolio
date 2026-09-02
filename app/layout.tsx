import type { Metadata } from "next";
import type { ReactNode } from "react";
import {
  Bricolage_Grotesque,
  Instrument_Sans,
  JetBrains_Mono,
} from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const display = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700", "800"],
});

const body = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600"],
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Dharmpreet — Computer Engineer, AI/ML & Software Engineering",
  description:
    "Dharmpreet builds intelligent systems and scalable software — agentic RAG, multimodal deep learning, and backend engineering.",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "Dharmpreet — Computer Engineer, AI/ML & Software Engineering",
    description:
      "Dharmpreet builds intelligent systems and scalable software — agentic RAG, multimodal deep learning, and backend engineering.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} ${mono.variable}`}
    >
      <body className="bg-ink text-body font-body antialiased selection:bg-accent selection:text-ink">
        <SmoothScroll>
          <Nav />
          <main>{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}