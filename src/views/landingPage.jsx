import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { withRouter } from "react-router";
import AuthenticatedHeader from "../layouts/headers/authenticatedHeader";

class landingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      islogout: false
    };
  }

  signOut = () => {
    localStorage.removeItem("token");
    this.setState({
      islogout: true
    });
  };

  render() {
    if (this.state.islogout) {
      return <Redirect to="/login" />;
    }
    const { match } = this.props;
    return (
      <div>
        <AuthenticatedHeader signOut={this.signOut} match={match}/>
        <main role="main">
          <div className="main">
          </div>
        </main>
      </div>
    );
  }
}
 
export default withRouter(landingPage);