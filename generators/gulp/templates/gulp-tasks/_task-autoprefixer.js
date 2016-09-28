'use strict';

require('dotenv').config();

const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');

module.exports = () => {
<%_ if ( _.INCLUDE_SASS ) { _%>
  gulp.src(process.env.CSS_TEMP_FILE)
<%_ } else { _%>
  gulp.src(process.env.CSS_ENTRY_FILE)
<%_ } _%>
    .pipe(autoprefixer({
      browsers: ['<%= _.AUTOPREFIXER_BROWSERS %>'],
      cascade: false
    }))
    .pipe(gulp.dest(process.env.BUILD_PATH))
};
