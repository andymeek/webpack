/**
 * Created by negin.basiri on 12/07/2016.
 */
const gulp = require('gulp');
const eslint = require('gulp-eslint');

/**
 * Lint JavaScript with ESLint
 */
gulp.task('lint', () => {
  return gulp.src([
    'src/components/**/*.js',
    'tasks/*.js'
  ])
    .pipe(eslint())
    .pipe(eslint.formatEach('compact', process.stderr));
});
