import React, { useEffect, useState } from "react";
import "./login.css";
import { Icon } from "@iconify/react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { Link, useNavigate } from "react-router-dom";
//Admin Email

function Login() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const navigate = useNavigate();
  const navLanding = () => {
    navigate("/landing");
  };
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

              <button className="login-btn" onClick={navLanding}>
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
                <Link className="sign" href="/signup">
                  Sign Up
                </Link>
              </p>
              <a
                className="forget"
                href="#"
                onClick={() => handleShow("Test", "Deny")}
              >
                Forgot Password?
              </a>
            </div>
          </div>
        </div>
      </section>

      <Modal
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Reset Password
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h6 className="modal-input-lable">Email:</h6>
          <input className="modal-input-lable" type="text" />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success">Send Password Reset Email</Button>
          <Button onClick={handleClose}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Login;
