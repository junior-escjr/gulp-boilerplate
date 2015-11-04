/*--------------------------------------------------------------
    TASK DEFAULT
--------------------------------------------------------------*/
// plugins
var gulp = require('gulp');

gulp.task('default', ['jsmin', 'sass', 'cssmin', 'concatcss'], function(){
	gulp.watch('../assets/js/*.js', ['jsmin']);
    gulp.watch('../assets/sass/**/*.scss', ['sass']);
    gulp.watch('../assets/css/*.css', ['cssmin']);
    gulp.watch('../assets/css/min/*.min.css', ['concatcss']);
});
