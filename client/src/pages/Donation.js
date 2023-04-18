import React from "react";
// import { Link } from "react-router-dom";
import Donate from "../images/donate-logo.png";

function Donation() {
  return (
    <div className="main-container">
      <div>
        <p className="Donate-text">
          Sleephead Project3 - Sleep Better Feel Better. Your donations will
          keep us to upload more futuristic contents. Therefore, we seek for
          your contribution.
        </p>
      </div>
      <br />
      <br />
      <div>
        <a
          href="https://donate.stripe.com/test_9AQcQr914gtZ73G288"
          // target="_blank"
          // rel="noopener noreferrer"
        >
          <button className="donate-btn">Click to Donate</button>
        </a>
      </div>
      <div>
        <img className="donate-logo" src={Donate} alt="donate" />
      </div>
    </div>
  );
}

export default Donation;
