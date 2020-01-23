const { environment } = require('@rails/webpacker')


const webpack = require('webpack')
environment.plugins.append('Provide', new webpack.ProvidePlugin({
  $: 'jquery',
  jQuery: 'jquery',
  Popper: ['popper.js', 'default']
}));

environment.loaders.append('jquery', {
  test: require.resolve('jquery'),
  use: [{
    loader: 'expose-loader',
    options: '$',
  }, {
    loader: 'expose-loader',
    options: 'jQuery',
  }]
});
module.exports = environment

// config/webpack/environment.js
// const { environment } = require('@rails/webpacker')
// const webpack = require('webpack')
// // Add an additional plugin of your choosing : ProvidePlugin
// environment.plugins.prepend('Provide', new webpack.ProvidePlugin({
//     $: 'jquery',
//     JQuery: 'jquery',
//     jquery: 'jquery',
//     'window.Tether': "tether",
//     Popper: ['popper.js', 'default'], // for Bootstrap 4
//   })
// )
// module.exports = environment

// const { environment } = require('@rails/webpacker')

//   environment.plugins.prepend('Provide',
//     new webpack.ProvidePlugin({
//       $: 'jquery/src/jquery',
//       jQuery: 'jquery/src/jquery'
//     })
//   )

// module.exports = environment