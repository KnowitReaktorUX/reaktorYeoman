'use strict';

const gulp = require('gulp');

<% if (_.INCLUDE_SASS) { %>
  gulp.task('sass:compile', [], require('./gulp-tasks/gulp-sass.js'));
<% } %>

/**
 * Default run task
 * -------------------------------------------------------------------------------------------------
 */
const defaultDeps = [
  <% if (_.INCLUDE_SASS) { %> 'sass:compile' <% } %>
];

gulp.task('default', defaultDeps, () => {

});
