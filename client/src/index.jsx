import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
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
    $.get("http://localhost:1128/repos", repos => {
      console.log(repos);
      this.setState({repos: repos});
    });
  }

  search(term) {
    console.log(`${term} was searched`);

    $.ajax({
      type: 'POST',
      url: 'http://localhost:3000/repos',
      contentType: 'application/json',
      dataType: 'json',
      data: JSON.stringify({q: term})
    }).done((data) => console.log(data))
      .fail((err) => console.log(err));
    // .then(this.load())
  }

  render() {
    return (<div>
      <h1>Github Fetcher</h1>
      <RepoList repos={this.state.repos}/>
      <Search onSearch={this.search.bind(this)}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
