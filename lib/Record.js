
const uuidv1 = require('uuid/v1');

module.exports = class Record {
  static createUiid () {
    return uuidv1();
  }

  static createFromObject (record) {
    const newRecord = Record.filter(record);

    if (!newRecord.id) {
      newRecord.id = Record.createUiid();
    }

    return newRecord;
  }

  static filter (record) {
    return {
      href: record.href,
      title: record.title,
      addedAt: record.addedAt,
      tags: record.tags,
      type: record.type,
      comments: record.comments || []
    };
  }

  static validate (record) {
    // TODO: create record validation
    return true;
  }
};
