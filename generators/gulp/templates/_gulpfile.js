'use strict';

/**
 * devDependencies
 * -------------------------------------------------------------------------------------------------
 */
const gulp = require('gulp');

/**
 * tasks
 * -------------------------------------------------------------------------------------------------
 */
<%_ if ( _.INCLUDE_SASS ) { _%>
gulp.task('sass:compile', [], require('./gulp-tasks/task-sass.js'));
<%_ } _%>
<%_ if ( _.INCLUDE_AUTOPREFIXER ) { _%>

const autoDeps = [<%_ if ( _.INCLUDE_SASS ) { _%> 'sass:compile' <%_ } _%>];
gulp.task('css:autoprefix', autoDeps, require('./gulp-tasks/task-autoprefixer.js'));
<%_ } _%>

/**
 * run tasks
 * -------------------------------------------------------------------------------------------------
 */
const defaultDeps = [
<%_ if ( _.INCLUDE_AUTOPREFIXER ) { _%>
  'css:autoprefix'
<%_ } else if ( _.INCLUDE_SASS ) { _%>
  'sass:compile'
<%_ } _%>
];

gulp.task('default', defaultDeps, () => {

});
