const fs = require('fs');
const path = require('path');
const mkdirp = require('mkdirp-promise');
const {promisify} = require('util');

const Record = require('./Record');
const readFileAsync = promisify(fs.readFile);
const writeFileAsync = promisify(fs.writeFile);
const accessAsync = promisify(fs.access);

module.exports = class Storage {
  constructor (filepath) {
    this.filepath = filepath;
  }

  // ###########################################################################
  // Static methods
  // ###########################################################################

  static fileExists (path) {
    return accessAsync(path, fs.constants.F_OK)
      .then(() => true, () => false);
  }

  static async createDirFromPath (filepath) {
    const dirpath = path.dirname(filepath);
    return mkdirp(dirpath);
  }

  // ###########################################################################
  // Class Methods
  // ###########################################################################

  async readRecords () {
    const recordsExist = await Storage.fileExists(this.filepath);

    if (!recordsExist) {
      return [];
    }

    const rawRecords = await readFileAsync(this.filepath, 'utf-8');
    return JSON.parse(rawRecords);
  }

  async addRecord (record) {
    if (!Record.validate(record)) {
      throw new Error('Trying to save invalid record');
    }

    const records = await this.readRecords();
    records.push(record);
    await this.overwriteRecords(records);
  }

  async overwriteRecords (records) {
    await writeFileAsync(this.filepath, JSON.stringify(records, null, 2));
  }
};
