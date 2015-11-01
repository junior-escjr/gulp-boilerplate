/*--------------------------------------------------------------
    CONCATENA CSS
--------------------------------------------------------------*/
// plugins
var gulp = require('gulp');
var concat = require('gulp-concat');

gulp.task('concatcss', function() {
  return gulp.src([
      '../assets/public/css/reset.min.css',
      '../assets/public/css/grid.min.css',
      '../assets/public/css/owl.carousel.min.css',
      '../assets/public/css/owl.theme.default.min.css',
      '../assets/public/css/all.min.css',
  ])
    .pipe(concat('all.min.css'))
    .pipe(gulp.dest('../assets/public/css/'));
});
