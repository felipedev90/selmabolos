import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "on-primary-fixed": "#2f1314",
        primary: "#7b5455",
        secondary: "#745853",
        tertiary: "#bc004f",
        background: "#faf9f6",
        surface: "#faf9f6",
        "surface-container": "#efeeeb",
        "surface-container-low": "#f4f3f1",
        "on-surface": "#1a1c1a",
        "on-primary": "#ffffff",
        "primary-container": "#f4c2c2",
        "on-primary-container": "#734e4e",
        "secondary-container": "#fed7d0",
        "on-secondary-container": "#795c57",
        "outline-variant": "#d4c2c2",
      },
      fontFamily: {
        serif: ["var(--font-noto)"],
        sans: ["var(--font-jakarta)"],
      },
    },
  },
  plugins: [],
};
export default config;
