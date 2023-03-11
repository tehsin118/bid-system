import React, { useEffect, useState } from "react";
import TopBar from "../navbar/TopBar";
import Carousel from "react-bootstrap/Carousel";
import "./banner.css";
import banner1 from "../../../assets/images//banner1.webp";
import banner2 from "../../../assets/images//banner2.webp";
import banner3 from "../../../assets/images//banner3.webp";
import banner4 from "../../../assets/images//banner4.webp";
function Banner() {
  return (
    <div>
      <section className="banner d-none">
        <TopBar />
        <div className="banner-content">
          <div className="row">
            <div className="col-lg-6 col-12 left">
              <h1>
                Auction <span>Marketplace</span>
              </h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet
                non diam tincidunt sed pretium aliquam. Lectus necmattis tellus
                tempus parturient. Sem pretium ipsum vitae.
              </p>
              <div className="btns">
                <a href="#" className="btn1">
                  Explore
                </a>
                <a href="#" className="btn2">
                  Create Profile
                </a>
              </div>
            </div>
            <div className="col-lg-6 col-12 right">
              <Carousel
                fade={true}
                interval={2000}
                controls={false}
                indicators={false}
                pause={false}
              >
                <Carousel.Item>
                  <img
                    className="collection-image img-fluid"
                    src={banner1}
                    alt=""
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="collection-image img-fluid"
                    src={banner2}
                    alt=""
                  />
                </Carousel.Item>

                <Carousel.Item>
                  <img
                    className="collection-image img-fluid"
                    src={banner3}
                    alt=""
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="collection-image img-fluid"
                    src={banner4}
                    alt=""
                  />
                </Carousel.Item>
              </Carousel>
            </div>
          </div>

          <div className="row">
            <div className="col-12 banner-social-links">
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

      <div className="banner-data d-none">
        <div className="banner-btm-content ">
          <div className="row">
            <div className="col-md-8 col-12 left-tag">
              <h2>Electronics</h2>
            </div>
            <div className="col-md-4 col-12 right-tag">
              <h2>Automobile </h2>
            </div>
            <div className="col-md-2">
              <div className="banner-card">
                <h5>Items</h5>
                <h3>3000</h3>
              </div>
            </div>

            <div className="col-md-2">
              <div className="banner-card">
                <h5>Floor Price</h5>
                <h3>14</h3>
              </div>
            </div>

            <div className="col-md-2">
              <div className="banner-card">
                <h5>Total Volume</h5>
                <h3>52.4k</h3>
              </div>
            </div>

            <div className="col-md-2">
              <div className="banner-card">
                <h5>USD Volume</h5>
                <h3>$16.8k</h3>
              </div>
            </div>

            <div className="col-md-2  ">
              <div className="banner-card bannder-card-red">
                <h5>Total Volume</h5>
                <h3>52.4k</h3>
              </div>
            </div>

            <div className="col-md-2">
              <div className="banner-card bannder-card-red ">
                <h5>USD Volume</h5>
                <h3>$16.8k</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
