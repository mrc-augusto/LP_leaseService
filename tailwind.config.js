/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        red:{
          550: '#E93740'
        },
        black:{
          400: '#1c1c1c',
          500: '#030303',
        }
      },
    },
  },
  plugins: [],
}

