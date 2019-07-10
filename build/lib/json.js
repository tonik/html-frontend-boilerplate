const fs = require('fs')
const path = require('path')

module.exports = (dir) => {
  let dataset = {}
  let dirpath = path.resolve(dir)

  if (fs.existsSync(dirpath)) {
    let files = fs.readdirSync(dirpath)

    files.forEach((file) => {
      let filename = path.resolve(`${dirpath}/${file}`)
      delete require.cache[filename]
      dataset[path.basename(file, '.json')] = require(`${dirpath}/${file}`)
    })
  }

  return dataset
}
