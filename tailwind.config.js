/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./assets/**/*.{html,js,woff,woff2}",
            "./index.html"],
  theme: {
    extend: {
      colors: {
        'txt-gray-2':'#8D95AF',
        'txt-gray-3':'#6C7287',
        'txtprimary':'#21232C',
        'txt-gray-4':'#454B5F',
        'offwhite-4':'#D8DEEC',
        'offwhite-3':'#EDF0F6',
        'off-blue-3':'#EAEFFC',
        'txt-maroon':'#B3293D',
        'maroon-border':'#b76672',
        'chat-bg': '#BB253B',
      },
    },
    variants: {
      fill: ['hover', 'focus'], // this line does the trick
    },
    fontFamily: {
      'Inter':['Inter', 'sans-serif']
    },
  },
  plugins: [],
}

