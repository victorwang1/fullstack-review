const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher', {
  useMongoClient: true
})

let repoSchema = mongoose.Schema({
  repoId: { type: Number, unique: true },
  repoName: String,
  repoUrl: String,
  ownerId: Number,
  ownerName: String,
  updated: Date
});

let Repo = mongoose.model('Repo', repoSchema);

let pluckData = (data) => ({
  repoId: data.id,
  repoName: data.name,
  repoUrl: data.html_url,
  ownerId: data.owner.id,
  ownerName: data.owner.login,
  updated: data.updated_at
})

let save = (data) => new Repo(pluckData(data)).save();

let find = (q = {}) => {
  return Repo.find(q)
             .limit(25)
             .sort({ updated: -1 });
};


module.exports.save = save;
module.exports.find = find;
