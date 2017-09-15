const inquirer = require('inquirer');
const highlight = require('cli-highlight').highlight;

const filterRecord = require('../helpers/filterRecord');

const ui = new inquirer.ui.BottomBar();

module.exports = {
  type: 'confirm',
  name: 'confirmRecord',
  message: 'Confirm record:',
  when: (answers) => {
    // Output record before confirming save
    const recordStr = JSON.stringify(filterRecord(answers), null, '  ');
    ui.log.write(highlight(recordStr, {language: 'json'}) + '\n');

    return true;
  }
};
