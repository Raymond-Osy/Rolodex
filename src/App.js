import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [
        {
          name: 'Ojuju',
          id: 1,
        },
        {
          name: 'Masqurade',
          id: 2,
        },
        {
          name: 'Dragon',
          id: 3,
        }
      ]
    };
  }

  render() {
    return(
      this.state.monsters.map(monster => <div>{monster.name}</div>)
    );
  };
};

export default App;
