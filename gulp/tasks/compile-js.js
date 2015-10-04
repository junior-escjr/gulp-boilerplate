/*--------------------------------------------------------------
    MINIFICA JAVASCRIPT
--------------------------------------------------------------*/
// plugins
var gulp = require('gulp');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

// tasks
gulp.task('compile-js', function() {
	return gulp.src('../assets/src/js/*.js')
		.pipe(uglify())
		.pipe(rename({suffix: '.min'}))
		.pipe(gulp.dest('../assets/public/js/'))

});
