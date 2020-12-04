module.exports = {
  purge: ['./src/**/*.html', './src/**/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontSize: {
      inherit: 'inherit',
      sm: '0.778rem', //       14px
      md: '0.889rem', //       16px
      lg: '1.111rem', //       20px
      xl: '2rem', //           36px
      xxl: '3.667rem', //      66px
    },
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
