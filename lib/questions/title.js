module.exports = {
  type: 'input',
  name: 'title',
  message: 'Title:',
  filter: (title) => title.trim(),
  validate: (title) => {
    if (!title) {
      return 'Title is required!';
    }

    // TODO: check if title already exists

    return true;
  }
};
