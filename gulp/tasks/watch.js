// plugins
var gulp = require('gulp');
var cssmin = require('gulp-watch');

gulp.task('watch', function(){
	gulp.watch('../assets/css/', ['../assets/css-min/']);
	gulp.watch('../assets/js/', ['../assets/js-min/']);
});
