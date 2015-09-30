// plugins
var gulp = require('gulp');

gulp.task('default', function(){
	gulp.run('minificarjs', 'minificarcss', 'watch')
});