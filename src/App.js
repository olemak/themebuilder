import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import routes from './routes/routes.js'

import './App.css';

class App extends Component {

  
  render() {
    return (
      <Router>
        <div className="Themebuilder">          
          <header className="Header">
            <h2>Themebuilder | {routes().map(route=><Route exact={route.exact} path={route.path} component={()=><span> {route.name}</span>} key={`header-${route.name}`} />)}</h2>
            <nav className="header__nav">
              { routes().map(route=><Link to={route.path} key={`link-${route.name}`}>{route.name}</Link>) }
            </nav>
          </header>

          <main>
            { routes().map(route=><Route exact={route.exact} path={route.path} key={`main-route-${route.name}`} component={route.component()}/>) }
          </main>          
        </div>
      </Router>
    );
  }
}

export default App;
