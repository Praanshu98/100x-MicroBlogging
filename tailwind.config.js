/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.{html,js}"],
  theme: {
    fontFamily:{
      'inter': ['Inter', 'sans-serif'],
      'chirp': ['Chirp']
    },
    extend: {
      borderRadius: {
        'button-l': "30px",
        'button-xl': "65px",
      },
      colors: {
        'Neutral':{
          '50': '#F9F9F9',
          '100': '#F4F4F4',
          '200': '#E4E4E4',
          '300': '#D3D3D3',
          '400': '#A2A2A2',
          '500': '#737373',
          '600': '#525252',
          '700': '#404040',
          '800': '#262626',
          '900': '#171717',
          '950': '#0A0A0A',
          '1000': '#000000'
        },
        'Twitter-Blue': {
          'Default': '#1D9BF0',
          'Hover': '#1871CA',
          'Disabled': '#1E5D87',
        },
        'Blue-Wash': 'rgba(117, 190, 239, 0.20)',
        'Button-Stroke': 'rgba(29, 155, 240, 0.24)',
        'Searchbar-Fill': '#212327',
        'Card-Fill': '#16181C',
        'Success': '#00BE74',
        'Error': '#8B141A',

      },
      boxShadow: {
        'button': '0px 8px 16px 0px rgba(0, 0, 0, 0.25)',
      },
      spacing:{
        0.25:'1px',
        1.25:'5px',
        4.5:'18px',
        16.5:'66px',
        23.5:'93px',
        35.75:'143px',
        39:'156px',
        50:'200px',
        58.25:'233px',
        87:'348px',
        88.75:'355px',
        98.5:'394px',
        100.5:'402px',
        106.5:'426px',
        108.5:'434px',
        120.5:'482px',
        128:'512px',
        148.25:'593px',
        150:'600px',
      }

    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

