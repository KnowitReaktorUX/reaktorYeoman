'use strict';

require('dotenv').config();

const gulp = require('gulp');
const browserify = require('browserify');
const source = require('vinyl-source-stream');
<%_ if ( _.INCLUDE_BABEL ) { _%>
const babelify = require('babelify');
<%_ } _%>
const flatten = require('gulp-flatten');

module.exports = () => {
  return browserify({
    entries: process.env.JS_ENTRY_FILE,
    debug: true
  })
  <%_ if ( _.INCLUDE_BABEL ) { _%>
    .transform('babelify')
  <%_ } _%>
    .bundle()
    .pipe(source(process.env.JS_ENTRY_FILE))
    .pipe(flatten())
    .pipe(gulp.dest(process.env.BUILD_PATH))
};
