const gulp = require('gulp'),
      sass = require('gulp-sass'),
      autoprefixer = require('gulp-autoprefixer'),
      concat = require('gulp-concat'),
      sourcemaps = require('gulp-sourcemaps'),
      browserSync = require('browser-sync'),
      reload = browserSync.reload;

var sassPath = 'sass/*.scss',
    cssPath = 'css/',
    proxy = 'http://localhost:8081/webPortal40';

gulp.task('browser-sync', ()=> {
    var files =[
        './',
        '/*.js',
        '/*.html'
    ];
    browserSync.init(files, {
        proxy: proxy,
        notify: false
    });
})

gulp.task('scss-task', () => {
    return gulp.src(sassPath).
        pipe(sourcemaps.init()).
        pipe(sass({
            outputStyle: 'compressed',
            sourceComment: true
        })).
        pipe(autoprefixer()).
        pipe(sourcemaps.identityMap()).
        pipe(concat('style.css')).
        pipe(reload({stream:true})).
        pipe(sourcemaps.write('./')).
        pipe(gulp.dest(cssPath));
});
gulp.task('watch', () => {
    gulp.watch(sassPath, gulp.series('scss-task'));
});
// gulp.task('default', gulp.parallel('scss-task', 'watch'));
gulp.task('default', gulp.parallel('scss-task', 'browser-sync', 'watch'));