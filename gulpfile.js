var SRC = '';

var path = require('path');

//compaile
var gulp = require('gulp');
var plumber = require('gulp-plumber');
var sourcemaps = require('gulp-sourcemaps');

//sass
var sass = require('gulp-sass');
var sassglob = require('gulp-sass-glob');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', function() {
  gulp.src(path.join(SRC, 'sass/import.scss'))
    .pipe(plumber())
    .pipe(sassglob())
    .pipe(sourcemaps.init())
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(autoprefixer())
    .pipe(sourcemaps.write(path.join('./')))
    .pipe(gulp.dest(path.join(SRC, 'css/')));
});

gulp.task('watch', function () {
  gulp.watch(path.join(SRC, 'sass/**/*.scss'), ['sass']);
});

gulp.task('default', ['watch']);