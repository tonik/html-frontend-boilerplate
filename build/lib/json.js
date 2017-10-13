const fs = require('fs')
const path = require('path')

module.exports = (dir) => {
  let dataset = {}
  let files = fs.readdirSync('../data/')

  files.forEach(file => {
    dataset[path.basename(file, '.json')] = require(`../../data/${file}`)
  })

  return dataset
}
