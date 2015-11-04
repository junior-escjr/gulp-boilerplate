/*--------------------------------------------------------------
    TASK DEFAULT
--------------------------------------------------------------*/
// plugins
var gulp = require('gulp');

gulp.task('default', ['jsmin', 'sass', 'cssmin', 'concatcss'], function(){
	gulp.watch('../assets/js/lib/*.js', ['jsmin']);
    gulp.watch('../assets/sass/**/*.scss', ['sass']);
    gulp.watch('../assets/css/lib/*.css', ['cssmin']);
    gulp.watch('../assets/css/*.min.css', ['concatcss']);
});
