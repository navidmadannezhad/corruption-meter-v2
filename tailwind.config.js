/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',

    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        heavyDark:"#0e0e0e",
        lightDark: "#1a1a1a",
        blue: "#089db8",
        lightWhite: "rgba(255,255,255,0.4)"
      }
    },
  },
  plugins: [require("daisyui")],
}
