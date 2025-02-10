import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'], // Define the font-family
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",

        // Custom colors with shades from FIGMA
        primary: {
          blue: "#2D68F8",
          blueDark: "#1C3FB7",
          "blue-light": "#5475E5",
          "blue-light-2": "#8099EC",
          "blue-light-3": "#ADBCF2",
          "blue-light-4": "#C3CEF6",
          "blue-light-5": "#E1E8FF",

        },
        fuschia: {
          50: "#EDE5EF",
          100: "#F4E3F9",
          200: "#EECAF7",
          300: "#E8A5F3",
          400: "#E276F2",
          500: "#D244E8",
          600: "#B925CC",
          700: "#9B1BA7",
          800: "#801888",
          900: "#6D1972",
        },
        teal: {
          50: "#F0FDFA",
          100: "#CCFBF1",
          200: "#99F6E4",
          300: "#5EEAD4",
          400: "#2DD4BF",
          500: "#14B8A6",
          600: "#0D9488",
          700: "#0F766E",
          800: "#115E59",
          900: "#134E4A",
        },
      },

    },
  },
  plugins: [],
} satisfies Config;
