const axios = require('axios');

const API_URL = '//localhost:3000/api';
const API_VERSION = 'v1';

export const createUrl = (endpoint) => `${API_URL}/${API_VERSION}/${endpoint}`;

export function getRecords () {
  const url = createUrl('/records');
  return axios.get(url)
    .then((res) => res.data);
}

export function parseLink (link) {
  const url = createUrl('/parse-link');
  return axios.get(url, {
    params: {link}
  })
    .then((res) => res.data);
}
