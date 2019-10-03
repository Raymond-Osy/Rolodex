import React, { Component } from 'react';
import CardList from './components/Cards/CardList';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: []
    };
  }

  componentWillMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(users => this.setState({ monsters: users }))
  }

  render() {
    return(
      <div>
        <CardList monsters={this.state.monsters}/>
      </div>
    );
  };
};

export default App;
