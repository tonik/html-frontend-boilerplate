const del = require('del')

module.exports = () => {
  return del.sync('../public/**/*.html', { force: true })
}
