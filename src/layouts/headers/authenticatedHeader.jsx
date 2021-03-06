import React from 'react';
import { Switch, Route, Link } from "react-router-dom";

class authenticatedHeader extends React.Component {
  render() {
    return (
      <div className="flex justify-between">
        <ul className="flex">
          <li className="border-2 p-10 ">
            <Link to={`${this.props.match.path}`}>Dashboard</Link>
          </li>
          <li className="border-2 p-10">
            <Link to={`${this.props.match.path}/master`}>Master</Link>
          </li >
          <li className="border-2 p-10">
            <Link to={`${this.props.match.path}/pos`}>Pos</Link>
          </li>
          </ul>
          <ul>
          <li className=" push-right border-2 p-10">
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