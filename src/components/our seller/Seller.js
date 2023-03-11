import React from "react";
import "./Seller.css";
function Seller() {
  return (
    <div>
      <section className="ourseller">
        <div className="seller-content">
          <div className="row">
            <div className="col-md-3 col-12">
              <div className="section-head">
                <h1>Partners</h1>
              </div>
            </div>

            <div className="col-md-9 col-12">
              <div className="sellers">
                <div className="row">
                  <div className="col-md-4 imgs">
                    <img
                      src="\assets\images\algonft.svg"
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                  <div className="col-md-4 imgs">
                    <img
                      src="\assets\images\randgallery.svg"
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                  <div className="col-md-4 imgs">
                    <img
                      src="\assets\images\algogem.svg"
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Seller;
