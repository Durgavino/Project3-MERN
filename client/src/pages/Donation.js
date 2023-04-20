import React from "react";
// import { Link } from "react-router-dom";
import Donate from "../images/donate-logo.png";

//Donation Screen

function Donation() {
  return (
    <div className="main-container">
      <div>
        <p className="donate-text">
          Sleephead Project3 - Sleep Better Feel Better. Your donations will
          keep us to upload more futuristic contents. Therefore, we seek for
          your financial contribution.
        </p>
      </div>
      <br />
      <br />
      <div>
        <a
          href="https://donate.stripe.com/test_9AQcQr914gtZ73G288"
        >
          <button className="donate-btn">Click to Donate</button>
        </a>
      </div>
      <br />
      <br />
      <div>
        <img className="donate-logo" src={Donate} alt="donate" />
      </div>
    </div>
  );
}

export default Donation;
