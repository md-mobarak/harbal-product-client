/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#f7bbd9",

          "secondary": "#f4a1c7",

          "accent": "#322eb2",

          "neutral": "#262433",

          "base-100": "#F4F3F7",

          "info": "#639FDE",

          "success": "#5DEACB",

          "warning": "#C39409",

          "error": "#F66065",
        },
      },
    ],
  },
  plugins: [
    require('daisyui'),
  ],
  //...
}  