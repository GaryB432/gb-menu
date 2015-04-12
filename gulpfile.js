var gulp = require('gulp');
var ts = require('gulp-typescript');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('scripts', function () {
    return tsResult = gulp.src('*.ts')
        .pipe(sourcemaps.init())
        .pipe(ts({ noImplicitAny: true })).js
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(''));
});

gulp.task('defs', function () {
    return gulp.src('*.ts')
        .pipe(ts({ declarationFiles: true, noImplicitAny: true })).dts.pipe(gulp.dest('typings/gbmenu'));
});

gulp.task('default', ['scripts', 'defs']);

