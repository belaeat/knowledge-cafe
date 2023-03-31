/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#3b81af",

          "secondary": "#fff4af",

          "accent": "#9281d1",

          "neutral": "#382B3B",

          "base-100": "#FDFCFD",

          "info": "#76ACD5",

          "success": "#207E67",

          "warning": "#EEB244",

          "error": "#F1131A",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

