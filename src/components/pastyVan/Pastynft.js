import * as React from "react";
import "./pasty.css";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NftCard from "../nftcard/NftCard";

function Pastynft() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    centerPadding: "80px",
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 567,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 787,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 4,
        },
      },
    ],
  };

  const pastynfts = [
    {
      nftimg: "/assets/images/pasty/pasty1.png",
    },
    {
      nftimg: "/assets/images/pasty/pasty2.png",
    },
    {
      nftimg: "/assets/images/pasty/pasty3.png",
    },
    {
      nftimg: "/assets/images/pasty/pasty4.png",
    },
    {
      nftimg: "/assets/images/pasty/pasty2.png",
    },
    {
      nftimg: "/assets/images/pasty/pasty1.png",
    },
  ];
  return (
    <div>
      <section className="pastynft">
        <div className="pastynft-content">
          <div className="section-head">
            <h1>Last Bid</h1>
          </div>

          <Slider {...settings}>
            {pastynfts.map((item, index) => {
              return (
                <div className="my-nfts" key={index}>
                  <div className="nft-card" style={{ width: "18rem" }}>
                    <div className="nft-card-header">
                      <img src={item.nftimg} alt="" className="img-fluid" />

                      <div className="bid-timeout">
                        <div className="time">
                          <h1>Days</h1>
                          <h2>12</h2>
                        </div>
                        <div className="time">
                          <h1>Hours</h1>
                          <h2>22</h2>
                        </div>
                        <div className="time">
                          <h1>min</h1>
                          <h2>32</h2>
                        </div>
                        <div className="time">
                          <h1>Sec</h1>
                          <h2>52</h2>
                        </div>
                      </div>
                    </div>

                    <div className="nft-card-body">
                      <div className="nft-title">
                        <h5>Laptop</h5>
                      </div>
                      <div className="nft-card-detail">
                        <div className="ranking ">
                          <h4>Current bid</h4>
                          <h6>3000</h6>
                        </div>
                      </div>
                      <div className="nft-buy">
                        <a href="#">bid now</a>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </section>
    </div>
  );
}

export default Pastynft;
