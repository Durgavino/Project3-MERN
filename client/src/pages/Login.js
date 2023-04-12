import React from "react";
import Loginlogo from "../images/loginlogo.png";
// import Email from "../images/email2.png";
// import Password from "../images/passlogo.png";

function Login() {
  return (
    <div className="main-container">
      <div className="sub-main">
        <div>
          <div className="imgs">
            <div className="container-logo">
              <img className="loginlogo" src={Loginlogo} alt="loginlogo" />
            </div>
          </div>
          <div>
            <h1>Login Page</h1>

            <div className="first-input">
              {/* <img className="email" src={Email} alt="Email" /> */}
              <input className="usename" type="text" placeholder="User Name" />
            </div>
            <div className="second-input">
              {/* <img className="passlogo" src={Password} alt="passlogo" /> */}
              <input className="loginpwd" type="text" placeholder="Password" />
            </div>
            <div className="login-button">
              <button>Login</button>
            </div>
            
              <p className="link">
                <a href="/#">Forgot Password ?</a> or <a href="/#">Sign Up</a> 
              </p>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
