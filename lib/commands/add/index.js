const inquirer = require('inquirer');

const Record = require('../../Record');

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

module.exports = function addCommandFactory ({storage}) {
  return async function addCommand () {
    inquirer
      .prompt(questions)
      .then(async (answers) => {
        if (!answers.confirmRecord) {
          process.exit(0);
        }

        const record = Record.createFromObject(answers);
        storage.addRecord(record);
      });
  };
};
