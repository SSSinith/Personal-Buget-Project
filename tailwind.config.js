/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{html,js}',
    './pages/**/*.{html,js}',
    './index.html',
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom-glow': '0 0 15px rgba(219, 242, 38, 0.5)' // regular state
      }
    }
  },
  variants: {
    extend: {
      boxShadow: ['hover'], // Enable hover variant for boxShadow utility
    }
  },
  dropShadow: {
    '3xl': '0 0 35px rgba(219, 242, 38, 0.5)',
    '4xl': [
        '0 35px 35px rgba(0, 0, 0, 0.25)',
        '0 45px 65px rgba(0, 0, 0, 0.15)'
    ]
  },
  backgroundImage: {
    'gradient-to-b': 'linear-gradient(to bottom, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.8) 100%)'
  },
  colors: {
    'black-90': 'rgba(0, 0, 0, 0.9)',
    'black-80': 'rgba(0, 0, 0, 0.8)',
}
}
