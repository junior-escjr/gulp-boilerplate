/*--------------------------------------------------------------
    CONCATENA CSS
--------------------------------------------------------------*/
// plugins
var gulp = require('gulp');
var concat = require('gulp-concat');

gulp.task('concat-css', function() {
  return gulp.src([
      '../assets/public/css/reset.min.css',
      '../assets/public/css/grid.min.css',
      '../assets/public/css/base.min.css',
      '../assets/public/css/media-queries.min.css'
  ])
    .pipe(concat('all.min.css'))
    .pipe(gulp.dest('../assets/public/css/'));
});
