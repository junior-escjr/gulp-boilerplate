// plugins
var gulp = require('gulp');
var concat = require('gulp-concat');

gulp.task('concat-files', function() {
  return gulp.src(['../assets/public/css-min/reset.min.css', '../assets/public/css-min/grid.min.css', '../assets/public/css-min/site.min.css', '../assets/public/css-min/media-queries.min.css'])
    .pipe(concat('all.min.css'))
    .pipe(gulp.dest('../assets/public/css-min/'));
});
