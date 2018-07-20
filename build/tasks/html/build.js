const gulp = require('gulp')
const data = require('gulp-data')
const nunjucks = require('gulp-nunjucks-render')

const json = require('../../lib/json')
const message = require('../../lib/message')

module.exports = () => {
  return gulp.src('../src/*.html')
    .pipe(data(json('../resources/json/')))
    .pipe(nunjucks({
      path: ['../src']
    }))
    .on('error', message.error('NUNJUCKS: Compilation'))
    .on('error', function (err) {
      if (err) {
        console.error('error', err.message)

        process.exit(1)
      }
    })
    .pipe(gulp.dest('../public'))
}
