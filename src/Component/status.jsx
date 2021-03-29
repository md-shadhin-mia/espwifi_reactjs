import React, { Component } from "react";
import {Link} from "react-router-dom";
class Status extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="status">
        <Link to="/setting">
          setting
        </Link>
        <br/>
        <Link to="/new-wifi">
          Connect New
        </Link>
      </div>
    );
  }
}

export default Status;
