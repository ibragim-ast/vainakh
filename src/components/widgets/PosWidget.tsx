"use client";

import Script from "next/script";

export default function PosWidget() {
  return (
    <>
      {/* Контейнер для плавающего фрейма ПОС */}
      <div
        id="js-show-iframe-wrapper"
        className="fixed bottom-6 right-6 z-40"
      />

      <Script
        id="pos-script"
        src="https://pos.gosuslugi.ru/bin/script.min.js"
        strategy="lazyOnload"
        onLoad={() => {
          if (typeof window !== "undefined" && (window as any).Widget) {
            (window as any).Widget("https://pos.gosuslugi.ru/form", 376200);
          }
        }}
      />
    </>
  );
}
