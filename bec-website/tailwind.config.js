/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./lib/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        // BEC brand palette (taken from the logo)
        ink: {
          DEFAULT: "#2B303B", // dark charcoal/navy from the logo
          900: "#1B1F27",
          800: "#22262F",
          700: "#2B303B",
          600: "#3A4150",
        },
        flame: {
          DEFAULT: "#F05A22", // orange accent from the logo
          600: "#E04E18",
          500: "#F05A22",
          400: "#F87842",
        },
        steel: {
          50: "#F6F7F9",
          100: "#EDEFF3",
          200: "#DCE0E8",
          300: "#C2C9D6",
          400: "#9AA3B5",
          500: "#6E788C",
          600: "#515B6E",
        },
      },
      fontFamily: {
        // Loaded via next/font in app/[lang]/layout.js
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        arabic: ["var(--font-arabic)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        container: "1200px",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "slow-zoom": {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(1.08)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "slow-zoom": "slow-zoom 18s ease-out forwards",
      },
      backgroundImage: {
        "grid-faint":
          "linear-gradient(to right, rgba(43,48,59,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(43,48,59,0.05) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};
