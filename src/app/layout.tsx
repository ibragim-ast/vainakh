import localFont from "next/font/local";
import { Metadata } from "next";
import { A11yProvider } from "@/context/A11yContext";
import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";
import "./globals.css";

const excentra = localFont({
  src: [
    {
      path: "../fonts/ExcentraPro-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/ExcentraPro-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/ExcentraPro-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../fonts/ExcentraPro-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-excentra",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Государственный академический ансамбль танца Вайнах",
  description: 'Официальный сайт ГАУ ГААТ "Вайнах"',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body
        className={`${excentra.variable} min-h-screen flex flex-col font-sans bg-brand-light text-brand-dark`}
      >
        <A11yProvider>
          <Header />
          <main className="grow">{children}</main>
          <Footer />
        </A11yProvider>
      </body>
    </html>
  );
}
