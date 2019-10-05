import React, { Component } from 'react';
import Search from './components/Search/Search';
import CardList from './components/Cards/CardList';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ""
    };
  }

  componentWillMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(users => this.setState({ monsters: users }));
  }

  handleChange = e => {
    this.setState({ searchField: e.target.value })
  };

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters
      .filter(monster => monster.name.toLowerCase()
      .includes(searchField.toLowerCase()));

    return (
      <div className="App">
        <h1>Robot Avarters</h1>
        <Search placeholder="Search" handleChange={this.handleChange}/>
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
