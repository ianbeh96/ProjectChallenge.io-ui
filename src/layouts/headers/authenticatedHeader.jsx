import React from 'react';
import { Switch, Route, Link } from "react-router-dom";

class authenticatedHeader extends React.Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <Link to={`${this.props.match.path}`}>Dashboard</Link>
          </li>
          <li>
            <Link to={`${this.props.match.path}/master`}>Master</Link>
          </li>
          <li>
            <Link to={`${this.props.match.path}/pos`}>Pos</Link>
          </li>
          <li className="push-right">
            <button onClick={this.props.signOut} href="#">
            Sign Out
            </button>
          </li>
        </ul>
      </div>
    )
  }
}

export default authenticatedHeader;