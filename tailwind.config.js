/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}",
    "./node_modules/flowbite/**/*.js",
    "./node_modules/flowbite/**/*.html"
  ],
  theme: {
   
    extend: {
      colors: {
        primary:'#183D3D',
        secondary:'#040D12',
        greenDark:'#5C8374',
        greenLight:'#93B1A6'
      },
      fontFamily: {
        'monserat': ['Montserrat', 'sans-serif'],

      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

