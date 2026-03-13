import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#16a34a",
        "brand-red": "#dc2626",
      },
      fontFamily: {
        display: ["system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;

