// plugins
var gulp = require('gulp');
var cssmin = require('gulp-cssmin');
var rename = require('gulp-rename');
 
// tasks 
gulp.task('minificarcss', function() {
   gulp.src('../assets/css/*.css')
   
   .pipe(cssmin())
   .pipe(rename({suffix: '.min'}))
   .pipe(gulp.dest('../assets/css-min'));
});

gulp.task('default', function(){ 
	gulp.run('minificarcss')
});