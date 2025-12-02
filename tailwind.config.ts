import type { Config } from "tailwindcss";

const config = {
  content: [
    "./src/**/*.{ts,tsx,js,jsx,md,mdx}",
    "./components/**/*.{ts,tsx,js,jsx,md,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "earth-brown": "#4A3F35",
        "celestial-blue": "#2E5EAA",
        "sand-beige": "#E8DCC4",
        "sand-beige-light": "#F6EEDC",
        "ancient-gold": "#C7A945",
        "healing-green": "#5C8F70",
        "violet-aura": "#6C4AA1",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        heading: ["var(--font-cormorant)", "serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;

export default config;

