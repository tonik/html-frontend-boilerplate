const del = require('del')

module.exports = () => {
  return del.sync('../public/images/**/*', { force: true })
}
