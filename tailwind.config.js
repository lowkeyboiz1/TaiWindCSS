/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      
      backgroundImage: {
        'slider': "url('./img/slide.jpg')",
        'footer-texture': "url('/img/footer-texture.png')",
      },
      fontFamily: {
        Karla: ['Karla', 'sans-serif']
      },
      colors: {
        'light-coffee': '#c89f94'
      },
      keyframes: {
        slideDown: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(0)' },
        }
      },
      animation: {
        slideDown: 'slideDown 0.4s ease-in-out',
      }
    },
  },
  plugins: [],
}
