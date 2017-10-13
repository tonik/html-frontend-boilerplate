const del = require('del')

module.exports = () => {
  return del.sync('../public/fonts/**/*', { force: true })
}
