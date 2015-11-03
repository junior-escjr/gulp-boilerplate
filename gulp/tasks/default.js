/*--------------------------------------------------------------
    TASK DEFAULT
--------------------------------------------------------------*/
// plugins
var gulp = require('gulp');

gulp.task('default', ['jsmin', 'sass', 'cssmin', 'concatcss'], function(){
	gulp.watch('../assets/src/js/*.js', ['jsmin']);
    gulp.watch('../assets/src/sass/**/*.scss', ['sass']);
    gulp.watch('../assets/src/css/*.css', ['cssmin']);
    gulp.watch('../assets/public/css/*.min.css', ['concatcss']);
});
