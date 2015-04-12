var gulp = require('gulp');
var ts = require('gulp-typescript');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('scripts', function () {
    var tsProject = ts.createProject({ declarationFiles: true, noImplicitAny: true });
    var tsResult = gulp.src('*.ts').pipe(ts(tsProject));

    tsResult.dts.pipe(gulp.dest('typings/gbmenu'));

    return tsResult.js
        .pipe(sourcemaps.init())
        .pipe(gulp.dest(''))
        .pipe(sourcemaps.write('.'));
});

gulp.task('default', ['scripts']);

