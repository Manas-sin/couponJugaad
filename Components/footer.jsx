import React from 'react'

const Footer = () => {
  return (
    <>
    <footer className="cbx-footer">
  {/* Footer Top Part Start */}
  <div className="cbx-footer-top">
    <div className="container">
      <div className="row">
        <div className="col-md-3 col-sm-6 col-xs-12">
          {/* Footer widget about Part Start */}
          <div className="widget widget-about">
            <div className="widget-brand">
              <a href="#">
                <img
                  src="images/logo-light.png"
                  alt="CouponJugaad"
                  className="img-responsive"
                />
              </a>
            </div>
            <p>
              We coupon so to be for the us me dose this recept good bad think
              nice beauti full thanks, moja los, u hungry naki food panda use
              sultan dine.
            </p>
            <div className="widget-social">
              <ul>
                <li>
                  <a href="#">
                    <i className="fab fa-facebook-f" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-twitter" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-linkedin-in" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-vimeo-v" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/* Footer widget about Part End */}
        </div>
        <div className="col-md-2 col-sm-6 col-xs-12">
          {/* Footer widget listings Part Start */}
          <div className="widget widget-listings">
            <h2>Usefull Link</h2>
            <ul>
              <li>
                <a href="#">Pricing Plan</a>
              </li>
              <li>
                <a href="#">Categories</a>
              </li>
              <li>
                <a href="#">Populer Deal</a>
              </li>
              <li>
                <a href="#">FAQ</a>
              </li>
              <li>
                <a href="#">Support</a>
              </li>
            </ul>
          </div>
          {/* Footer widget listings Part End */}
        </div>
        <div className="col-md-3 col-sm-6 col-xs-12">
          {/* Footer widget widget-listings Part Start */}
          <div className="widget widget-listings">
            <h2>FAQ</h2>
            <ul>
              <li>
                <a href="#">Duis aute irure dolor?</a>
              </li>
              <li>
                <a href="#">Sunt in culpa qui officia?</a>
              </li>
              <li>
                <a href="#">Cillum dolore eu fugiat?</a>
              </li>
              <li>
                <a href="#">Lorem Ipsum dolor sit?</a>
              </li>
              <li>
                <a href="#">Dolor Sit Amet?</a>
              </li>
            </ul>
          </div>
          {/* Footer widget widget-listings Part End */}
        </div>
        <div className="col-md-4 col-sm-6 col-xs-12">
          {/* Footer widget newsletter Part Start */}
          <div className="widget widget-newsletter">
            <div className="widget-newsletter-area">
              <form
                id="cbx-subscribe-form"
                className="navbar-form"
                role="search"
              >
                <div className="input-group">
                  <input
                    type="email"
                    id="subscribe"
                    required=""
                    className="form-control"
                    placeholder="Your Email"
                    name="email"
                  />
                  <div className="input-group-btn">
                    <button className="btn btn-default" type="submit">
                      <i className="far fa-paper-plane" />
                    </button>
                  </div>
                  <p id="cbx-subscribe-form-error" />
                </div>
              </form>
              <p>
                It you want to connect with us please subscribe by your email.
              </p>
              <h5>We Accept:</h5>
              <ul className="payment-gateways">
                <li>
                  <a href="#">
                    <img src="images/amex.png" alt="amex" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="images/mastercard.png" alt="mastercard" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="images/paypal.png" alt="paypal" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="images/visa.png" alt="visa" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/* Footer widget newsletter Part End */}
        </div>
      </div>
    </div>
  </div>
  {/* Footer Top Part End */}
  {/* Footer Bottom Part Start */}
  <div className="cbx-footer-bottom">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="copyright text-center">
            <p>
              © 2023 Copyright CouponJugaad. All Rights reserved. Made with{" "}
              <i className="fa fa-heart" /> at
              <a href="https://codeboxr.com/">Codeboxr</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Footer Bottom Part End */}
</footer>

    
    </>
  )
}

export default Footer