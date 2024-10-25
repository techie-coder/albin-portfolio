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
        background: "var(--background)",
        foreground: "var(--foreground)",
        'crimson': '#ad9392',
        'blue': '#0000FF'
      },
      fontFamily: {
        'integralcf-bold': ['integralcf-bold', 'sans-serif'],
        'integralcf-demibold': ['integralcf-demibold', 'sans-serif'],
        'integralcf-medium': ['integralcf-medium', 'sans-serif'],
      }
    },
  },
  plugins: [],
};
export default config;
