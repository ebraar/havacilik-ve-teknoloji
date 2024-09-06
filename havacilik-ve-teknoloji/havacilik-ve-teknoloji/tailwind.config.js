/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        customDark: '#181616',   // En üstteki renk
        customPurple: '#2F275D', // Ortadaki renk
        customRed: '#6E343B',    // En alttaki renk
      },
    },
  },
  plugins: [],
};
