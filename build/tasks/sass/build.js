const isdev = require('isdev')

const gulp = require('gulp')
const gulpif = require('gulp-if')

const sass = require('gulp-sass')
const cleancss = require('gulp-clean-css')
const prefix = require('gulp-autoprefixer')

const message = require('../../lib/message')

module.exports = () => {
  return gulp.src('../resources/assets/sass/app.scss')
    .pipe(sass())
    .on('error', message.error('SASS: Compilation'))
    .pipe(prefix({
      browsers: ['last 4 versions'],
      cascade: false
    }))
    .pipe(gulpif(!isdev, cleancss()))
    .pipe(gulp.dest('../public/css'))
}
