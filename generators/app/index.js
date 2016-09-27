/**
 * ./app/index.js
 * Base Generator for Reaktor
 *
 * This generator fetches it's template files from
 * https://github.com/KnowitReaktorUX/reaktorbase
 * and copies it to the destination path.
 * -------------------------------------------------------------------------------------------------
 */
const generators = require('yeoman-generator');
const download = require('download-github-repo');

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
      download('KnowitReaktorUX/reaktorbase', this.destinationPath(), function(err) {
        if (err) {
          this.log('error: ', err);
          return;
        }
      });
    }

  },

  conflicts: {},

  install: {

    npm: function() {
      // Installing Npm dependencies
      this.npmInstall();
    },

  },

  end: {}

});
