/**
 * gulp/prompt.js
 * Defining all questions that the user is asked
 * -------------------------------------------------------------------------------------------------
 */
module.exports = [

  {
    type      : 'input',
    name      : 'PROJECT_NAME',
    message   : 'Project Name: ',
    default   : 'front-end-by-knowit'
  },

  {
    type      : 'input',
    name      : 'PROJECT_DESCRIPTION',
    message   : 'Project Description: ',
    default   : 'Front-end by Knowit'
  },

  {
    type      : 'confirm',
    name      : 'INCLUDE_SASS',
    message   : 'Do you want to use SASS pre-compiler?'
  },

  {
    type      : 'confirm',
    name      : 'INCLUDE_AUTOPREFIXER',
    message   : 'Do you want to use autoprefixer for css?'
  },

  {
    type      : 'list',
    name      : 'AUTOPREFIXER_BROWSERS',
    message   : 'How many browser versions do you want autoprefixer to support?',
    choices   : [
      'last 2 versions',
      'last 3 versions',
      'last 4 versions',
      'last 5 versions',
      'last 6 versions',
    ],
    when      : (answers) => {
      return answers.INCLUDE_AUTOPREFIXER;
    }
  },

  {
    type      : 'confirm',
    name      : 'INCLUDE_BROWSERIFY',
    message   : 'Do you want to bundle your JavaScript with Browserify?'
  },

  {
    type      : 'confirm',
    name      : 'INCLUDE_BABEL',
    message   : 'Do you want to write es2015 JavaScript with Babel?',
    when      : (answers) => {
      return answers.INCLUDE_BROWSERIFY;
    }
  }

]
