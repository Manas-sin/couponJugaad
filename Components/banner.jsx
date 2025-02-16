import React from "react";

const Banner = () => {
  return (
    <>
      {" "}
      <div className="deal-coupon-slider-wrapper">
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-sm-12 no-padding-right">
              <div
                id="deal-coupon-slider"
                className="owl-carousel owl-theme slider-list"
              >
                <div className="item">
                  <div className="hero-area hero-slider-one bg--img">
                    <div className="row">
                      <div className="col-sm-3 col-sm-offset-1">
                        <div className="offer owl-fadeInLeft">
                          <img
                            src="images/offer.png"
                            alt="offer icon"
                            className="img-responsive"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-8">
                        <div className="offer-content owl-fadeIn">
                          <h6>
                            <a href="#">Special Offer For Shopping Lover</a>
                          </h6>
                          <p>
                            <i className="fa fa-clock-o" />3 days, 8h Remaining
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              <div className="item">
                  <div className="hero-area hero-slider-two bg--img">
                    <div className="row">
                      <div className="col-sm-3 col-sm-offset-1">
                        <div className="offer owl-fadeInRight">
                          <img
                            src="images/offer.png"
                            alt="offer icon"
                            className="img-responsive"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-8">
                        <div className="offer-content owl-fadeIn">
                          <h6>
                            <a href="#">Special Offer For Shopping Lover</a>
                          </h6>
                          <p>
                            <i className="fa fa-clock-o" />3 days, 8h Remaining
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="hero-area hero-slider-three bg--img">
                    <div className="row">
                      <div className="col-sm-3 col-sm-offset-1">
                        <div className="offer owl-fadeInDown">
                          <img
                            src="images/offer.png"
                            alt="offer icon"
                            className="img-responsive"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-8">
                        <div className="offer-content owl-fadeIn">
                          <h6>
                            <a href="#">Special Offer For Shopping Lover</a>
                          </h6>
                          <p>
                            <i className="fa fa-clock-o" />3 days, 8h Remaining
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="hero-area hero-sleder-four bg--img">
                    <div className="row">
                      <div className="col-sm-3 col-sm-offset-1">
                        <div className="offer owl-fadeInUp">
                          <img
                            src="images/offer.png"
                            alt="offer icon"
                            className="img-responsive"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-8">
                        <div className="offer-content owl-fadeIn">
                          <h6>
                            <a href="#">Special Offer For Shopping Lover</a>
                          </h6>
                          <p>
                            <i className="fa fa-clock-o" />3 days, 8h Remaining
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> 
              </div>
            </div>
            <div className="col-md-4 col-sm-12 no-padding-left">
              <div className="row">
                <div className="col-md-12 col-sm-6 no-padding-right-sm">
                  <div className="banner-wrapper">
                    <a href="#">
                      <img
                        src="images/banner1.jpg"
                        alt="Banner"
                        className="img-responsive"
                      />
                    </a>
                  </div>
                </div>
                <div className="col-md-12 col-sm-6 no-padding-left-sm">
                  <div className="banner-wrapper">
                    <a href="#">
                      <img
                        src="images/banner2.jpg"
                        alt="Banner"
                        className="img-responsive"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="banner-wrapper">
                <a href="#">
                  <img
                    src="images/banner3.jpg"
                    alt="Banner"
                    className="img-responsive"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
