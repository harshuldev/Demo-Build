import type { Config } from "tailwindcss";

const config: Config = {
  /* -----------------------------------------------
   * Tailwind CSS Configuration
   * content: scans all component/page files
   * ----------------------------------------------- */
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      /* -----------------------------------------------
       * Custom font families matching globals.css imports
       * ----------------------------------------------- */
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      /* -----------------------------------------------
       * Screen breakpoints for responsive design
       * xs: phones (< 480px)
       * sm: large phones (≥ 480px)
       * md: tablets (≥ 768px)
       * lg: laptops (≥ 1024px)
       * xl: desktops (≥ 1280px)
       * 2xl: large screens (≥ 1536px)
       * ----------------------------------------------- */
      screens: {
        xs: "480px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      /* -----------------------------------------------
       * Custom spacing values
       * ----------------------------------------------- */
      spacing: {
        "18": "4.5rem",
        "22": "5.5rem",
        "30": "7.5rem",
      },
      /* -----------------------------------------------
       * Animation keyframes
       * ----------------------------------------------- */
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideInLeft: {
          "0%": { opacity: "0", transform: "translateX(-24px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
      },
      animation: {
        "fade-in-up": "fadeInUp 0.6s ease-out forwards",
        "fade-in": "fadeIn 0.4s ease-out forwards",
        "slide-in-left": "slideInLeft 0.6s ease-out forwards",
      },
    },
  },
  plugins: [],
};
export default config;
