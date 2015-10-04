/*--------------------------------------------------------------
    TASK DEFAULT
--------------------------------------------------------------*/
// plugins
var gulp = require('gulp');

gulp.task('default', function(){
	gulp.run('compile-js', 'compile-css', 'compile-img', 'concat-css', 'sass', 'watch')
});
