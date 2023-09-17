/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.{html,js}"],
  theme: {
    fontFamily:{
      'inter': ['Inter', 'sans-serif'],
      'chirp': ['Chirp']
    },
    borderRadius: {
      'button': '65px'
    },
    extend: {
      colors: {
        'Neutral-50': '#F9F9F9',
        'Neutral-100': '#F4F4F4',
        'Neutral-200': '#E4E4E4',
        'Neutral-300': '#D3D3D3',
        'Neutral-400': '#A2A2A2',
        'Neutral-500': '#737373',
        'Neutral-600': '#525252',
        'Neutral-700': '#404040',
        'Neutral-800': '#262626',
        'Neutral-900': '#171717',
        'Neutral-950': '#0A0A0A',
        'Neutral-1000': '#000000',
        'Twitter-Blue': '#1D9BF0',
      },
      boxShadow: {
        'button': '0px 8px 16px 0px rgba(0, 0, 0, 0.25)',
      },
    },
  },
  plugins: [],
}

