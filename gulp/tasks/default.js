/*--------------------------------------------------------------
    TASK DEFAULT
--------------------------------------------------------------*/
// plugins
var gulp = require('gulp');

gulp.task('default', function(){
	gulp.run('compile-js', 'compile-css', 'watch')
});
