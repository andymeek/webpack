/**
 * Created by negin.basiri on 12/07/2016.
 */
"use strict";

const gulp = require('gulp');
const browserSync = require('browser-sync');
const reload = browserSync.reload;

gulp.task('watch', () => {

  gulp.watch('./src/scss/**/*.scss', () => {
    reload(['accStyle.css'], {
      stream: true
    });
  });

  gulp.watch('./src/components/**/*.js', () => {
    reload(['accScripts.js'], {
      stream: true
    });
  });

});
