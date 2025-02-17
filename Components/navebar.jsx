import Link from "next/link";
import React, { useState } from "react";
import LoginSignupPopup from "../Components/popoverLogin/popover";
const Navebar = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  return (
    <>
      {" "}
      <header className="site-header header-fixed" data-responsive-width={991}>
        <div className="header-topbar-wrapper">
          <div className="container">
            <div className="topbar-content">
              <div className="site-logo">
                <a href="index.html" className="logo">
                  <img
                    src="images/logo-dark.png"
                    alt="site logo"
                    className="main-logo"
                  />
                </a>
              </div>
              {/* /.site-logo */}
              <div className="topbar-right">
                <a className="btn coupon-btn" href="submit-coupon.html">
                  <span className="hidden-xs">Submit Coupon</span>
                  <span className="hidden-md hidden-lg hidden-sm">
                    <i className="fa fa-plus" />
                  </span>
                </a>
                <a
                  href="#showSearchBar"
                  className="search-btn"
                  data-bs-toggle="collapse"
                  role="button"
                  aria-expanded="false"
                  aria-controls="showSearchBar"
                >
                  <i className="fas fa-search" />
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* /.header-topbar */}
        <div id="showSearchBar" className="collapse">
          <div className="container">
            <div className="row">
              <div className="col-xs-12">
                <div className="searchbar-wrapper">
                  <form className="navbar-form" role="search">
                    <div className="input-group">
                      <input
                        autoComplete="off"
                        type="text"
                        className="form-control"
                        placeholder="Search"
                        name="q"
                      />
                      <div className="input-group-btn">
                        <button className="btn btn-default" type="submit">
                          <i className="glyphicon glyphicon-search" />
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="header-inner">
            <nav id="site-navigation" className="main-nav">
              <div className="burger-menu">
                <span className="bar" />
                <span className="bar" />
                <span className="bar" />
              </div>
              <div
                className="menu-wrapper main-nav-container canvas-menu-wrapper"
                id="mega-menu-wrap"
              >
                <div className="canvas-header">
                  <div className="mobile-offcanvas-logo">
                    <a href="index.html">
                      <img
                        src="images/logo-dark.png"
                        alt="site logo"
                        className="logo-sticky"
                      />
                    </a>
                  </div>
                  <div
                    className="close-menu menu-close"
                    id="page-close-main-menu"
                  >
                    <i className="fas fa-times" />
                  </div>
                </div>
                <ul className="codeboxr-main-menu">
                  <li className="has-submenu">
                    <a href="index.html">Home</a>
                    <ul className="sub-menu">
                      <li>
                        <a href="index.html">Home One</a>
                      </li>
                      <li>
                        <a href="index-two.html">Home Two</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="category.html">Hot Deals</a>
                  </li>
                  <li className="has-submenu">
                    <a href="#">Categories</a>
                    <ul className="sub-menu">
                      <li>
                        <a href="category.html">Accessories</a>
                      </li>
                      <li>
                        <a href="category.html">Apparel</a>
                      </li>
                      <li>
                        <a href="category.html">Automotive</a>
                      </li>
                      <li>
                        <a href="category.html">Black Friday</a>
                      </li>
                      <li>
                        <a href="category.html">Books</a>
                      </li>
                      <li>
                        <a href="category.html">Clothing</a>
                      </li>
                      <li>
                        <a href="category.html">Fashion</a>
                      </li>
                      <li>
                        <a href="category.html">Foods</a>
                      </li>
                      <li>
                        <a href="category.html">Free Shipping</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="stores.html">Stores</a>
                  </li>
                  <li className="has-submenu menu-item-depth-0">
                    <a href="blog.html">Blog</a>
                    <ul className="sub-menu">
                      <li>
                        <a href="blog.html">Blog List Right Sidebar</a>
                      </li>
                      <li>
                        <a href="blog-left-sidebar.html">
                          Blog List Left Sidebar
                        </a>
                      </li>
                      <li>
                        <a href="blog-grid.html">Blog Grid Right Sidebar</a>
                      </li>
                      <li>
                        <a href="blog-grid-left-sidebar.html">
                          Blog Grid Left Sidebar
                        </a>
                      </li>
                      <li>
                        <a href="blog-grid-nosidebar.html">
                          Blog Grid No Sidebar
                        </a>
                      </li>
                      <li>
                        <a href="blog-grid-three-column.html">
                          Blog Grid 3 Column
                        </a>
                      </li>
                      <li>
                        <a href="blog-single.html">Blog Single Right Sidebar</a>
                      </li>
                      <li>
                        <a href="blog-single-leftsidebar.html">
                          Blog Single Left Sidebar
                        </a>
                      </li>
                      <li>
                        <a href="blog-single-nosidebar.html">
                          Blog Single No Sidebar
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="has-submenu menu-item-depth-0">
                    <a href="#">Pages</a>
                    <ul className="sub-menu">
                      <li>
                        <a href="dashboard.html">Dashboard</a>
                      </li>
                      <li>
                        <a href="submit-coupon.html">Submit Coupon</a>
                      </li>
                      <li>
                        <a href="coupon-code.html">Coupon Code</a>
                      </li>
                      <li>
                        <a href="coupon-sale.html">Coupon Sale</a>
                      </li>
                      <li>
                        <a href="coupon-printable.html">Coupon Printable</a>
                      </li>
                      <li>
                        <a href="about-us.html">About Us</a>
                      </li>
                      <li>
                        <a href="pricing.html">Pricing</a>
                      </li>
                      <li>
                        <a href="typography.html">Typography</a>
                      </li>
                    </ul>
                  </li>
                  <li className="menu-item-depth-0">
                    <a href="contact.html">Contact</a>
                  </li>
                </ul>
              </div>
              {/* /.menu-wrapper */}
              <div>
                <button
                  className="cbx-btn btn-brand"
                  onClick={() => setIsPopupOpen(true)}
                >
                  Login/Signup
                </button>

                {isPopupOpen && (
                  <LoginSignupPopup onClose={() => setIsPopupOpen(false)} />
                )}
              </div>
            </nav>
            {/* /.site-nav */}
          </div>
          {/* /.header-inner */}
        </div>
        {/* /.container-full */}
      </header>
    </>
  );
};

export default Navebar;
