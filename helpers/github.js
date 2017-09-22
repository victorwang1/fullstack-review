const request = require('request');
const rq = require('request-promise');
const config = require('../config.js');

let getReposByUsername = (username) => {
  // TODO - Use the request module to request repos for a specific
  // user from the github API

  // The options object has been provided to help you out,
  // but you'll have to fill in the URL

  let options = {
    url: 'https://api.github.com/search/repositories',
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`
    },
    json: true
  };

  return rq(options);
}

module.exports.getReposByUsername = getReposByUsername;
