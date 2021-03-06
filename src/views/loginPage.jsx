import React from "react";
import { Redirect } from "react-router-dom";

class loginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      islogged: false,
      loginParams: {
        user_id: "",
        user_password: ""
      }
    };
  }

  handleFormChange = event => {
    let loginParamsNew = { ...this.state.loginParams };
    let val = event.target.value;
    loginParamsNew[event.target.name] = val;
    this.setState({
      loginParams: loginParamsNew
    });
  };
 
  login = event => {
    let user_id = this.state.loginParams.user_id;
    let user_password = this.state.loginParams.user_password;
    if (user_id === "admin" && user_password === "Test12345") {
      localStorage.setItem("token", "T");
      this.setState({
        islogged: true
      });
    }
    event.preventDefault();
  };

  render() {
    if (localStorage.getItem("token")) {
      return <Redirect to="/" />;
    }
    return (
      <div className="text-center m-auto w-2/5  ">
        <form className="border-4 " onSubmit={this.login} >
          <h1>Sign In Page</h1>
          <div className="inline-grid border-4 m-auto w-2/5 " >
            <input
              type="text"
              name="user_id"
              onChange={this.handleFormChange}
              placeholder="Username"
            />
            <input
              type="password"
              name="user_password"
              onChange={this.handleFormChange}
              placeholder="Password"
            />
            <input className="" type="submit" value="Login" />
          </div>
          <p>user_id === "admin" && user_password === "Test12345"</p>
        </form>
      </div>
    );
  }
}
export default loginPage;