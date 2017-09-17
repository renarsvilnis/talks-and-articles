const metadata = require('../../../temp-answers');

module.exports = {
  type: 'input',
  name: 'title',
  message: 'Title:',
  default: () => metadata.title,
  filter: (title) => title.trim(),
  validate: (title) => {
    if (!title) {
      return 'Title is required!';
    }

    // TODO: check if title already exists

    return true;
  }
};
