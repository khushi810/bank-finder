import React, { Component } from 'react';
import Title from './Components/Title';
import Form from './Components/Form';
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
