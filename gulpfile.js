var gulp = require('gulp');
var ts = require('gulp-typescript');
var eventStream = require('event-stream');

gulp.task('scripts', function () {
    return gulp
        .src('*.ts')
        .pipe(ts({ noImplicitAny: true }))
        .pipe(gulp.dest(''));
});

gulp.task('wtf', function () {
    console.log('wtf');
});

gulp.task('default', ['scripts']);

