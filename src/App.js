import React, { Component } from 'react';
import Title from './components/Title';
import BankFinder from './components/BankFinder';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Title />
        <BankFinder />
      </div>
    );
  }
}

export default App;
