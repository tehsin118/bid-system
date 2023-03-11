import * as React from "react";
import "./keeper.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Keepernft() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    centerPadding: "80px",
    autoplay: false,
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
  const nfts = [
    {
      nftimg: "/assets/images/keepernft/mobile.webp",
      name: "car",
    },
    {
      nftimg: "/assets/images/keepernft/keepernft2.png",
      name: "cycle",
    },
    {
      nftimg: "/assets/images/keepernft/keepernft3.png",
      name: "bike",
    },
    {
      nftimg: "/assets/images/keepernft/keepernft4.png",
      name: "mobile",
    },
    {
      nftimg: "/assets/images/keepernft/keepernft1.png",
      name: "laptop",
    },
    {
      nftimg: "/assets/images/keepernft/keepernft2.png",
      name: "car",
    },
  ];
  return (
    <div>
      <section className="keepnft">
        <div className="keepnft-content">
          <div className="section-head">
            <h1>Current Bidding</h1>
          </div>

          <Slider {...settings}>
            {nfts.map((item, index) => {
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
                        <h5>{item.name}</h5>
                      </div>
                      <div className="nft-card-detail">
                        <div className="pricing">
                          <div className="price">
                            <h4>Current Bid</h4>
                            <h6>$5.00</h6>
                          </div>
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

          <div className="viewall">
            <div className="nft-buy">
              <a href="#">View More</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Keepernft;
