import React, { useState } from "react";
import { Link  } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { ADD_USER } from "../utils/mutations";
// import {useNavigate} from "react-router-dom";

import Auth from "../utils/auth";
//import Loginlogo from "../images/loginlogo.png";

// function SignUp() {
//   // return (
//   //   <div className="container">
//   //     <div className="sub-container">
//   //       <div>
//   //         <h1>Sign Up</h1>
//   //         <div>
//   //           <input className="fullname" type="text" placeholder="Full Name" />
//   //           <div>
//   //             <input
//   //               className="emailid"
//   //               type="email"
//   //               placeholder="Email Adress"
//   //             />
//   //             <div>
//   //               <input
//   //                 className="signpwd"
//   //                 type="password"
//   //                 placeholder="Password"
//   //               />
//   //             </div>
//   //           </div>
//   //         </div>
//   //       </div>
//   //     </div>
//   //   </div>
//   // )

//   return (
//   //   <div className="main-container">
//   //     <div className="sub-main">
//   //       <div>
//   //         <div className="imgs">
//   //           <div className="container-logo">
//   //             <img className="loginlogo" src={Loginlogo} alt="loginlogo" />
//   //           </div>
//   //         </div>
//   //         <div>
//   //           <h1>Sign Up</h1>

//   //           <div className="first-input">
//   //             {/* <img className="email" src={Email} alt="Email" /> */}

//   //             {/* <input className="fullname" type="text" placeholder="Full Name" /> */}

//   //             <input className="fullname" type="text" placeholder="Full Name" />
//   //           </div>
//   //           <div className="second-input">
//   //             {/* <img className="passlogo" src={Password} alt="passlogo" /> */}
//   //             <input className="emailid" type="text" placeholder="Email Adress" />
//   //             <div className="third-input">
//   //               <input className="signpwd" type="text" placeholder="Password" />
//   //             </div>

//   //           </div>
//   //           <div className="login-button">
//   //             <button>Login</button>
//   //           </div>
//   //         </div>
//   //       </div>
//   //     </div>
//   //   </div>

//   );

// }

// export default SignUp;



const Signup = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [addUser, { error, data }] = useMutation(ADD_USER);

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
      const { data } = await addUser({
        variables: { ...formState },
      });

      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };

  // let navigate = useNavigate();

  return (
    <main className="flex-row justify-center mb-4">
      <div className="col-12 col-lg-10">
        <div className="card">
          <h4 className="card-header bg-dark text-light p-2">Sign Up</h4>
          <div className="card-body">
            {data ? (
              <p>
                Success! You may now head{""}
                <Link to="/donation">back to the donation page</Link>
              </p>
            ) : (
              <form onSubmit={handleFormSubmit}>
                <input
                  className="form-input"
                  placeholder="Your username"
                  name="name"
                  type="text"
                  value={formState.name}
                  onChange={handleChange}
                />
                <br />
                <br />
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
                  //  onClick={() => {navigate ("/donation")}}
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

export default Signup;
