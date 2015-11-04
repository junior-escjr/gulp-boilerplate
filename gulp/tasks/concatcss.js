/*--------------------------------------------------------------
    CONCATENA CSS
--------------------------------------------------------------*/
// plugins
var gulp = require('gulp');
var concat = require('gulp-concat');

gulp.task('concatcss', function() {
  return gulp.src([
      '../assets/css/min/reset.min.css',
      '../assets/css/min/grid.min.css',
      '../assets/css/min/owl.carousel.min.css',
      '../assets/css/min/owl.theme.default.min.css',
      '../assets/css/min/base.min.css'
  ])
    .pipe(concat('all.min.css'))
    .pipe(gulp.dest('../assets/css/min/'));
});