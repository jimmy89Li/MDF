/* File: gulpfile.js */

'use strict';

 // grab our gulp packages
var gulp = require('gulp');
var sass = require('gulp-sass');

// create tasks
gulp.task('sass', function () {
  return gulp.src('./source/scss/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sourcemaps.write())
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./public/assets/css'));
});
 
gulp.task('sass:watch', function () {
  gulp.watch('./sass/**/*.scss', ['sass']);
});
