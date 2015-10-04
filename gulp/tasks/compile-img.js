/*--------------------------------------------------------------
    COMPRIME IMAGENS
--------------------------------------------------------------*/
// plugins
var gulp = require('gulp');
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');

gulp.task('compile-img', function () {
    return gulp.src('../assets/src/images/*')
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        }))
        .pipe(gulp.dest('../assets/public/images/'));
});
