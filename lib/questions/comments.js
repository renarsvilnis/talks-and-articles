module.exports = {
  type: 'editor',
  name: 'comments',
  message: 'Comments (markdown, prefered list):',
  when: (answers) => answers.confirmComments
};
