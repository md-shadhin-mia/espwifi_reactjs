import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";
import Advance from "./Component/advance";
import Setting from "./Component/setting";
import Status from "./Component/status";
import  './App.scss'
class App extends Component {
  state = {};
  render() {
    return (
      <Router>
        <div className="conteiner">
        <div>
          <ul className="navbar">
            <li className="nav-item active">
              <Link to={"/"} className="nav-link btn">Status</Link>
            </li>
            <li className="nav-item">
              <Link to={"/setting"} className="nav-link btn">Setting</Link>
            </li>
            <li className="nav-item">
              <Link to={"/advance"} className="nav-link btn">Advance</Link>
            </li>
          </ul>
        </div>
        <div>
          <Switch>
            <Route exact path="/">
              <Status />
            </Route>
            <Route path="/setting">
              <Setting />
            </Route>
            <Route path="/advance">
              <Advance />
            </Route>
          </Switch>
        </div>
          </div>
        
      </Router>
    );
  }
}

export default App;
