import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import GreenSquare from './components/GreenSquare.js';
import BlueOval from './components/BlueOval.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <GreenSquare />
        <BlueOval />
        {/* should always be here, and should only be rendered if the element is currently morphing */}
      </div>
    );
  }
}

export default App;
