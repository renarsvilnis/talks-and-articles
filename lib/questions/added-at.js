module.exports = {
  type: 'input',
  name: 'addedAt',
  message: 'Epoch then article "read"',
  default: Date.now(),
  filter: (date) => (new Date(date)).getTime(),
  validate: (date) => {
    if (!(new Date(date)).getTime() > 0) {
      return 'Invalid date input';
    }

    return true;
  }
};
