const del = require('del')

module.exports = () => {
  return del.sync('../public/css/**/*', { force: true })
}
