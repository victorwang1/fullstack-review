const request = require('request');
const rq = require('request-promise');
const config = require('../config.js');

let getReposByUsername = (username) => (
  rq({
    url: `https://api.github.com/users/${username}/repos`,
    qs: { access_token: `${config.TOKEN}` },
    headers: { 'User-Agent': 'Request-Promise' },
    json: true
  })
);

module.exports.getReposByUsername = getReposByUsername;
