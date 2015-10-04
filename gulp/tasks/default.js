/*--------------------------------------------------------------
    TASK DEFAULT
--------------------------------------------------------------*/
// plugins
var gulp = require('gulp');

gulp.task('default', function(){
	gulp.run('compile-js', 'sass', 'compile-css', 'concat-css')
});
