'use strict';

require('dotenv').config();

const gulp = require('gulp');
const del = require('del');

module.exports = (pathToClean) => {
  return () => {
    return del(pathToClean);
  }
}
