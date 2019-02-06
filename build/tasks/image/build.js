const isdev = require('isdev')

const gulp = require('gulp')
const gulpif = require('gulp-if')
const imagemin = require('gulp-imagemin')
const imageminMozjpeg = require('imagemin-mozjpeg')

const message = require('../../lib/message')

module.exports = () => {
  return gulp.src('../resources/assets/images/**/*.{jpg,jpeg,png,gif,svg}')
    .pipe(gulpif(!isdev, imagemin([
      imageminMozjpeg({quality: 74})
    ])))
    .on('error', message.error('IMAGE: Minification'))
    .pipe(gulp.dest('../public/images'))
}
