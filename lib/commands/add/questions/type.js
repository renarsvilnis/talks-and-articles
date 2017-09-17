const metadata = require('../../../temp-answers');

module.exports = {
  type: 'list',
  name: 'type',
  message: 'Article type:',
  choices: [
    'article',
    'video'
  ],
  default: () => metadata.type || 'article'
};
