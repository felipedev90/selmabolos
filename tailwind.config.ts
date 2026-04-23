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
        bg: "var(--bg)",
        "bg-alt": "var(--bg-alt)",
        surface: "var(--surface)",
        ink: "var(--ink)",
        "ink-soft": "var(--ink-soft)",
        muted: "var(--muted)",
        primary: "var(--primary)",
        "primary-ink": "var(--primary-ink)",
        accent: "var(--accent)",
        "accent-2": "var(--accent-2)",
        "accent-3": "var(--accent-3)",
        line: "var(--line)",
      },
      fontFamily: {
        sans: ["var(--font-sans)"],
        serif: ["var(--font-serif)"],
        display: ["var(--font-display)"],
        hand: ["var(--font-hand)"],
      },
      spacing: {
        "section-y": "var(--d-section-y)",
        "block-gap": "var(--d-block-gap)",
        "card-pad": "var(--d-card-pad)",
      },
      borderRadius: {
        "theme-lg": "var(--d-radius-lg)",
        "theme-md": "var(--d-radius-md)",
        "theme-sm": "var(--d-radius-sm)",
      },
      boxShadow: {
        theme: "var(--shadow)",
      },
      backgroundImage: {
        "paper-noise": "var(--paper-noise)",
      },
    },
  },
  plugins: [],
};

export default config;
