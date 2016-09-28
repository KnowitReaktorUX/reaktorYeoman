/**
 * ./app/index.js
 * Base Generator for Reaktor
 */
const CSON = require('cson');
const beautify = require('gulp-beautify');
const generators = require('yeoman-generator');
const filter = require('gulp-filter');

module.exports = generators.Base.extend({

  constructor: function() {
    generators.Base.apply(this, arguments);

    this.answers;
  },

  initalizing: {},

  prompting: function() {
    const filePath = this.templatePath('../prompt.cson');
    const questions = CSON.requireFile(filePath).questions;

    return this.prompt(questions)
      .then((answers) => { this.answers = answers; });
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

      if (this.answers.INCLUDE_SASS) {
        this.fs.copyTpl(
          this.templatePath('./gulp-tasks/_task-autoprefixer.js'),
          this.destinationPath('./gulp-tasks/task-autoprefixer.js'),
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
    }

  },

  conflicts: {},

  install: {

    npm: function() {
      // run npm install
    }

  },

  end: {

  }

});
