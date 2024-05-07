/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "#F4AF00",
        secondary: "#F4EBE0",
        background: "#12100E",
        accent: "#3D3D3D",
      },
    },
  },
  plugins: [require("tailwindcss-animated")],
};
