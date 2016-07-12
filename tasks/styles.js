/**
 * Created by negin.basiri on 12/07/2016.
 */
const gulp = require('gulp');
const sass = require('gulp-sass');

gulp.task('styles', () => {
  return gulp.src('./src/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist/css'));
});
