import React from 'react';

const RepoEntry = ({repo}) => (
  <div>
    <div>this is a repo entry</div>
    <div>{repo.repoName}</div>
    <div>{repo.repoId}</div>
    <div>{repo.repoUrl}</div>
  </div>
)

export default RepoList;
