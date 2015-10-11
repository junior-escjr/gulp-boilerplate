/*--------------------------------------------------------------
    TASK DEFAULT
--------------------------------------------------------------*/
// plugins
var gulp = require('gulp');

gulp.task('default', ['compile-js', 'sass', 'cssmin', 'concat-css'], function(){
	gulp.watch('../assets/src/js/*.js', ['compile-js']);
    gulp.watch('../assets/src/sass/*.scss', ['sass']);
    gulp.watch('../assets/src/css/*.css', ['cssmin']);
    gulp.watch('../assets/public/css/*.min.css', ['concat-css']);
});
