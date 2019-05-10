const gulp = require('gulp')
const message = require('./lib/message')

const browsersync = require('browser-sync').create()
const reload = browsersync.reload

// Tasks are using `NODE_ENV` variable to adjust its settings
// to working enviourment. It is required to propertly
// run tasks so we cant process without it.
if (!process.env.NODE_ENV) {
  throw new Error('Please setup environment variable [NODE_ENV] before building.')
}

/*
|--------------------------------------------------------------------------
| SASS Tasks
|--------------------------------------------------------------------------
*/
gulp.task('sass:clean', require('./tasks/sass/clean'))
gulp.task('sass:lint', require('./tasks/sass/lint'))
gulp.task('sass:build', require('./tasks/sass/build'))

/*
|--------------------------------------------------------------------------
| HTML Tasks
|--------------------------------------------------------------------------
*/
gulp.task('html:clean', require('./tasks/html/clean'))
gulp.task('html:build', require('./tasks/html/build'))

/*
|--------------------------------------------------------------------------
| Fonts Tasks
|--------------------------------------------------------------------------
*/
gulp.task('font:clean', require('./tasks/font/clean'))
gulp.task('font:build', require('./tasks/font/build'))

/*
|--------------------------------------------------------------------------
| Images Tasks
|--------------------------------------------------------------------------
*/
gulp.task('image:clean', require('./tasks/image/clean'))
gulp.task('image:build', require('./tasks/image/build'))

/*
|--------------------------------------------------------------------------
| Svg Tasks
|--------------------------------------------------------------------------
*/
gulp.task('svg:build', require('./tasks/svg/build'))

/*
|--------------------------------------------------------------------------
| JavaScript Tasks
|--------------------------------------------------------------------------
*/
gulp.task('javascript:clean', require('./tasks/javascript/clean'))
gulp.task('javascript:lint', require('./tasks/javascript/lint'))
gulp.task('javascript:build', ['javascript:clean'], require('./tasks/javascript/build'))

/*
|--------------------------------------------------------------------------
| Domain Tasks
|--------------------------------------------------------------------------
|
| A domain specific tasks for each part of the building process.
| They compose a complete building pipline for each domain.
|
*/
gulp.task('html', ['html:clean', 'html:build'])
gulp.task('font', ['font:clean', 'font:build'])
gulp.task('image', ['image:clean', 'image:build'])
gulp.task('svg', ['svg:build'])
gulp.task('sass', ['sass:clean', 'sass:lint', 'sass:build'])
gulp.task('javascript', ['javascript:clean', 'javascript:lint', 'javascript:build'])

/*
|--------------------------------------------------------------------------
| Synchornize Browser Tasks
|--------------------------------------------------------------------------
|
| Bootstraps a BrowserSync and starts a localhost development. Compiled
| files are outputted into `public` directory, so we are
| telling BrowserSync to to use it as a base.
|
*/
gulp.task('sync', () => {
  browsersync.init({
    open: false,
    server: { baseDir: '../public' }
  })
})

/*
|--------------------------------------------------------------------------
| Watching Tasks
|--------------------------------------------------------------------------
|
| Here is a collection of watching tasks. They look for the files
| changes and runs building tasks. We're watching each domain
| and recompiling separetly for better performance.
|
*/
gulp.task('watch', ['sync'], () => {
  gulp.watch('resources/assets/sass/**/*.scss', { cwd: '../' }, ['sass', reload])
    .on('error', message.error('WATCH: Sass'))

  gulp.watch('resources/assets/js/**/*.js', { cwd: '../' }, ['javascript', reload])
    .on('error', message.error('WATCH: Javascript'))

  gulp.watch('resources/assets/fonts/**/*.{eot,woff,woff2,ttf,svg}', { cwd: '../' }, ['font', reload])
    .on('error', message.error('WATCH: Fonts'))

  gulp.watch('resources/assets/images/**/*.{jpg,jpeg,png,gif,svg}', { cwd: '../' }, ['image', reload])
    .on('error', message.error('WATCH: Images'))

  gulp.watch('src/icons/**/*.svg', { cwd: '../' }, ['svg', reload])
    .on('error', message.error('WATCH: SVG'))

  gulp.watch('src/**/*.html', { cwd: '../' }, ['html', reload])
    .on('error', message.error('WATCH: Views'))
})

/*
|--------------------------------------------------------------------------
| Default Task
|--------------------------------------------------------------------------
|
| A default task is being called when you run `gulp` without any task
| specified. As you can see, we are running here all domains
| tasks and completely building the whole project.
|
*/
gulp.task('default', ['sass', 'javascript', 'font', 'image', 'svg', 'html'])
