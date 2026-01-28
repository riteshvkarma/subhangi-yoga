import type { Metadata } from "next";
import { Sansita, Roboto } from "next/font/google";
import Script from "next/script";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CanvasInitializer from "./components/CanvasInitializer";
import "./globals.css";
import "../public/style.css";
import "../public/css/font-icons.css";
import "../public/css/swiper.css";
import "../public/css/magnific-popup.css";
import "../public/demos/yoga/yoga.css";
import "../public/css/custom.css";

const sansita = Sansita({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-sansita",
});

const roboto = Roboto({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "shubhangi Yoga | Wellness & Meditation",
  description:
    "Transform your body and mind with shubhangi Yoga. Join our yoga classes and meditation sessions for a healthier, more balanced life.",
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr">
      <head></head>
      <body className={`stretched ${sansita.variable} ${roboto.variable}`}>
        <div id="wrapper">
          <Header />
          {children}
          <Footer />
        </div>
        <div id="gotoTop" className="uil uil-angle-up"></div>
        <Script src="/js/plugins.min.js" strategy="afterInteractive" />
        <Script src="/js/functions.bundle.js" strategy="afterInteractive" />
        <CanvasInitializer />
      </body>
    </html>
  );
}
