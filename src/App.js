import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";

import Home from "./js/container/homeContainer";
import Detail from "./js/container/detailContainer";

// import { PrivateRoute } from "./js/hoc/PrivateRoute";

import './App.scss';

class App extends Component {
  render() {
    return (
          <div className="App">
              <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/detail/:id' component={Detail} />
              </Switch>
          </div>
        
    );
  }
}

export default App;