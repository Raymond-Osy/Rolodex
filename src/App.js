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
        <input 
          type="search"
          placeholder="Search for monsters here..."
          onChange={e => this.setState({serchField: e.target.value})}
        />
        <CardList monsters={this.state.monsters}/>
      </div>
    );
  };
};

export default App;
