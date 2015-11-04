/*--------------------------------------------------------------
    CONCATENA CSS
--------------------------------------------------------------*/
// plugins
var gulp = require('gulp');
var concat = require('gulp-concat');

gulp.task('concatcss', function() {
  return gulp.src([
      '../assets/css/reset.min.css',
      '../assets/css/grid.min.css',
      '../assets/css/owl.carousel.min.css',
      '../assets/css/owl.theme.default.min.css',
      '../assets/css/base.min.css'
  ])
    .pipe(concat('all.min.css'))
    .pipe(gulp.dest('../assets/css/'));
});
