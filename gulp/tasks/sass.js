// plugins
'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');

// tasks
gulp.task('sass', function () {
  gulp.src('../assets/src/sass/*.sass')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('../assets/src/css/'));
});

gulp.task( 'watch', function() {
  gulp.watch( '../assets/src/sass/*.sass', ['sass'] );
});
