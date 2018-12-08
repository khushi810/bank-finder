import React, { Component } from 'react';
import Title from './components/Title';
import Form from './components/Form';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Title />
        <Form />
      </div>
    );
  }
}

export default App;
