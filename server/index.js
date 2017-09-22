const express = require('express');
const bodyParser = require('body-parser');
const getReposByUsername = requrie('../helpers/github.js').getReposByUsername;
let app = express();

// ??? app.use(bodyParser.json({ type: 'application/*+json' }));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/../client/dist'));

app.post('/repos', function (req, res) {
  console.log(req.body);
  var githubHandel = req.body;

  getReposByUsername(githubHandel)
    .then((repos, err) => {
      console.log(repos);
      respos.forEach((repo) => {
        //TODO - Save to database;
      })
    });
});

app.get('/repos', function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});
