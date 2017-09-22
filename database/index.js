const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

///////////////////////

// var db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function() {
//   console.log('>>>>>>>>database connected>>>>>>>>');
// });

///////////////////////


let repoSchema = mongoose.Schema({
  // Repo
  repoId: { type: Number, unique: true }, //data.id
  repoName: String, //data.name
  repoUrl: String,  //html_url
  // Owner
  ownerId: Number,  //data.owner.id
  ownerName: String,//data.owner.login
  // Info
  updated: {type: Date, default: Date.now}
});

let Repo = mongoose.model('Repo', repoSchema);

// returns a promise
let save = (err, repo) => {
  if (err) return console.log(err);
  console.log()
  console.log(repo);
}

module.exports.save = save;
