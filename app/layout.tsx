//
import type { Metadata } from "next";
import {
  Cinzel,
  Cinzel_Decorative,
  Marcellus,
  Cormorant_Garamond,
} from "next/font/google";
import "./globals.css";
import Header from "@/shared/layout/Header";
import Footer from "@/shared/layout/Footer";
import Provider from "@/shared/layout/Provider";

const cinzelDecorative = Cinzel_Decorative({
  variable: "--font-display",
  weight: "400",
  subsets: ["latin"],
});
const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-body",
  subsets: ["latin"],
});

const cinzel = Cinzel({
  variable: "--font-titles",
  subsets: ["latin"],
});
const marcellus = Marcellus({
  variable: "--font-ui",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | Connect Latam VT",
    default: "Connect Latam VT"
  },
  description: "Sitio web dedicado a la obtención de votos y logros para la agrupación coreana (Kpop) Enhypen",
  verification: {
    google: "50s_NynfX-QlZsFzluFXxb1rCo7HGKo19XchH-mOBQA",
  },
  openGraph: {
    title: {
      template: "%s | Connect Latam VT",
      default: "Connect Latam VT"
    },
    description: "Sitio web dedicado a la obtención de votos y logros para la agrupación coreana (Kpop) Enhypen"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="google-site-verification" content="50s_NynfX-QlZsFzluFXxb1rCo7HGKo19XchH-mOBQA" />
      </head>
      <body
        className={`${cinzel.variable} ${cinzelDecorative.variable} ${marcellus.variable} ${cormorantGaramond.variable}  antialiased`}
      >
        <Provider>
          <div className="flex flex-col h-dvh">
            <Header />
            <main className="flex-1 min-h-0 overflow-y-auto overscroll-y-contain pb-[7dvh]">
              {children}
            </main>
            <Footer />
          </div>
        </Provider>
      </body>
    </html>
  );
}
