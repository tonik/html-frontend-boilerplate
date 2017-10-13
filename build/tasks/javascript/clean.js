const del = require('del')

module.exports = () => {
  return del.sync('../public/js/**/*', { force: true })
}
