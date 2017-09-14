const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const mkdirp = require('mkdirp-promise');
const {promisify} = require('util');
const readFileAsync = promisify(fs.readFile);
const writeFileAsync = promisify(fs.writeFile);
const accessAsync = promisify(fs.access);

const questions = [
  require('./questions/link'),
  require('./questions/title'),
  require('./questions/added-at'),
  require('./questions/tags'),
  require('./questions/type'),
  require('./questions/confirm-comments'),
  require('./questions/comments'),
  require('./questions/confirm-record')
];

const outputDir = path.resolve(__dirname, '../records');
console.log(outputDir);

inquirer
  .prompt(questions)
  .then(async (answers) => {
    if (!answers.confirmRecord) {
      process.exit(0);
    }

    console.log('Answers', answers);
    // TODO: filter answers

    await addRecord(answers);
  });

async function addRecord (record) {
  record = filterRecord(record);

  await mkdirp(outputDir);

  const year = (new Date(record.addedAt)).getFullYear();
  const filepath = path.resolve(__dirname, `../records/${year}.json`);

  const recordsExists = await fileExists(filepath);

  let records = [];
  if (recordsExists) {
    try {
      const rawRecords = await readFileAsync(filepath, 'utf-8');
      records = JSON.parse(rawRecords);
    } catch (e) {
      throw new Error(`Unable to read and parse record: ${filepath}`);
    }
  }

  records.push(record);

  await writeFileAsync(filepath, JSON.stringify(records, null, 2));
}

/**
 * Whitelist allowed record properties
 * @method filterRecord
 * @param  {Object}
 * @return {Object}
 */
function filterRecord (record) {
  return {
    href: record.href,
    title: record.title,
    addedAt: record.addedAt,
    tags: record.tags,
    type: record.type
  };
}

function fileExists (path) {
  return accessAsync(path, fs.constants.F_OK)
    .then(() => true, () => false);
}
