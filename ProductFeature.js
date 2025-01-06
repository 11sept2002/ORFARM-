import React from 'react';
import { Link } from 'react-router-dom'; // For navigation (if you're using React Router)

const ProductFeature = () => {
  return (
    <section className="product-feature-area product-feature grey-bg pt-80 pb-40">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-12">
            <div className="tpfeature__thumb p-relative pb-40">
              <img src="assets/images/feature-thumb-1.png" alt="Feature Thumb" />
              <div className="tpfeature__shape d-none d-md-block">
                <img className="tpfeature__shape-one" src="assets/images/feature-shape-1.png" alt="Shape 1" />
                <img className="tpfeature__shape-two" src="assets/images/feature-shape-2.png" alt="Shape 2" />
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12">
            <div className="tpproduct-feature p-relative pt-45 pb-40">
              <div className="tpsection tpfeature__content mb-35">
                <h4 className="tpsection__sub-title mb-0">~ The Best For Your ~</h4>
                <h4 className="tpsection__title tpfeature__title mb-25">
                  Organic Drinks <br /> <span>Easy Healthy</span> - Happy Life
                </h4>
                <p>
                  The liber tempor cum soluta nobis eleifend option congue <br /> doming quod mazim placerat
                  facer possim assum.
                </p>
              </div>
              <div className="row">
                <div className="col-lg-6 col-md-6">
                  <div className="tpfeature__box">
                    <div className="tpfeature__product-item mb-25">
                      <h4 className="tpfeature__product-title">Fresh Fruits:</h4>
                      <span className="tpfeature__product-info">Apples, Berries & Cherries</span>
                    </div>
                    <div className="tpfeature__product-item mb-45">
                      <h4 className="tpfeature__product-title">Expiry Date:</h4>
                      <span className="tpfeature__product-">See on The Bottle Cap</span>
                    </div>
                    <div className="tpfeature__btn">
                      <Link className="tp-btn-4" to="/cart">
                        Add To Cart
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="tpfeature__box">
                    <div className="tpfeature__product-item mb-25">
                      <h4 className="tpfeature__product-title">Ingredient:</h4>
                      <span className="tpfeature__product-info">Energy, Protein, Sugars</span>
                    </div>
                    <div className="tpfeature__product-item mb-45">
                      <h4 className="tpfeature__product-title">Bottle Size:</h4>
                      <span className="tpfeature__product-">500ml – 1000ml</span>
                    </div>
                    <div className="tpfeature__btn">
                      <Link className="tp-btn-3" to="/shop-2">
                        View More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tpfeature__shape d-none d-md-block">
                <img className="tpfeature__shape-three" src="assets/images/feature-shape-3.png" alt="Shape 3" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductFeature;
