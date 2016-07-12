
/**
 * Created by negin.basiri on 6/07/2016.
 */
"use strict";


const requireDir = require('require-dir');
const gulp = require('gulp');

requireDir('./tasks');

gulp.task('default', [
  'serve'
]);

