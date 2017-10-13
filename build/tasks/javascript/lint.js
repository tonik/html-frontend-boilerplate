const gulp = require('gulp')
const eslint = require('gulp-eslint')

const message = require('../../lib/message')

module.exports = () => {
  return gulp.src('../resources/assets/js/**/*.js')
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError())
    .on('error', message.error('JAVASCRIPT: Linting'))
}
