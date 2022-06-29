module.exports = {
  content: [],
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      colors: {
        link: '#4B72E0',
      },
      lineHeight: {
        12: '48px',
      },
      borderWidth: {
        1: '1px',
      },
    },
  },
  plugins: [],
};
