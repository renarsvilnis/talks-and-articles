const cli = require('commander');

const pkg = require('../package.json');

const add = require('./commands/add');

cli
  .version(pkg.version)
  .command('add', 'add new record')
  .action(async () => {
    await add();
  })
  .parse(process.argv);
