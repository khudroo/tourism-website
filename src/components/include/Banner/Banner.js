import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner-bg">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="banner d-flex justify-content-center align-items-center">
              <div className="banner-text text-center">
                <h1 className="text-white text-uppercase">Get more of what you've been missing.</h1>
                <h5 className="text-white text-capitalize">Introducing Sky-Traveler. Endless travel savings, one simple membership.</h5>
                <button className="btn btn-outline-warning mt-3 text-capitalize">Learn more</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
