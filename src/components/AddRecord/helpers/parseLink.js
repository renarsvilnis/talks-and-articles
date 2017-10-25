const axios = require('axios');
const cheerio = require('cheerio');
const {URL} = require('url');
const youTubeVideoId = require('youtube-video-id');
const jsonp = require('jsonp');

function getHostname (url) {
  return (new URL(url)).hostname;
}

/**
* https://www.youtube.com/oembed?url=youtube.com/watch?v=6YBV1cKRqzU&format=json
*/
export function parseYoutubeLink (youtubeUrl) {
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
export function parseVimeoLink (vimeoUrl) {
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
export function parseUnknownLink (url) {
  // return axios.get(url, {
  // // headers: {
  // //   'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.113 Safari/537.36'
  // // }
  //   responseType: 'text',
  //   headers: {}
  // })
  jsonpp(url)
    .then((res) => {
      console.log('response', res);
      let $ = cheerio.load(res.data);

      // FIXME: add support for medium - https://medium.com/@maybekatz/introducing-npx-an-npm-package-runner-55f7d4bd282b
      // might be vecause axiso making it as an json request

      return {
        href: url,
        title: $('head title').text(),
        type: $('head meta[property="og:type"]').attr('contents'),
        // tags

        tags: ([
          getHostname(url),
          $('head meta[property="author"]').attr('contents')
        ]).filter((t) => t)
      };
    }, (err) => {
      console.log(err, err.response);
      return undefined;
    });
}

// axios.get('https://medium.com/@maybekatz/introducing-npx-an-npm-package-runner-55f7d4bd282b', {
//   responseType: 'document',
//   headers: {
//     'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.113 Safari/537.36'
//   }
// }).then((res) => { console.log(res.data); });

function jsonpp (url, opts) {
  return new Promise((resolve, reject) => {
    jsonp(url, opts, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}
