import localFont from "next/font/local";
import { Metadata } from "next";
import Header from "@/components/layouts/Header";
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
      path: "../fonts/ExcentraPro-MediumItalic.woff2",
      weight: "500",
      style: "italic",
    },
    {
      path: "../fonts/ExcentraPro-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../fonts/ExcentraPro-SemiBoldItalic.woff2",
      weight: "600",
      style: "italic",
    },
    {
      path: "../fonts/ExcentraPro-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../fonts/ExcentraPro-BoldItalic.woff2",
      weight: "700",
      style: "italic",
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
      <body className={`${excentra.variable} bg-brand-light text-brand-dark`}>
        <Header />
        <main>{children}</main>
        <footer></footer>
      </body>
    </html>
  );
}
