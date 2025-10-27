/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "media",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "15px",
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1350px", // 👈 Custom breakpoint
        "2xl": "1536px",
      },
    },
    extend: {
      colors: {
        primary: "#F2FF00",
        secondary: "#FFFFFF",
      },
      screens: {
        xl: "1350px", // 👈 Overrides default 1280px
      }
    },
  },
  plugins: [],
};
