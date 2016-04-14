/* File: gulpfile.js */

'use strict';

 // grab our gulp packages
var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var browserSync = require('browser-sync').create();

/*** create tasks ***/

// sass task - convert sass into css
gulp.task('sass', function () {
  return gulp.src('./source/scss/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({
    	includePaths: require('node-normalize-scss').includePaths
    }).on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./public/assets/css'));
});
 
// watch-sass task - auto converts sass into css whenever something
// new is saved in the sass file
gulp.task('watch-sass', function () {
  gulp.watch('./source/scss/**/*.scss', ['sass']);
});


// browser sync task - auto refreshes the browser whenever something
// new is saved
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "C:/Users/jimmyLi/Documents/GitHub/MDF/public/"
        }
    });
});