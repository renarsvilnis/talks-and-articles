const axios = require('axios');
const cheerio = require('cheerio');
const {URL} = require('url');
const youTubeVideoId = require('youtube-video-id');

function getHostname (url) {
  return (new URL(url)).hostname;
}

/**
* https://www.youtube.com/oembed?url=youtube.com/watch?v=6YBV1cKRqzU&format=json
*/
function parseYoutubeLink (youtubeUrl) {
  return axios.get('https://www.youtube.com/oembed', {
    params: {
      url: youtubeUrl,
      format: 'json'
    }
  })
    .then((res) => {
      const videoId = youTubeVideoId(youtubeUrl);

      return {
        href: videoId !== youtubeUrl
          ? `https://www.youtube.com/watch?v=${videoId}`
          : youtubeUrl,
        type: 'video',
        title: res.data.title,
        tags: [
          getHostname(res.data.provider_url),
          res.data.author_name
        ]
      };
    }, () => undefined);
}

/**
* https://developer.vimeo.com/apis/oembed
*/
function parseVimeoLink (vimeoUrl) {
  return axios.get('https://vimeo.com/api/oembed.json', {
    params: {
      url: vimeoUrl
    }
  })
    .then((res) => ({
      href: vimeoUrl,
      type: 'video',
      title: res.data.title,
      tags: [
        getHostname(res.data.provider_url),
        res.data.author_name
      ]
    }), () => undefined);
}

/**
* https://www.codementor.io/johnnyb/how-to-write-a-web-scraper-in-nodejs-du108266t
*/
function parseUnknownLink (url) {
  return require('superagent')
    .get(url)
    .then((res) => {
      // let $ = cheerio.load(res.data);
      let $ = cheerio.load(res.text);

      return {
        href: url,
        title: $('head title').text(),
        type: $('head meta[property="og:type"]').attr('content') || 'article',
        tags: ([
          getHostname(url),
          $('head meta[property="author"]').attr('content')
        ]).filter((t) => t)
      };
    }, () => undefined);
}

/**
 * GET /api/v1/parse-link?link=<String>
 */
exports.get = async function (req, res, next) {
  const link = req.query.link;

  if (!link) {
    return res.status(422).send('Missing link parameter');
  }

  /**
   * Make all requests in parallel, even tho some most will not be neeed,
   * requests sorted by order of return importance.
   */
  const results = await Promise.all([
    parseYoutubeLink(link),
    parseVimeoLink(link),
    parseUnknownLink(link)
  ]);

  //
  return res.json(results.find((a) => a) || {});
};
