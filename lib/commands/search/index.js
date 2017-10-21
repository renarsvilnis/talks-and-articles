const Fuse = require('fuse.js');
const highlight = require('cli-highlight').highlight;
const inquirer = require('inquirer');

const ui = new inquirer.ui.BottomBar();

/**
 * @reference http://fusejs.io/
 */
const options = {
  // id: 'itemId',
  shouldSort: true,
  threshold: 0.6,
  location: 0,
  distance: 100,
  maxPatternLength: 32,
  minMatchCharLength: 1,
  keys: [
    'href',
    'title',
    'tags',
    'type'
    // 'comments'
  ]
};

module.exports = function searchCommandFactory ({storage}) {
  return async function searchCommand (keywordList) {
    const records = await storage.readRecords();

    const fuse = new Fuse(records, options);

    const keywords = keywordList.join(',');
    const results = fuse.search(keywords);

    const recordsStr = JSON.stringify(results, null, '  ');
    ui.log.write(highlight(recordsStr, {language: 'json'}) + '\n');

    process.exit(0);
  };
};
