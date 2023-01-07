/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      width: {
        '57%': '57%',
      },
      backgroundImage: {
        'slider': "url('./img/slide.jpg')",
        'footer-texture': "url('/img/footer-texture.png')",
      },
      fontFamily: {
        Karla: ['Karla', 'sans-serif']
      },
      colors: {
        'light-coffee': {
          '200': '#a25f4b',
          '400': '#c89f94',

        },
        'gray-base': '#1d1f2eb3'
      },
      keyframes: {
        slideUp: {
          '0%': {
            transform: 'translate(-50%, 20px)',
          },
          '100%': { transform: 'translate(-50%, 0px)'},
        },
        slideDown: {
          '0%': {
            transform: 'translateY(-8px)',
          },
          '100%': { transform: 'translateY(0)'},
        },

      },
      animation: {
        slideUp: 'slideUp 0.2s ease-in-out',
        slideDown: 'slideDown 0.2s ease-in-out',
      }
    },
  },
  plugins: [],
}
