import React from "react";
import "./login.css";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

const Signup = () => {
  // const navigate = useNavigate();

  // const navLogin = () => {
  //   navigate("/");
  // };
  return (
    <div>
      <div id="bid-login">
        <section className="login-sec">
          <div>
            <img src="" alt="..." className="img-fluid login-logo" />
          </div>
          <div className="login-content-sec">
            <div className="login-main">
              <div className="login-content">
                <h6 className="login-head">Sign up</h6>
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
                  placeholder="**********"
                />

                <span className="login-pass-span">Confirm Password</span>
                <input
                  type="password"
                  className="login-pass"
                  placeholder="**********"
                />

                <button className="login-btn">
                  <Icon
                    className="login-btn-icon"
                    icon="mdi:user-circle-outline"
                    color="white"
                    width="26"
                    height="26"
                  />
                  Sign Up
                </button>

                <p>
                  Already have an account?
                  <Link className="sign" href="/">
                    login
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Signup;
