const validUrl = require('valid-url');

module.exports = {
  type: 'input',
  name: 'href',
  message: 'Link:',
  validate: (link) => {
    if (!link) {
      return 'Link is required!';
    }

    /**
     * https://www.npmjs.com/package/valid-url
     */
    if (!validUrl.isUri(link)) {
      return 'A valid web url is requried!';
    }

    return true;
  },
  filter: (link) => {
    // TODO: auto create title
    // support youtube, medium
    // https://github.com/weo-edu/is-youtube-video
    // https://github.com/jmorrell/get-youtube-id
    return link;
  }
};
