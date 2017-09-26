import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoEntry from './components/RepoEntry.jsx';
import RepoList from './components/RepoList.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: []
    }
  }

  componentWillMount() {
    this.load();
  }

  load() {
    $.ajax({
      type: 'GET',
      url: 'https://stark-headland-44852.herokuapp.com/repos',
      dataType: 'text'
    }).done(data => this.setState({ repos: JSON.parse(data)}))
      .fail(err => console.log(err));
  }

  search(term) {
    $.ajax({
      type: 'POST',
      url: 'https://stark-headland-44852.herokuapp.com/repos',
      contentType: 'application/json',
      data: JSON.stringify({q: term})
    }).done(data => this.load())
      .fail(err => console.log(err));
  }

  render() {
    return (<div>
      <h1>Github Fetcher</h1>
      <Search onSearch={this.search.bind(this)}/>
      <RepoList repos={this.state.repos}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
