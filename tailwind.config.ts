import type { Config } from "tailwindcss";
import tokens from "./styles/tokens";

const config = {
  content: [
    "./app/**/*.{ts,tsx,mdx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: tokens.paper,
        ink: tokens.ink,
        heading: tokens.heading,
        primary: tokens.primaryBg,
        "primary-fg": tokens.primaryFg,
        secondary: tokens.secondaryBg,
        "secondary-fg": tokens.secondaryFg,
        outline: tokens.outline,
        panel: tokens.panel,
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.25rem",
      },
      boxShadow: {
        elevation: "0 32px 80px rgba(21, 50, 67, 0.18)",
      },
    },
  },
  plugins: [],
} satisfies Config;

export default config;

