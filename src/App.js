import React, { Component } from 'react';
import Palette from './components/Palette.jsx';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>Themebuilder</h2>
        <Palette />
      </div>
    );
  }
}

export default App;
