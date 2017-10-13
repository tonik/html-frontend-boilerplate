const gulp = require('gulp')
const fontmin = require('gulp-fontmin')

const message = require('../../lib/message')
const browsersync = require('../../lib/browsersync')

module.exports = () => {
  return gulp.src('../resources/assets/fonts/**/*.ttf')
    .pipe(fontmin())
    .on('error', message.error('FONT: Minification'))
    .pipe(gulp.dest('../public/fonts'))
    .pipe(browsersync.stream())
}
