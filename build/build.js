const gulp = require('gulp')
const notify = require('gulp-notify')

const browsersync = require('browser-sync').create()
const reload = browsersync.reload

if (! process.env.NODE_ENV) {
  throw new Error('Please setup environment variable [NODE_ENV] before building.')
}

gulp.task('sass:clean', require('./tasks/sass/clean'))
gulp.task('sass:lint', require('./tasks/sass/lint'))
gulp.task('sass:build', require('./tasks/sass/build'))

gulp.task('html:clean', require('./tasks/html/clean'))
gulp.task('html:build', require('./tasks/html/build'))

gulp.task('font:clean', require('./tasks/font/clean'))
gulp.task('font:build', require('./tasks/font/build'))

gulp.task('image:clean', require('./tasks/image/clean'))
gulp.task('image:build', require('./tasks/image/build'))

gulp.task('javascript:clean', require('./tasks/javascript/clean'))
gulp.task('javascript:lint', require('./tasks/javascript/lint'))
gulp.task('javascript:build', ['javascript:clean'], require('./tasks/javascript/build'))

gulp.task('html', ['html:clean', 'html:build'])
gulp.task('font', ['font:clean', 'font:build'])
gulp.task('image', ['image:clean', 'image:build'])
gulp.task('sass', ['sass:clean', 'sass:lint', 'sass:build'])
gulp.task('javascript', ['javascript:clean', 'javascript:lint', 'javascript:build'])

gulp.task('sync', () => {
  browsersync.init({
    reloadDelay: 50,
    open: false,
    server: { baseDir: '../public' }
  })
})

gulp.task('watch', ['sync'], () => {
  gulp.watch('../resources/assets/sass/**/*.scss', ['sass', reload])
    .on('error', notify.onError({
      title: 'WATCH: Sass',
      message: '\n<%= error.message %>'
    }))

  gulp.watch('../resources/assets/js/**/*.js', ['javascript', reload])
    .on('error', notify.onError({
      title: 'WATCH: Javascript',
      message: '\n<%= error.message %>'
    }))

  gulp.watch('../resources/assets/fonts/**/*.ttf', ['font', reload])
    .on('error', notify.onError({
      title: 'WATCH: Fonts',
      message: '\n<%= error.message %>'
    }))

  gulp.watch('../resources/assets/images/**/*.{jpg,jpeg,png,gif,svg}', ['image', reload])
    .on('error', notify.onError({
      title: 'WATCH: Images',
      message: '\n<%= error.message %>'
    }))

  gulp.watch('../resources/views/**/*.html', ['html', reload])
    .on('error', notify.onError({
      title: 'WATCH: Views',
      message: '\n<%= error.message %>'
    }))
})

gulp.task('default', ['sass', 'javascript', 'font', 'image', 'html'])
