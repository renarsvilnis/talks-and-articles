const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const mkdirp = require('mkdirp-promise');
const {promisify} = require('util');
const readFileAsync = promisify(fs.readFile);
const writeFileAsync = promisify(fs.writeFile);
const accessAsync = promisify(fs.access);

const {storageDir} = require('./config');
const filterRecord = require('./helpers/filterRecord');

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

inquirer
  .prompt(questions)
  .then(async (answers) => {
    if (!answers.confirmRecord) {
      process.exit(0);
    }

    await addRecord(answers);
  });

async function addRecord (record) {
  record = filterRecord(record);

  await mkdirp(storageDir);

  const year = (new Date(record.addedAt)).getFullYear();
  const filepath = path.resolve(storageDir, `${year}.json`);

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

function fileExists (path) {
  return accessAsync(path, fs.constants.F_OK)
    .then(() => true, () => false);
}
