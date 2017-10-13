const gulp = require('gulp')
const data = require('gulp-data')
const nunjucks = require('gulp-nunjucks-render')

const json = require('../../lib/json')
const message = require('../../lib/message')
const browsersync = require('../../lib/browsersync')

module.exports = () => {
  return gulp.src('../resources/views/*.html')
    .pipe(data(json()))
    .pipe(nunjucks({
      path: ['../resources/views']
    }))
    .on('error', message.error('NUNJUCKS: Compilation'))
    .pipe(gulp.dest('../public'))
    .pipe(browsersync.stream())
}
