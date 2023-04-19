
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../utils/mutations";
import Auth from "../utils/auth";
import {useNavigate} from "react-router-dom";



//import Loginlogo from "../images/loginlogo.png";
// import Email from "../images/email2.png";
// import Password from "../images/passlogo.png";

// function Login() {
//   return (
//     <div className="main-container">
//       <div className="sub-main">
//         <div>
//           <div className="imgs">
//             <div className="container-logo">
//               <img className="loginlogo" src={Loginlogo} alt="loginlogo" />
//             </div>
//           </div>
//           <div>
//             <h1>Login Page</h1>

//             <div className="first-input">
//               {/* <img className="email" src={Email} alt="Email" /> */}
//               <input className="usename" type="text" placeholder="User Name" />
//             </div>
//             <div className="second-input">
//               {/* <img className="passlogo" src={Password} alt="passlogo" /> */}
//               <input className="loginpwd" type="text" placeholder="Password" />
//             </div>
//             <div className="login-button">
//               <button>Login</button>
//             </div>

//               <p className="link">
//                 <a href="/#">Forgot Password ?</a> or <a href="/#">Sign Up</a>
//               </p>

//           </div>
//         </div>
//       </div>
//     </div>
//   );



//import { Link } from 'react-router-dom';
const Login = (props) => {
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [login, { error, data }] = useMutation(LOGIN_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    try {
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      email: "",
      password: "",
    });
  };

  let history = useNavigate();
  return (
    <main className="flex-row justify-center mb-4">
      <div className="col-12 col-lg-10">
        <div className="card">
          <h4 className="card-header bg-dark text-light p-2">Login</h4>
          <div className="card-body">
            {data ? (
              <p>
                Success! You may now head{" "}

                <Link to="/better">Better</Link>
               

              </p>
            ) : (
              <form onSubmit={handleFormSubmit}>
                <input
                  className="form-input"
                  placeholder="Your email"
                  name="email"
                  type="email"
                  value={formState.email}
                  onChange={handleChange}
                />
                <br />
                <br />
                <input
                  className="form-input"
                  placeholder="******"
                  name="password"
                  type="password"
                  value={formState.password}
                  onChange={handleChange}
                />
                <br />
                <br />
                <button
                  className="btn btn-block btn-info"
                  style={{ cursor: "pointer" }}
                  type="submit"
                  onClick={() => {
                    history.push("/better");
                  }}
                >
                  Submit
                  
                </button>
              </form>
            )}
            

            {error && (
              <div className="my-3 p-3 bg-danger text-white">
                {error.message}
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};


export default Login;
