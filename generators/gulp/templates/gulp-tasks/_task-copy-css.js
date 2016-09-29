'use strict';

require('dotenv').config();

const gulp = require('gulp');

module.exports = () => {
  gulp.src(process.env.CSS_ENTRY_FILE)
    .pipe(gulp.dest(process.env.BUILD_PATH));
};
