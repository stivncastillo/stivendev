/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ["Open Sans", "sans-serif", "system-ui"],
      },
      boxShadow: {
        custom: "2px 2px 0",
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
};
