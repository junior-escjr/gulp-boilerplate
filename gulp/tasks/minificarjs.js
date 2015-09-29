// plugins
var gulp = require('gulp');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

// tasks
gulp.task('minificarjs', function() {
	return gulp.src('../assets/js/*.js')
		.pipe(uglify())
		.pipe(rename({suffix: '.min'}))
		.pipe(gulp.dest('../assets/js-min'))

});
