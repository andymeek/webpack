/**
 * Created by negin.basiri on 12/07/2016.
 */
'use strict';

const gulp = require('gulp');
const webpack = require('webpack-stream');
const concat = require('gulp-concat');

gulp.task('run-webpack', () => {
  return gulp.src('./src/app.js')
    .pipe(webpack(require('../webpack.config.js')))
    .pipe(gulp.dest('./dist/js'));
});

gulp.task('scripts', ['lint', 'run-webpack'], () => {
  return gulp.src([
    './src/modernizr.js',
    './src/vendor.js'
  ])
    .pipe(concat('vendor.bundle.js'))
    .pipe(gulp.dest('./dist/js'));
});
