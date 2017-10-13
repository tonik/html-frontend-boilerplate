const isdev = require('isdev')

const gulp = require('gulp')
const gulpif = require('gulp-if')

const uglify = require('gulp-uglify')
const rollup = require('rollup-stream')
const buffer = require('vinyl-buffer')
const source = require('vinyl-source-stream')
const babel = require('rollup-plugin-babel')
const resolve = require('rollup-plugin-node-resolve')
const commonjs = require('rollup-plugin-commonjs')

const message = require('../../lib/message')
const browsersync = require('../../lib/browsersync')

module.exports = () => {
  return rollup({
      format: 'iife',
      input: '../resources/assets/js/main.js',
      plugins: [
        resolve(),
        commonjs(),
        babel()
      ]
    })
    .on('error', message.error('JAVASCRIPT: Bundling'))
    .pipe(source('main.js'))
    .pipe(buffer())
    .pipe(gulpif(!isdev, uglify()))
    .on('error', message.error('JAVASCRIPT: Minification'))
    .pipe(gulp.dest('../public/js'))
    .pipe(browsersync.stream())
}
