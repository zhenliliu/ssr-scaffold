module.exports = {
  plugins: [
    require('postcss-pxtorem')({
      rootValue: 50,
      unitPrecision: 5,
      //The properties that can change from px to rem.
      propList: ['*'],
      selectorBlackList: [],
      replace: true,
      mediaQuery: true,
      minPixelValue: 6
    }),
    require('autoprefixer')({
      browsers: 'last 2 version'
    })
  ]
}