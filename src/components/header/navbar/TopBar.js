import React from "react";
import "./TopBar.css";
import { Icon } from "@iconify/react";
function TopBar() {
  return (
    <div>
      <section className="top-bar">
        <nav class="navbar navbar-expand-lg ">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">
              <img
                src="\assets\images\keeperlogo.png"
                alt=""
                className="img-fluid"
              />
            </a>
            <button
              className="navbar-toggler collapsed d-flex d-lg-none  flex-column justify-content-around"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="toggler-icon top-bar"></span>
              <span className="toggler-icon middle-bar"></span>
              <span className="toggler-icon bottom-bar"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav mx-auto mb-2 mb-lg-0  w-75">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">
                    Home
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    About
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Collection
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Staking
                  </a>
                </li>
              </ul>

              <div class="search-form">
                <Icon
                  icon="bi:search"
                  color="black"
                  width="24"
                  height="24"
                  className="search-icon"
                />
                <input
                  class=" me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
              </div>
              <Icon
                icon="eva:menu-fill"
                color="#fff"
                width="64"
                height="48"
                className="menu-icons"
              />
            </div>
          </div>
        </nav>
      </section>
    </div>
  );
}

export default TopBar;
