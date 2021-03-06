import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { withRouter } from "react-router";
import AuthenticatedHeader from "../layouts/headers/authenticatedHeader";

class landingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      islogout: false,
      challenge: "test"
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
            { this.state.challenge == null &&
              <div className="container ">
                <p className >There is no challenge, click here to get started!!!</p>
                <button className="border-4">
                  Create
                </button>
              </div>
            }
            { this.state.challenge != null && 
              <div>
                
              </div>
            }
          </div>
        </main>
      </div>
    );
  }
}
 
export default withRouter(landingPage);