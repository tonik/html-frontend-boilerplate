const gulp = require('gulp')
const svgmin = require('gulp-svgmin')

const message = require('../../lib/message')

module.exports = () => {
  return gulp.src('../src/svg/**/*.svg')
    .pipe(svgmin({
      plugins: [{
        removeViewBox: false
      }, {
        removeComments: false
      }, {
        cleanupNumericValues: {
          floatPrecision: 2
        }
      }],
      js2svg: {
        pretty: true
      }
    }))
    .on('error', message.error('SVG: Optimization'))
    .pipe(gulp.dest('../src/svg'))
}
