
'use strict';

var gulp = require('gulp'),
  tsc = require('gulp-typescript'),
  sass = require('gulp-sass'),
  del = require('del'),
  merge = require('merge-stream'),
  tsModuleProject = tsc.createProject('tsconfig.app.json'),
  tsProject = tsc.createProject('tsconfig.json');

gulp.task('compile-ts', function () {
  const src = [
    '../src/scripts/**/*.ts',
    '!../src/scripts/app.ts',
    '!../**/*.spec.ts',
  ];
  var tsp = gulp.src(src).pipe(tsProject());
  merge(tsp, tsp.js).pipe(gulp.dest('lib'));

  var tspx = gulp.src(src).pipe(tsModuleProject());
  merge(tspx, tspx.js).pipe(gulp.dest('lib2015'));
});

gulp.task('compile-sass', function () {
  return gulp.src('../src/styles/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('themes'));
});

gulp.task('clean-ts', function (cb) {
  del(['lib', 'lib2015'], cb);
});

gulp.task('clean-sass', function (cb) {
  del(['themes'], cb);
});

gulp.task('ts', ['clean-ts', 'compile-ts']);
gulp.task('sass', ['clean-sass', 'compile-sass']);

gulp.task('default', ['ts', 'sass']);