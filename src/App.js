import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import routes from "./routes/routes.js";
import { Provider } from "react-redux";
import { createStore } from "redux";
import themebuilder from "./reducers/reducers";
import { RootStyleContainer } from "./components/RootStyleContainer";

import "./App.css";

let store = createStore(
    themebuilder,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <div className="Themebuilder">
                        <RootStyleContainer />
                        <header className="Header">
                            <h2>
                                Themebuilder |{" "}
                                {routes().map(route => (
                                    <Route
                                        exact={route.exact}
                                        path={route.path}
                                        component={() => (
                                            <span> {route.name}</span>
                                        )}
                                        key={`header-${route.name}`}
                                    />
                                ))}
                            </h2>
                            <nav className="header__nav">
                                {routes().map(route => (
                                    <Link
                                        to={route.path}
                                        key={`link-${route.name}`}
                                    >
                                        {route.name}
                                    </Link>
                                ))}
                            </nav>
                        </header>
                        <main>
                            {routes().map(route => (
                                <Route
                                    exact={route.exact}
                                    path={route.path}
                                    key={`main-route-${route.name}`}
                                    component={route.component()}
                                />
                            ))}
                        </main>
                    </div>
                </Router>
            </Provider>
        );
    }
}

export default App;
