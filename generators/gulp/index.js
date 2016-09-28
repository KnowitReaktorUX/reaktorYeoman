'use strict';

/**
 * ./app/index.js
 * Base Generator for Reaktor
 */
const beautify = require('gulp-beautify');
const generators = require('yeoman-generator');
const filter = require('gulp-filter');
const questions = require('./questions');

module.exports = generators.Base.extend({

  constructor: function() {
    generators.Base.apply(this, arguments);

    this.answers;
  },

  initalizing: {},

  prompting: function() {
    return this.prompt(questions)
      .then((answers) => {
        this.answers = answers;
      });
  },

  configuring: {},
  default: {},

  writing: {

    packageJson: function() {
      this.fs.copyTpl(
        this.templatePath('_package.json'),
        this.destinationPath('package.json'),
        { _: this.answers }
      );
    },

    gulpfileJS: function() {
      this.fs.copyTpl(
        this.templatePath('_gulpfile.js'),
        this.destinationPath('gulpfile.js'),
        { _: this.answers }
      );
    },

    gulpTasks: function() {

      if (this.answers.INCLUDE_SASS) {
        this.fs.copyTpl(
          this.templatePath('./gulp-tasks/_task-sass.js'),
          this.destinationPath('./gulp-tasks/task-sass.js'),
          { _: this.answers }
        );
      }

      if (this.answers.INCLUDE_AUTOPREFIXER) {
        this.fs.copyTpl(
          this.templatePath('./gulp-tasks/_task-autoprefixer.js'),
          this.destinationPath('./gulp-tasks/task-autoprefixer.js'),
          { _: this.answers }
        );
      }

      if (this.answers.INCLUDE_BROWSERIFY) {
        this.fs.copyTpl(
          this.templatePath('./gulp-tasks/_task-javascript.js'),
          this.destinationPath('./gulp-tasks/task-javascript.js'),
          { _: this.answers }
        );
      }

      if (this.answers.INCLUDE_FABRICATOR) {

        this.fs.copyTpl(
          this.templatePath('./gulp-tasks/_task-assemble-flatten.js'),
          this.destinationPath('./gulp-tasks/task-assemble-flatten.js'),
          { _: this.answers }
        );

        this.fs.copyTpl(
          this.templatePath('./gulp-tasks/_task-assemble.js'),
          this.destinationPath('./gulp-tasks/task-assemble.js'),
          { _: this.answers }
        );
      }

    },

    envFile: function() {
      this.fs.copyTpl(
        this.templatePath('_.env'),
        this.destinationPath('.env'),
        { _: this.answers }
      );
    },

    gitignoreFile: function() {
      this.copy(
        this.templatePath('_.gitignore'),
        this.destinationPath('.gitignore')
      );
    },

    babelrcFile: function() {
      if (this.answers.INCLUDE_BABEL) {
        this.copy(
          this.templatePath('_.babelrc'),
          this.destinationPath('.babelrc')
        );
      }
    },

    appFiles: function() {

      if ( this.answers.INCLUDE_BROWSERIFY ) {
        this.copy(
          this.templatePath('app/_main.js'),
          this.destinationPath('app/main.js')
        );
      }

      if ( this.answers.INCLUDE_SASS ) {
        this.fs.copyTpl(
          this.templatePath('app/_main.scss'),
          this.destinationPath('app/main.scss'),
          { _: this.answers }
        );
      } else if ( this.answers.INCLUDE_AUTOPREFIXER ) {
        this.fs.copyTpl(
          this.templatePath('app/_main.css'),
          this.destinationPath('app/main.css'),
          { _: this.answers }
        );
      }

    },

    fabricatorFiles: function() {
      if ( this.answers.INCLUDE_FABRICATOR ) {

        this.fs.copyTpl(
          this.templatePath('app/views/_index.html'),
          this.destinationPath('app/views/index.html'),
          { _: this.answers }
        );

        this.fs.copyTpl(
          this.templatePath('app/views/layouts/_default.html'),
          this.destinationPath('app/views/layouts/default.html'),
          { _: this.answers }
        );

        this.copy(
          this.templatePath('app/materials/components/well/_well.html'),
          this.destinationPath('app/materials/components/well/well.html')
        );

        if ( this.answers.INCLUDE_SASS ) {
          this.copy(
            this.templatePath('app/materials/components/well/_well.scss'),
            this.destinationPath('app/materials/components/well/_well.scss')
          );
        }

      }
    }

  },

  conflicts: {},

  install: {

    npm: function() {
      //this.npmInstall();
    }

  },

  end: {

  }

});
