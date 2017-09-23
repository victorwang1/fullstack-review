const express = require('express');
const bodyParser = require('body-parser');
const getReposByUsername = require('../helpers/github.js').getReposByUsername;
const save = require('../database/index.js').save;
const find = require('../database/index.js').find;
let app = express();

app.use(bodyParser.json());
app.use(express.static(__dirname + '/../client/dist'));

app.post('/repos', function (req, res) {
  console.log('>>>>>>>>>post request')
  var githubHandel = req.body.q;

  getReposByUsername(githubHandel)
    .then((repos, err) => {
      console.log(repos);
      repos.forEach((repo) => {
        save(repo);
      })
    });
  res.send();
})

app.get('/repos', function (req, res) {
  console.log('>>>>>>>>>get request')
  find().then((repos) => res.send(repos));
})

let port = 3000;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
})
