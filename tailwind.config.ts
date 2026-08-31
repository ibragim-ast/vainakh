import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        gold: "#f8d7a2",
        orange: "#e76c24",
        dark: "#151618",
        light: "#dddcd3",
      },
      fontFamily: {
        sans: ["var(--font-excentra)", "sans-serif"],
      },
    },
  },
};

export default config;
