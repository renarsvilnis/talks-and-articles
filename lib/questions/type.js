module.exports = {
  type: 'list',
  name: 'type',
  message: 'Article type:',
  choices: [
    'article',
    'video'
  ],
  // TODO: detect article type from url
  default: 'article'
};
