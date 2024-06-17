/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}",
    "./node_modules/flowbite/**/*.js",
    "./node_modules/flowbite/**/*.html"
  ],
  theme: {
    colors: {
      primary:'#93B1A6',
      secondary:'#040D12',
      greenDark:'#5C8374',
      greenLight:'#93B1A6'
    },
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

