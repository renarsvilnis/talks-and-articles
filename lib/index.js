'use strict'

const fsp = require('fs-promise')
const path = require('path')

const DATA_FILEPATH = path.join(__dirname, '../data')

// const VIDEO_SIGN = ':tv:'
// const NOTEBOOK_SIGN = ':notebook:'

// const entry = {
//   video: true,
//   mark: true,
//   title: 'Building a Media Player #5',
//   href: 'https://youtu.be/dPGfRKNEhd8',
//   comments: [
//     'Shows method of adding/removing hash for static files for versioning',
//     'Shows method how to invalidate service workers'
//   ]
// }

async function parseData () {
  let years = await fsp.readdir(DATA_FILEPATH)

  const results = await Promise.all(years.map((year) => parseYear(year, path.join(DATA_FILEPATH, year))))

  return years.map((year, i) => ({name: year, files: results[i]}))
}

async function parseYear (year, yearPath) {
  // Get all JSON files of the year
  let fileList = await fsp.readdir(yearPath)

  const validFileRegex = /\.(js|json)$/
  fileList = fileList.filter(f => f.match(validFileRegex))

  // Read contents of each JSON file
  return await Promise.all(fileList.map((file) => parseFile(file, path.join(yearPath, file))))
}

async function parseFile (file, filepath) {
  // fs way
  // const contents = await fsp.readFile(filepath, 'utf8')
  // const json = JSON.parse(contents)

  // require way
  const json = require(filepath)

  return {
    name: file,
    json
  }
}

// function convertEntryToMd (data) {
//   validateEntry(data)
//
//   const entry = [
//     data.video && VIDEO_SIGN,
//     data.mark && NOTEBOOK_SIGN,
//     `[${data.title}](${data.href})`
//   ]
//   const entryStr = entry.filter((e) => e).join(' ')
//
//   const comments = Array.isArray(data.comments) ? data.comments : [data.comments]
//   const commentsStr = comments.reduce((str, c) => str + `\n  - ${c}`, '')
//
//   return `${entryStr}${commentsStr}`
// }
//
// function validateEntry (entry) {
//   if (!entry.title) {
//     throw new Error('Missing title for entry:', JSON.stringify(entry))
//   }
// }

function collectStatistics (data) {
  const statistics = data.map((year) => {
    let totalArticles = 0
    let totalVideos = 0

    year.files.forEach((file) => {
      file.json.forEach((row) => {
        totalArticles++

        if (row.video) {
          totalVideos++
        }
      })
    })

    return {
      totalArticles,
      totalVideos
    }
  })

  return statistics.reduce((stats, yearStats) => {
    return {
      totalArticles: stats.totalArticles + yearStats.totalArticles,
      totalVideos: stats.totalVideos + yearStats.totalVideos
    }
  }, {totalArticles: 0, totalVideos: 0})
}

parseData()
  .then((data) => {
    // console.log(data)
    console.log(collectStatistics(data))
  })

// console.log(convertEntryToMd(entry))
