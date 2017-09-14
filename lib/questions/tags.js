// TODO: autocomplete tags
// https://github.com/sullof/inquirer-command-prompt
// https://github.com/mokkabonna/inquirer-autocomplete-prompt
module.exports = {
  type: 'input',
  name: 'tags',
  message: 'Tags (comma separated):',
  filter: (tagsStr) => {
    let tags = tagsStr.split(',');
    tags = tags.filter(t => !!t);
    tags = tags.map((tag) => tag.trim().toLowerCase());
    // TODO: remove multiple spaces
    tags = [...(new Set(tags))];
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
