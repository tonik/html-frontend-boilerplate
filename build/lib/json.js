const fs = require('fs')
const path = require('path')

module.exports = (dir) => {
  let dataset = {}
  let files = fs.readdirSync('../resources/json/')

  files.forEach(file => {
    dataset[path.basename(file, '.json')] = require(`../../resources/json/${file}`)
  })

  return dataset
}
