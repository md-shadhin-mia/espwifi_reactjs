import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Setting from "./Component/setting";
import Status from "./Component/status";
import NewWifi from "./Component/newWifi";
import  './App.scss'
class App extends Component {
  state = {};
  render() {
    return (
      <Router>
        <div className="conteiner">
          <div className="main">
            <Switch>
              <Route exact path="/">
                <Status />
              </Route>
              <Route path="/setting">
                <Setting />
              </Route>
              <Route path="/new-wifi">
                <NewWifi />
              </Route>
            </Switch>
          </div>
        </div>
        
      </Router>
    );
  }
}

export default App;
