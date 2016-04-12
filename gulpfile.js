/* File: gulpfile.js */

'use strict';

 // grab our gulp packages
var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');

// create tasks
gulp.task('sass', function () {
  return gulp.src('./source/scss/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({
    	includePaths: require('node-normalize-scss').includePaths
    }).on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./public/assets/css'));
});
 
gulp.task('watch', function () {
  gulp.watch('./source/scss/**/*.scss', ['sass']);
});
