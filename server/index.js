const cool = require('cool-ascii-faces');
const express = require('express');
const bodyParser = require('body-parser');
const getReposByUsername = require('../helpers/github.js').getReposByUsername;
const save = require('../database/index.js').save;
const find = require('../database/index.js').find;
let app = express();

app.use(bodyParser.json());
app.use(express.static(__dirname + '/../client/dist'));

app.post('/repos', (req, res) => {
  getReposByUsername(req.body.q)
    .then(repos => Promise.all(repos.map(repo => save(repo))))
    .then(() => res.redirect('/repos'));
})

app.get('/repos', (req, res) => {
  find().then(repos => res.send(repos));
})

let port = process.env.PORT || 5000;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
})
