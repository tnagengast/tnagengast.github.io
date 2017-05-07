const { mix } = require('laravel-mix');

mix.js('resources/assets/js/app.js', 'public/js')
   .sass('resources/assets/sass/app.scss', 'public/css')
   .copy('node_modules/video.js/dist/video-js.min.css', 'public/css/video-js.min.css')
   .browserSync('dev-portfolio.dev');
