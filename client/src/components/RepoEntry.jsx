import React from 'react';

const RepoEntry = ({repo}) => (
  <div className="repo">
    <a href={repo.repoUrl} className="repoName" onClick="">{repo.repoName}</a>
    <div className="repoId">{repo.repoId}</div>
    <div className="ownerName">{repo.ownerName}</div>
  </div>
)

export default RepoEntry;
