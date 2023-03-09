import React, { useEffect, useState } from "react";
import "./login.scss";
import { Icon } from "@iconify/react";

//Admin Email

function Login() {
  return (
    <div id="bid-login">
      <section className="login-sec">
        <div>
          <img src="" alt="..." className="img-fluid login-logo" />
        </div>
        <div className="login-content-sec">
          <div className="login-main">
            <div className="login-content">
              <h6 className="login-head">Log In</h6>
              <span className="login-email-span">Email</span>
              <input
                type="email"
                className="login-email"
                placeholder="abc@gmail.com"
              />
              <span className="login-pass-span">Password</span>
              <input
                type="password"
                className="login-pass"
                placeholder="Password"
              />

              <button className="login-btn">
                <Icon
                  className="login-btn-icon"
                  icon="mdi:user-circle-outline"
                  color="white"
                  width="26"
                  height="26"
                />
                Log In
              </button>

              <p>
                Don't have account?
                <a className="sign" href="/signup">
                  Sign Up
                </a>
              </p>
              <a className="forget" href="#">
                Forgot Password?
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Login;
