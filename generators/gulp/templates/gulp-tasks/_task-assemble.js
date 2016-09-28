'use strict';

require('dotenv').config();

const gulp = require('gulp');
const assemble = require('fabricator-assemble');

const options = {
  layout: 'default',
  layouts: 'app/views/layouts/*',
  layoutIncludes: 'app/views/layouts/includes/*',
  views: ['app/views/**/*', '!app/views/+(layouts)/**'],
  materials: 'app/materials/**/*',
  data: 'app/data/**/*.{json,yml}',
  docs: 'app/docs/**/*.md',
  keys: {
    materials: 'materials',
    views: 'views',
    docs: 'docs',
  },
  helpers: {},
  logErrors: true,
  onError: (error) => {},
  dest: process.env.TEMP_MOCKUP_PATH
};

module.exports = () => {
  return assemble(options);
};
