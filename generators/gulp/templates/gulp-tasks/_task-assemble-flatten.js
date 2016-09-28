'use strict';

require('dotenv').config();

const gulp = require('gulp');
const flatten = require('gulp-flatten');

module.exports = () => {
  return gulp.src(`${process.env.TEMP_MOCKUP_PATH}/**/*.html`)
    .pipe(flatten())
    .pipe(gulp.dest(process.env.MOCKUP_PATH));
};
