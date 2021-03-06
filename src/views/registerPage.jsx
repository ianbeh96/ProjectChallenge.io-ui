import React from "react";
import { Redirect } from "react-router-dom";

class registerPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          registerSuc: false,
          same_password: true,
          registerParams: {
            user_first: "",
            user_last: "",
            user_id: "",
            user_password: "",
            user_conf_password: ""
          }
        };
      }
    
      handleFormChange = event => {
        let registerParamsNew = { ...this.state.registerParams };
        let val = event.target.value;
        registerParamsNew[event.target.name] = val;
        this.setState({
          registerParams: registerParamsNew
        });
      };
     
      register = event => {
        let user_id = this.state.registerParams.user_id;
        let user_password = this.state.registerParams.user_password;
        let user_conf_password = this.state.registerParams.user_conf_password;
        let user_first = this.state.registerParams.user_first; 
        let user_last = this.state.registerParams.user_last;
        // need to check if username exist
        if (user_password === user_conf_password && user_first != "" && user_last != "" && user_id != "") {
          this.setState({
            registerSuc: true
          });
        } else if (user_password != "" && user_conf_password != "" && user_password != user_conf_password){
            this.setState({
                same_password: false
            });
        }
        event.preventDefault();
      };
    
      render() {
        if (this.state.registerSuc) {
            return <Redirect to="/login" />;
        }
        return (
          <div className=" text-center rounded-lg border-2 border-black w-1/3 m-auto">
            <form onSubmit={this.register} className ="pb-5">
              <h1><b>Register Account</b></h1>
              <div className="inline-grid gap-y-2">
                    <div className="flex gap-x-1">
                        <input
                            className="rounded-lg border-2 border-black border-opacity-80"
                            type="text"
                            name="user_first"
                            onChange={this.handleFormChange}
                            placeholder="First Name"
                            required
                        />
                        <input
                            className="rounded-lg border-2 border-black border-opacity-80"
                            type="text"
                            name="user_last"
                            onChange={this.handleFormChange}
                            placeholder="Last Name"
                            required
                        />
                    </div>
                    <input
                        className="rounded-lg border-2 border-black border-opacity-80"
                        type="text"
                        name="user_id"
                        onChange={this.handleFormChange}
                        placeholder="Username"
                        required
                    />
                    <input
                        className="rounded-lg border-2 border-black border-opacity-80"
                        type="password"
                        name="user_password"
                        onChange={this.handleFormChange}
                        placeholder="New Password"
                        required
                    />
                    <input
                        className="rounded-lg border-2 border-black border-opacity-80"
                        type="password"
                        name="user_conf_password"
                        onChange={this.handleFormChange}
                        placeholder="Confirm Password"
                        required
                        
                    />
                    <input type="submit" value="Register" className="rounded-lg pb-1"/> 
                    {this.state.registerSuc &&
                     <p>{this.state.registerParams.user_id} + " --- " + {this.state.registerParams.user_password}</p>
                    }
                    {this.state.same_password == false &&
                     <p>{"Error: Password and confirm password are not the same"}</p>
                    }
                </div>
            </form>
          </div>
        );
      }
}
export default registerPage;