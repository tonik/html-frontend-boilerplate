const notify = require('gulp-notify')

module.exports = {
  error: (title) => {
    return notify.onError({
      title: title,
      message: '\n<%= error.message %>'
    })
  }
}
