const paramCase = require('param-case');

const metadata = require('../temp-metadata');

// TODO: autocomplete tags
// https://github.com/sullof/inquirer-command-prompt
// https://github.com/mokkabonna/inquirer-autocomplete-prompt
module.exports = {
  type: 'input',
  name: 'tags',
  message: 'Tags (comma separated):',
  default: () => metadata.tags && Array.isArray(metadata.tags) && metadata.tags.length
    ? metadata.tags.join(', ') + ', '
    : '',
  filter: (tagsStr) => {
    let tags = tagsStr.split(',');
    tags = tags.map((tag) => paramCase(tag));
    tags = [...(new Set(tags))];
    tags = tags.filter(t => !!t);
    return tags;
  },
  validate: (tags) => {
    if (!Array.isArray(tags)) {
      return 'Error: Tags output must be an array';
    }

    if (!tags.length) {
      return 'Atleast 1 tag is required!';
    }

    return true;
  }
};
