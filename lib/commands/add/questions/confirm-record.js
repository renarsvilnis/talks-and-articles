const inquirer = require('inquirer');
const highlight = require('cli-highlight').highlight;

const Record = require('../../../Record');

const ui = new inquirer.ui.BottomBar();

module.exports = {
  type: 'confirm',
  name: 'confirmRecord',
  message: 'Confirm record:',
  when: (answers) => {
    // Output record before confirming save
    const recordStr = JSON.stringify(Record.filter(answers), null, '  ');
    ui.log.write(highlight(recordStr, {language: 'json'}) + '\n');

    return true;
  }
};
