'use strict';

const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');

module.exports = () => {
  gulp.src('src/app.css')
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(gulp.dest('dist'))
};
