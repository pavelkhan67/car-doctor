/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#d0c6ff",

          "secondary": "#7ff49c",

          "accent": "#04ea8e",

          "neutral": "#212B36",

          "base-100": "#FFFFFF",

          "info": "#497CD0",

          "success": "#0F7049",

          "warning": "#F57D05",

          "error": "#DC2861",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

