import React from 'react';
import './ProductCountdown.css'; // Assuming the CSS file is named 'ProductCountdown.css'

const ProductCountdown = () => {
  return (
    <section className="product-coundown-area tpcoundown__bg grey-bg pb-25" style={{ backgroundImage: 'url(assets/images/coundpwn-bg-1.png)' }}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="tpcoundown p-relative ml-175">
              <div className="section__content mb-35">
                <span className="section__sub-title mb-10">~ Deals Of The Day ~</span>
                <h2 className="section__title mb-25">Premium Drinks <br /> Fresh Farm Product</h2>
                <p>
                  The liber tempor cum soluta nobis eleifend option congue <br />
                  doming quod mazim placerat facere possum assam going through.
                </p>
              </div>
              <div className="tpcoundown__count">
                <h4 className="tpcoundown__count-title">Hurry up! Offer End In:</h4>
                <div className="tpcoundown__countdown" data-countdown="2024/06/11"></div>
                <div className="tpcoundown__btn mt-50">
                  <a className="whight-btn" href="shop-details-grid.html">Shop Now</a>
                  <a className="whight-btn border-btn ml-15" href="shop-list-view.html">View Menu</a>
                </div>
              </div>
              <div className="tpcoundown__shape d-none d-lg-block">
                <img className="tpcoundown__shape-one" src="assets/images/tree-leaf-1.svg" alt="Shape 1" />
                <img className="tpcoundown__shape-two" src="assets/images/tree-leaf-2.svg" alt="Shape 2" />
                <img className="tpcoundown__shape-three" src="assets/images/tree-leaf-3.svg" alt="Shape 3" />
                <img className="tpcoundown__shape-four" src="assets/images/fresh-shape-1.svg" alt="Shape 4" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCountdown;
