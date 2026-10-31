import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-primary)"],
        heading: ["var(--font-heading)"],
        navigation: ["var(--font-navigation)"],
        secondary: ["var(--font-secondary)"],
        display: ["var(--font-display)"],
        editorial: ["var(--font-editorial)"],
        decorative: ["var(--font-decorative)"],
        ui: ["var(--font-ui)"],
      },
      colors: {
        "bg-main": "var(--color-bg-main)",
        "bg-card": "var(--color-bg-card)",
        "bg-light": "var(--color-bg-light)",
        "bg-alt": "var(--color-bg-alt)",
        primary: "var(--color-primary)",
        "primary-dark": "var(--color-primary-dark)",
        "primary-light": "var(--color-primary-light)",
        secondary: "var(--color-secondary)",
        accent: "var(--color-accent)",
        "accent-light": "var(--color-accent-light)",
        text: "var(--color-text)",
        "text-light": "var(--color-text-light)",
        heading: "var(--color-heading)",
        border: "var(--color-border)",
      },
      borderColor: {
        DEFAULT: "currentColor",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        shrinkWidth: {
          "0%": { width: "100%" },
          "100%": { width: "0%" },
        },
      },
      animation: {
        "fade-in": "fadeIn 450ms ease",
        "shrink-width": "shrinkWidth linear forwards",
      },
    },
  },
  plugins: [],
};
export default config;
