const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher', {
  useMongoClient: true
})

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

let pluckData = (data) => {
  return {
    repoId: data.id,
    repoName: data.name,
    repoUrl: data.html_url,
    ownerId: data.owner.id,
    ownerName: data.owner.login,
  }
};

//takes in an object and returns promose({object})
let save = (data) => {
  console.log(data);
  repo = pluckData(data);
  new Repo(repo).save((err, savedRepo) => {
    if (err) console.log('>>>>>>error');
    else {
      console.log('>>>>>>Saved');
      console.log(savedRepo);
    }
  })
};

let find = (q = {}) => {
  return Repo.find(q)
             .limit(25)
             .sort({ updated: -1 });
};


module.exports.save = save;
module.exports.find = find;
