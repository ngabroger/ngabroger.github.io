/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}",
    "./node_modules/flowbite/**/*.js",
    "./node_modules/flowbite/**/*.html"
  ],
  theme: {
   
    extend: {
      animation: {
        'fade-in': 'fadeIn 1s ease-in forwards',
        'fade-out': 'fadeOut 1s ease-in forwards',
      },
      transform: {
        'fade-in': 'translateY(-100%) opacity(0) scale(0.5)',
        'fade-out': 'translateY(0) opacity(1) scale(1)',
      },
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

