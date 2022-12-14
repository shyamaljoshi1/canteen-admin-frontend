import React from "react";
import pic1 from "./ec1.svg"
import pic2 from "./ec2.svg"
import pic3 from "./ec3.svg";
import './Login.css';


const Login=() => {
  return (
    <>
      <section className="full-screen-container-login">
        <img className="ec1" src={pic1} alt="Design 1" property="1" />
        <img className="ec2" src={pic2} alt="Design 2" property="2" />
        <img className="ec3" src={pic3} alt="Design 3" property="3" />

        <div className="sign-in-container">
          <h1 className="app-name">App Name</h1>
          <h2 className="login-title">Login</h2>
          <form action="post" className="form">
            <div className="input-container">
              {/* <label htmlFor="email">Email</label> */}
              <input type="email" name="email" id="email" placeholder="Id" />
            </div>

            <div className="input-container">
              {/* <label htmlFor="password">Password</label> */}
              <input type="password" name="password" id="password" placeholder="Password" />
            </div>
            <button type="submit" className="btn-sub">
              Log In
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

export default Login;
