import React from "react";
import Footer from "../components/footer/Footer";
import Keepernft from "../components/keepernft/Keepernft";
import Seller from "../components/our seller/Seller";
import Pastynft from "../components/pastyVan/Pastynft";

const Landing = () => {
  return (
    <div>
      {/* <Banner /> */}
      <div className="back-img">
        <Keepernft />
        <Pastynft />
        <Seller />
      </div>

      <Footer />
    </div>
  );
};

export default Landing;
