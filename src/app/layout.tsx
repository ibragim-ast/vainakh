import localFont from "next/font/local";
import { Metadata } from "next";
import { A11yProvider } from "@/context/A11yContext";
import Script from "next/script";
import PosWidget from "@/components/widgets/PosWidget";
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
        <Script id="yandex-metrika" strategy="afterInteractive">
          {`
    (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
    m[i].l=1*new Date();
    for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
    k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
    (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

    ym(112179076, "init", {
         clickmap:true,
         trackLinks:true,
         accurateTrackBounce:true,
         webvisor:true
    });
  `}
        </Script>
        <A11yProvider>
          <Header />
          <main className="grow">{children}</main>
          <Footer />
          <PosWidget />
        </A11yProvider>
      </body>
    </html>
  );
}
