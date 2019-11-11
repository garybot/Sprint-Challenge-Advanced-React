import React from 'react';
import axios from 'axios';
import './App.css';
import Players from './components/Players.js';

class App extends React.Component {
  constructor() {
    super();
    this.state = {'players': []};
  }
  componentDidMount() {
    axios
      .get(`http://localhost:5000/api/players`)
      .then(res => {
        this.setState({'players': res.data})
      })
      .catch(err => console.log(err))
  }
  render() {
    if (!this.state.players.length) {
      return <h1>Loading...</h1>
    }
    return (
      <Players list={this.state.players} />
      )
  }
}

export default App;