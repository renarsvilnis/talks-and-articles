const cli = require('commander');
const path = require('path');

const pkg = require('../package.json');
const add = require('./commands/add');
const search = require('./commands/search');
const Storage = require('./Storage');
const {storageDir} = require('./config');

(async () => {
  const year = (new Date()).getFullYear();
  const filepath = path.resolve(storageDir, `${year}.json`);

  await Storage.createDirFromPath(filepath);

  const storage = new Storage(filepath);

  cli.version(pkg.version);

  // ###########################################################################
  // Command "add"
  // ###########################################################################
  cli
    .command('add')
    .description('Add new record')
    .action(async () => {
      await add({storage})();
    });

  // ###########################################################################
  // Command "search"
  // ###########################################################################
  cli
    .command('search [keywords...]')
    .description('Search for a record')
    .usage('john macneil')
    .action(async (keywords) => {
      await search({storage})(keywords);
      process.exit(0);
    });

  cli.parse(process.argv);
})();
