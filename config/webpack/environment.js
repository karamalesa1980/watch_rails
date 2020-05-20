// const { environment } = require('@rails/webpacker')
// const webpack = require('webpack')

// environment.plugins.prepend('Provide', new webpack.ProvidePlugin({
//   $: 'jquery/src/jquery',
//   jQuery: 'jquery/src/jquery',
//   Popper: ['popper.js', 'default'], // for Bootstrap 4
//   //jquery_ujs: 'jquery_ujs/src/rails',
// })
// );
const { environment } = require('@rails/webpacker')

const webpack = require('webpack')
environment.plugins.append(
  'Provide',
  new webpack.ProvidePlugin({
    $: 'jquery',
    jQuery: 'jquery',
    Popper: ['popper.js', 'default']
  })
);



environment.loaders.append('jquery', {
  test: require.resolve('jquery'),
  use: [
    { loader: 'expose-loader', options: '$' },
    { loader: 'expose-loader', options: 'jQuery' }
  ]
});

// Get the actual sass-loader config
const sassLoader = environment.loaders.get('sass')
const sassLoaderConfig = sassLoader.use.find(function(element) {
  return element.loader == 'sass-loader'
})

// Use Dart-implementation of Sass (default is node-sass)
const options = sassLoaderConfig.options
options.implementation = require('sass')




module.exports = environment