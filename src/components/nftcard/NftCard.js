import React from "react";
import "./nftcard.css";
import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
const label = { inputProps: { "aria-label": "Checkbox demo" } };

const nfts = [
  {
    nftimg: "/assets/images/keepernft/keepernft1.png",
  },
  {
    nftimg: "/assets/images/keepernft/keepernft2.png",
  },
  {
    nftimg: "/assets/images/keepernft/keepernft3.png",
  },
  {
    nftimg: "/assets/images/keepernft/keepernft4.png",
  },
  {
    nftimg: "/assets/images/keepernft/keepernft1.png",
  },
  {
    nftimg: "/assets/images/keepernft/keepernft2.png",
  },
];
function NftCard() {
  return (
    <>
      {nfts.map((item) => {
        return (
          <div className="my-nfts">
            <div className="nft-card" style={{ width: "18rem" }}>
              <div className="nft-card-header">
                <img
                  // src="  \assets\images\keepernft\keepernft2.png"
                  src={item.nftimg}
                  alt=""
                  className="img-fluid"
                />
                <div className="favourite">
                  <Checkbox
                    {...label}
                    icon={<FavoriteBorder />}
                    checkedIcon={<Favorite />}
                  />
                </div>
              </div>

              <div className="nft-card-body">
                <div className="nft-title">
                  <h5>lk inc. 2641</h5>
                </div>
                <div className="nft-card-detail">
                  <div className="ranking ">
                    <h4>Rank</h4>
                    <h6>2911/3000</h6>
                  </div>
                  <div className="pricing">
                    <div className="price">
                      <h4>Price</h4>
                      <h6>$5.00</h6>
                    </div>
                    <div className="nft-coin">
                      <img src="\assets\images\algorandcoin.svg" alt="" />
                      <h6>14</h6>
                    </div>
                  </div>
                </div>
                <div className="nft-buy">
                  <a href="#">buy now</a>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default NftCard;
