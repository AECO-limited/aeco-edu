/** @type {import('tailwindcss').Config} */
// import "@/styles/globals.css";

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        clash: ['var(--font-clash)'],
        inter: ['var(--font-inter)'],
      },
      screens: {
        'xs-height': { 'raw': '(min-height: 400px)' },
        'sm-height': { 'raw': '(min-height: 640px)' },
        'md-height': { 'raw': '(min-height: 768px)' },
        'lg-height': { 'raw': '(min-height: 1024px)' },
        'xl-height': { 'raw': '(min-height: 1280px)' },
        '2xl-height': { 'raw': '(min-height: 1536px)' },
      },
    },
  },
  plugins: [],
};
