import React from "react";
import { Redirect } from "react-router-dom";

class registerPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      haveAccount: false,
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confPassword: "",
    };
  }

  signInClick = event => {
    this.setState({
        haveAccount: true
    })
  }

  handleFormChange = event => {
    let registerParamsNew = { ...this.state.registerParams };
    let val = event.target.value;
    registerParamsNew[event.target.name] = val;
    this.setState({
      registerParams: registerParamsNew
    });
  };

  checkPassword = event => {
    let password = this.state.registerParams.password;
    let confPassword = this.state.registerParams.confPassword;
  };
 
  register = event => {
    let firstName = this.state.registerParams.firstName;
    let lastName = this.state.registerParams.lastName;
    let email = this.state.registerParams.email;
    let password = this.state.registerParams.password;
    
    //check password with confirm password first
    //if good, then give api the necessary stuff
    //else ask to correct the password

    event.preventDefault();
  };

  render() {
    const backgroundStyle = {
        background: "linear-gradient(180deg, #378A1A 0%, rgba(255, 255, 255, 0) 100%), rgba(115, 194, 87, 0.85)"
    };
    
    if (this.state.haveAccount == true) {
        return <Redirect to="/login" />;
    }
    return ( 
      <div className="w-screen h-screen" style={backgroundStyle}>
          <div className="logoContainer w-1/4 h-5 absolute left-1/2 top-1/4">
            {/* logo here */}
          </div>
          <div className="w-screen h-screen flex justify-center">
            <div className="formContainer absolute w-894px h-489px top-168px rounded-lg" style={{background: "white"}}>
              <div className="formHead flex text-center justify-center">
                <div className="flex top absolute h-62px w-495px top-6">
                  <span className="pt-1 text-30px">CREATE A NEW ACCOUNT</span>
                </div>
                <div className="bot absolute h-23px w-750px top-61px" >
                  <span className="pt-1 text-18px">Come join our community! Let's set up your account. Already have one? 
                      <a href="" onClick={this.signInClick} style={{color:"green"}}> Sign in here</a>
                </span>
                </div>
              </div>
              <form onSubmit={this.register} >
                  <div className="inputContainer flex text-center justify-center">
                    <input className="absolute pl-18px bg-formInput h-63px w-207px top-98px left-231px text-20px" 
                      type="text" 
                      name="firstName" 
                      placeholder="first name" 
                      onChange={this.handleFormChange}
                      pattern='[a-zA-Z0-9 ]+'
                      required
                    />
                    <input className="absolute pl-18px bg-formInput h-63px w-207px top-98px left-456px text-20px" 
                      type="text" 
                      name="lastName" 
                      placeholder="last name" 
                      onChange={this.handleFormChange}
                      required
                    />
                    <input className="absolute pl-18px bg-formInput h-63px w-432px top-172px text-20px" 
                      type="text" 
                      name="email" 
                      placeholder="email address" 
                      onChange={this.handleFormChange}
                      pattern="[a-zA-Z0-9.!#$&%'*+/=?^_`{|}~-]+@[a-zA-Z0-9]+.[a-zA-Z0-9]+" // doesn't work
                      required
                    />
                    <input className="absolute pl-18px bg-formInput h-63px w-432px top-246px text-20px" 
                      type="text" 
                      name="password" 
                      placeholder="password" 
                      onChange={this.handleFormChange}
                      required
                    />
                    <input className="absolute pl-18px bg-formInput h-63px w-432px top-321px text-20px" 
                      type="text" 
                      name="confirmPassword" 
                      placeholder="confirm password" 
                      onChange={this.handleFormChange}
                      required
                    />
                    <input className="absolute pl-18px bg-joinGreen h-67px w-432px top-398px text-20px" 
                      type="submit" 
                      value="Join" 
                    />
                  </div>
              </form>
            </div>
          </div>
      </div>
    );
  }
}
export default registerPage;