const gulp = require('gulp')
const stylelint = require('gulp-stylelint')

const message = require('../../lib/message')

module.exports = () => {
  return gulp.src('../resources/assets/sass/**/*.scss')
    .pipe(stylelint({
      reporters: [{ formatter: 'string', console: true }]
    }))
    .on('error', message.error('SASS: Linting'))
}
