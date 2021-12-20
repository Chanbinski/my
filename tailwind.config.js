module.exports = {
  mode: 'jit',
  purge: ['./pages/*.{js,ts,jsx,tsx}', './pages/blog/*.{js,ts,jsx,tsx}', './components/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      fontWeight: ['hover', 'focus']
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
