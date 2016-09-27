/**
 * ./app/index.js
 * Base Generator for Reaktor
 */
const generators = require('yeoman-generator');

module.exports = generators.Base.extend({

  constructor: function() {
    generators.Base.apply(this, arguments);

    /**
     * helpers / private methods
     * -------------------------
     */
    this.answers;

  },

  /**
   * actions
   * in running order
   * ----------------
   */

  // Your initialization methods
  // (checking current project state, getting configs, etc)
  initalizing: {

  },

  // Where you prompt users for options
  // (where you'd call this.prompt())
  prompting: function() {

    return this.prompt([
      {
        type: 'list',
        name: 'style',
        message: 'Are you going to use SASS?',
        choices: [
          'yes',
          'no'
        ]
      },
      {
        type: 'list',
        name: 'javascript',
        message: 'Are you going to use React?',
        choices: [
          'yes',
          'no'
        ]
      }
    ])

    .then(function(answers) {
      this.answers = answers;
    }.bind(this));

  },

  // Saving configurations and configure the project
  // (creating .editorconfig files and other metadata files)
  configuring: {
    testing: function() {
      console.log(this.answers);
      console.log(this.destinationRoot());
    }
  },

  // If the method name doesn't match a priority,
  // it will be pushed to this group.
  default: {

  },

  // Where you write the generator specific files
  // (routes, controllers, etc)
  writing: {

    gulpfile: function() {
      this.fs.copyTpl(
        this.templatePath('gulpfile.js'),
        this.destinationPath('gulpfile.js'),
        {
          includeSass: this.answers.style,
          includeReact: this.answers.javascript
        }
      );
    }

  },

  // Where conflicts are handled
  // (used internally)
  conflicts: {

  },

  // Where installation are run
  // (npm, bower)
  install: {

  },

  //  Called last, cleanup, say good bye, etc
  end: {

  }

});
