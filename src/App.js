import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Dashboard from './components/Dashboard.jsx';
import Palette from './components/Palette.jsx';
import Aspect from './components/Aspect.jsx';
import Fonts from './components/Fonts.jsx';
import Typography from './components/Typography.jsx';

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="Header">
          <h2>Themebuilder | </h2>
          <nav className="header__nav">
            <Link to="/">Start</Link>
            <Link to="/palette">Colors</Link>
            <Link to="/aspect">Aspect</Link>
            <Link to="/fonts">Fonts</Link>
            <Link to="/typography">Typography</Link>
          </nav>
          </header>
          <main>
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/palette" component={Palette} />
            <Route exact path="/aspect" component={Aspect} />
            <Route exact path="/fonts" component={Fonts} />
            <Route exact path="/typography" component={Typography} />
          </main>

      </div>
        </Router>
    );
  }
}

export default App;
