import fs from 'fs'
import path from 'path'
import yaml from 'js-yaml'

export function getCollection(collectionName) {
  const directory = path.join(process.cwd(), 'src', 'collections', collectionName)
  const fileNames = fs.readdirSync(directory)

  return fileNames.map(fileName => {
    const fullPath = path.join(directory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const data = yaml.load(fileContents)

    return {
      ...data,
      id: fileName.replace(/\.yml$/, '')
    }
  })
}

