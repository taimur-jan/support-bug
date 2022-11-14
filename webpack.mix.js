const mix = require('laravel-mix');
const path = require('path');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js')
    .vue()
    .webpackConfig({
        resolve: {
          alias: {
            '@resources': path.resolve(__dirname, 'resources/'),
            '@': path.resolve(__dirname, 'resources/js/src/'),
            '@themeConfig': path.resolve(__dirname, 'resources/js/themeConfig.js'),
            '@core': path.resolve(__dirname, 'resources/js/src/@core'),
            '@validations': path.resolve(__dirname, 'resources/js/src/@core/utils/validations/validations.js'),
            '@axios': path.resolve(__dirname, 'resources/js/src/libs/axios')
          }
        },
    })
    .sass('resources/scss/core.scss', 'public/css')
  mix.copy('resources/css/loader.css', 'public/css');
