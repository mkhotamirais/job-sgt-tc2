import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      screens: {
        DEFAULT: "100%",
      },
    },
    extend: {
      fontFamily: {
        "dm-sans": ["DM Sans", "sans-serif"],
      },
      colors: {
        kuning: "var(--kuning)",
        biru: "var(--biru)",
        ijo: "var(--ijo)",
        ping: "var(--ping)",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
export default config;
