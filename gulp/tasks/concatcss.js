/*--------------------------------------------------------------
    CONCATENA CSS
--------------------------------------------------------------*/
// plugins
var gulp = require('gulp');
var concat = require('gulp-concat');

gulp.task('concatcss', function() {
  return gulp.src([
      '../assets/css/reset.css',
      '../assets/css/grid.css',
      '../assets/css/owl.carousel.css',
      '../assets/css/owl.theme.default.css',
      '../assets/css/styles.css'
  ])
    .pipe(concat('all.css'))
    .pipe(gulp.dest('../assets/css/'));
});