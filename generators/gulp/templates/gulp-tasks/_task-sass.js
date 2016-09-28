'use strict';

require('dotenv').config();

const gulp = require('gulp');
const sass = require('gulp-sass');

module.exports = () => {
  return gulp.src(process.env.SCSS_ENTRY_FILE)
    .pipe(sass().on('error', sass.logError))
    <%_ if ( _.INCLUDE_AUTOPREFIXER ) { _%>
    .pipe(gulp.dest(process.env.TEMP_PATH));
    <%_ } else { _%>
    .pipe(gulp.dest(process.env.BUILD_PATH));
    <%_ } _%>
};
