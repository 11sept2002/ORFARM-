import React, { useState } from "react";
import "./MobileMenu.css";

const MobileMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Mobile Menu Area */}
      <div id="header-sticky-2" className={`tpmobile-menu ${isMenuOpen ? "open" : ""}`}>
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-4 col-md-4 col-3 col-sm-3">
              <div className="mobile-menu-icon">
                <button className="tp-menu-toggle" onClick={toggleMenu}>
                  <i className="icon-menu1"></i>
                </button>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-6 col-sm-4">
              <div className="header__logo text-center">
                <a href="index.html">
                  <img src="assets/img/logo/logo.png" alt="logo" />
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-3 col-sm-5">
              <div className="header__info d-flex align-items-center">
                <div className="header__info-search tpcolor__purple ml-10 d-none d-sm-block">
                  <button className="tp-search-toggle">
                    <i className="icon-search"></i>
                  </button>
                </div>
                <div className="header__info-user tpcolor__yellow ml-10 d-none d-sm-block">
                  <a href="log-in.html">
                    <i className="icon-user"></i>
                  </a>
                </div>
                <div className="header__info-wishlist tpcolor__greenish ml-10 d-none d-sm-block">
                  <a href="wishlist.html">
                    <i className="icon-heart icons"></i>
                  </a>
                </div>
                <div className="header__info-cart tpcolor__oasis ml-10 tp-cart-toggle">
                  <button>
                    <i>
                      <img src="assets/img/icon/cart-1.svg" alt="" />
                    </i>
                    <span>5</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Overlay for mobile menu */}
      <div className={`body-overlay ${isMenuOpen ? "active" : ""}`}></div>
    </>
  );
};

export default MobileMenu;
