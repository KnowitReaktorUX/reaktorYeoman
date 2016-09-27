/**
 * ./app/index.js
 * Base Generator for Reaktor
 */
const generators = require('yeoman-generator');

module.exports = generators.Base.extend({

  constructor: function() {
    generators.Base.apply(this, arguments);
  },

  initalizing: {},
  prompting: {},
  configuring: {},
  default: {  },

  writing: {

    templateFiles: function() {
      // Copying template files
      this.directory(
        this.templatePath(),
        this.destinationPath()
      );
    }

  },

  conflicts: {},

  install: {

    npm: function() {
      // Installing Npm dependencies
      this.npmInstall();
    },

    bower: function() {
      // Installing Bower dependencies
      this.bowerInstall();
    }

  },

  end: {}

});
