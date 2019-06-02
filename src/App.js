import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./Home";

class App extends Component {
  state = {};

  whatever = () => {};

  render() {
    return (
      <div className="card">
        <Router>
          <Switch>
            <Route
              exact
              path={["/", "smart_mirror"]}
              render={props => <Home {...props} />}
            />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
