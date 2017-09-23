const request = require('request');
const rq = require('request-promise');
const config = require('../config.js');

let getReposByUsername = (username) => {
  // TODO - Use the request module to request repos for a specific
  // user from the github API

  // The options object has been provided to help you out,
  // but you'll have to fill in the URL

  let options = {
    url: `https://api.github.com/users/${username}/repos`,
    qs: { access_token: `${config.TOKEN}` },
    headers: { 'User-Agent': 'Request-Promise' },
    json: true
  };
  
  return rq(options);
}

module.exports.getReposByUsername = getReposByUsername;
