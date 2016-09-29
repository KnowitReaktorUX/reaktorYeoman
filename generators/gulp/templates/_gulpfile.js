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
<%_ if ( _.INCLUDE_BROWSERIFY ) { _%>

gulp.task('js:bundle', [], require('./gulp-tasks/task-javascript.js'));
<%_ } _%>
<%_ if ( _.INCLUDE_FABRICATOR ) { _%>

gulp.task('assemble:flatten', ['assemble'], require('./gulp-tasks/task-assemble-flatten.js'));

gulp.task('assemble', [], require('./gulp-tasks/task-assemble.js'));

gulp.task('assemble:temp:clean', ['assemble:flatten'],
  require('./gulp-tasks/task-clean.js')(process.env.TEMP_MOCKUP_PATH));

gulp.task('copy-assets', [], require('./gulp-tasks/task-copy-assets.js'));
<%_ } _%>
<%_ if ( _.INCLUDE_FABRICATOR && ! _.INCLUDE_AUTOPREFIXER) { _%>

gulp.task('copy-css', [], require('./gulp-tasks/task-copy-css.js'));
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
<%_ if ( _.INCLUDE_BROWSERIFY && ( !_.INCLUDE_AUTOPREFIXER && !_.INCLUDE_SASS )) { _%>
  'js:bundle'
<%_ } else if ( _.INCLUDE_BROWSERIFY ) {_%>
  ,'js:bundle'
<%_ } _%>
<%_ if ( _.INCLUDE_FABRICATOR && ( !_.INCLUDE_AUTOPREFIXER && !_.INCLUDE_SASS && !_.INCLUDE_BROWSERIFY )) { _%>
  'assemble:temp:clean'
  ,'copy-assets'
<%_ } else if ( _.INCLUDE_FABRICATOR) { _%>
  ,'assemble:temp:clean'
  ,'copy-assets'
<%_ } _%>
<%_ if ( _.INCLUDE_FABRICATOR && ( !_.INCLUDE_AUTOPREFIXER && !_.INCLUDE_SASS )) { _%>
  ,'copy-css'
<%_ } _%>
];

gulp.task('default', defaultDeps, () => {

});
