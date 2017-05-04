let mix = require('laravel-mix');

mix.sass('src/app.sass', 'dist')
   .js('src/app.js', 'dist');
