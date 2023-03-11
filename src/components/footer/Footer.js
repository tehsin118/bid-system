import React from "react";
import "./Footer.css";
import { Icon } from "@iconify/react";
import Checkbox from "@mui/material/Checkbox";

const label = { inputProps: { "aria-label": "End" } };
function Footer() {
  return (
    <div>
      <section className="footer d-none">
        <div className="container">
          <div className="footer-content">
            <div className="row">
              <div className="col-md-9 col-12">
                <div className="row">
                  <div className="col-md-2 col-12 no-padd logo-12">
                    <img src="\assets\images\keeperlogo.png" alt="" />
                  </div>

                  <div className="col-md-2 col-6 no-padd wid-50">
                    <ul>
                      <li>
                        <a href="#">Home</a>
                      </li>
                      <li>
                        <a href="#">About</a>
                      </li>
                      <li>
                        <a href="#">Roadmap</a>
                      </li>
                    </ul>
                  </div>

                  <div className="col-md-2 col-6 no-padd wid-50">
                    <ul>
                      <li>
                        <a href="#">Pasty Co</a>
                      </li>
                      <li>
                        <a href="#">Light House</a>
                      </li>
                      <li>
                        <a href="#">Analytics</a>
                      </li>
                    </ul>
                  </div>

                  <div className="col-md-2 col-6 no-padd wid-50">
                    <ul>
                      <li>
                        <a href="#">Buy/Sell</a>
                      </li>
                      <li>
                        <a href="#">NFT Staking</a>
                      </li>
                      <li>
                        <a href="#">Whitepaper</a>
                      </li>
                    </ul>
                  </div>

                  <div className="col-md-3 col-6 no-padd wid-50">
                    <ul>
                      <li>
                        <a href="#">Pitch Deck</a>
                      </li>
                      <li>
                        <a href="#">Marketplace</a>
                      </li>
                      <li>
                        <a href="#">Smart contract</a>
                      </li>
                    </ul>
                  </div>

                  <div className="col-md-1 no-padd align-center ">
                    <div className="divider-white"></div>
                  </div>
                </div>
              </div>

              <div className="col-md-3 col-12 padd-70 ">
                <div className="subscribe-input-wrap">
                  <input
                    type="text"
                    placeholder="Email"
                    className="text-mail"
                  />
                  <button>
                    <Icon
                      icon="fluent:send-16-filled"
                      color="black"
                      width="24"
                      height="24"
                    />
                  </button>
                </div>

                <div className="agree-terms">
                  <input
                    type="checkbox"
                    name=""
                    id=""
                    required
                    className="checkbox"
                  />

                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscingghk elit.
                    In viverra orci lorem malesuada quis sapien atjkjkjk Egestas
                    amet at et tellus rhoncus, hendrerit varius nunc.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="privacy-policy">
        <div className="privacy-content">
          <div className="row">
            <div className="col-md-4 col-12 align-center ">
              <p>All right reserved by Bid System</p>
            </div>
            <div className="col-md-4 col-12 align-center ">
              <div>
                <a href="#" className="c1">
                  Privacy Policy
                </a>
                <a href="#">Terms & Conditions</a>
              </div>
            </div>
            <div className="col-md-4 col-12  ">
              <div className="social-logos">
                <a
                  href="https://www.nftexplorer.app/collection/N5fRUUXVA1IS"
                  target="_blank"
                >
                  <img src="\assets\images\social1.svg" alt="" />
                </a>

                <a
                  href="https://www.nftexplorer.app/collection/lighthouse-keepers"
                  target="_blank"
                >
                  <img src="\assets\images\social1.svg" alt="" />
                </a>

                <a href="https://twitter.com/lkinc_algo" target="_blank">
                  <img src="\assets\images\twitter.svg" alt="" />
                </a>
                <a href="https://discord.gg/znhadrD8hS" target="_blank">
                  <img src="\assets\images\discord.svg" alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
