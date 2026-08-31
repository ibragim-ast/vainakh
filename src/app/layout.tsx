import localFont from "next/font/local";

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
