/*--------------------------------------------------------------
    TASK DEFAULT
--------------------------------------------------------------*/
// plugins
var gulp = require('gulp');

gulp.task('default', ['compile-js', 'sass', 'compile-css', 'concat-css'], function(){
	gulp.watch('../assets/src/js/*.js', ['compile-js']);
    gulp.watch('../assets/src/sass/*.scss', ['sass']);
    gulp.watch('../assets/src/css/*.css', ['compile-css']);
    gulp.watch('../assets/public/css/*.min.css', ['concat-css']);
});
