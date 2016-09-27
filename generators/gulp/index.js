/**
 * ./app/index.js
 * Base Generator for Reaktor
 */
const CSON = require('cson');
const generators = require('yeoman-generator');

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
