// plugins
var gulp = require('gulp');
var cssmin = require('gulp-cssmin');
var rename = require('gulp-rename');

gulp.task( 'compile-css', function() {
  gulp.src('../assets/src/css/*.css')
    .pipe(cssmin())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('../assets/public/css-min'));
});

gulp.task( 'watch', function() {
  gulp.watch( '../assets/src/css/*.css', [ 'compile-css' ] );
});
