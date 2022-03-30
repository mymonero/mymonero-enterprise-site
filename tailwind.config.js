module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'black': '#000000',
      'yellow': '#FFEE77',
      'deepyellow': '#DDCE67',
      'midnight': '#161616',
      'silver': '#757575',
      'lightsilver':'#f5f5f5',
      'blue': '#00C0F8',
      'charcoal':'111827',
      'gray': '#dadada',
      'green': '#86C232',
    },
  },

  plugins: [
    // require('@tailwindcss/forms'),
    // require('@tailwindcss/typography'),
  ],


}
