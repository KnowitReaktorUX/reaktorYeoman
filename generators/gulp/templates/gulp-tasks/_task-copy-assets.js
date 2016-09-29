'use strict';

require('dotenv').config();

const gulp = require('gulp');

module.exports = () => {
  gulp.src('app/assets/**/*.*')
    .pipe(gulp.dest(process.env.ASSETS_PATH));
};
