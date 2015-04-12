var gulp = require('gulp');
var ts = require('gulp-typescript');
var sourcemaps = require('gulp-sourcemaps');

var gst = ['*.ts', '!*.d.ts']

gulp.task('scripts', function () {
    return tsResult = gulp.src(gst)
        .pipe(sourcemaps.init())
        .pipe(ts({ noImplicitAny: true })).js
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(''));
});

gulp.task('defs', function () {
    return gulp.src(gst)
        .pipe(ts({ declarationFiles: true, noImplicitAny: true })).dts
        .pipe(gulp.dest(''));
});

gulp.task('default', ['scripts', 'defs']);

