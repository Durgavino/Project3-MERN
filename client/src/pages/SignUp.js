import React from "react";
import Loginlogo from "../images/loginlogo.png";
function SignUp() {
  // return (
  //   <div className="container">
  //     <div className="sub-container">
  //       <div>
  //         <h1>Sign Up</h1>
  //         <div>
  //           <input className="fullname" type="text" placeholder="Full Name" />
  //           <div>
  //             <input
  //               className="emailid"
  //               type="email"
  //               placeholder="Email Adress"
  //             />
  //             <div>
  //               <input
  //                 className="signpwd"
  //                 type="password"
  //                 placeholder="Password"
  //               />
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // )
  
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
            <h1>Sign Up</h1>

            <div className="first-input">
              {/* <img className="email" src={Email} alt="Email" /> */}

              {/* <input className="fullname" type="text" placeholder="Full Name" /> */}

              <input className="fullname" type="text" placeholder="Full Name" />
            </div>
            <div className="second-input">
              {/* <img className="passlogo" src={Password} alt="passlogo" /> */}
              <input className="emailid" type="text" placeholder="Email Adress" />
              <div className="third-input">
              <input className="signpwd" type="text" placeholder="Password" />
              </div>
              
            </div>
            <div className="login-button">
              <button>Login</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );


}

export default SignUp;
