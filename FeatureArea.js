import React from 'react';
import './FeatureArea.css';  // Import the CSS file for styles

const FeatureArea = () => {
  return (
    <section className="feature-area mainfeature__bg grey-bg pt-50 pb-40" data-background="assets/images/footer-shape-1.svg">
      <div className="container">
        <div className="mainfeature__border pb-15">
          <div className="row row-cols-lg-5 row-cols-md-3 row-cols-2">
            {/* Feature Item 1 */}
            <div className="col">
              <div className="mainfeature__item text-center mb-30">
                <div className="mainfeature__icon">
                  <img src="assets/imgages/feature-icon-1.svg" alt="Fast Delivery" />
                </div>
                <div className="mainfeature__content">
                  <h4 className="mainfeature__title">Fast Delivery</h4>
                  <p>Across West & East India</p>
                </div>
              </div>
            </div>

            {/* Feature Item 2 */}
            <div className="col">
              <div className="mainfeature__item text-center mb-30">
                <div className="mainfeature__icon">
                  <img src="assets/images/feature-icon-2.svg" alt="Safe Payment" />
                </div>
                <div className="mainfeature__content">
                  <h4 className="mainfeature__title">Safe Payment</h4>
                  <p>100% Secure Payment</p>
                </div>
              </div>
            </div>

            {/* Feature Item 3 */}
            <div className="col">
              <div className="mainfeature__item text-center mb-30">
                <div className="mainfeature__icon">
                  <img src="assets/images/feature-icon-3.svg" alt="Online Discount" />
                </div>
                <div className="mainfeature__content">
                  <h4 className="mainfeature__title">Online Discount</h4>
                  <p>Add Multi-buy Discount</p>
                </div>
              </div>
            </div>

            {/* Feature Item 4 */}
            <div className="col">
              <div className="mainfeature__item text-center mb-30">
                <div className="mainfeature__icon">
                  <img src="assets/images/feature-icon-4.svg" alt="Help Center" />
                </div>
                <div className="mainfeature__content">
                  <h4 className="mainfeature__title">Help Center</h4>
                  <p>Dedicated 24/7 Support</p>
                </div>
              </div>
            </div>

            {/* Feature Item 5 */}
            <div className="col">
              <div className="mainfeature__item text-center mb-30">
                <div className="mainfeature__icon">
                  <img src="assets/img/icon/feature-icon-5.svg" alt="Curated Items" />
                </div>
                <div className="mainfeature__content">
                  <h4 className="mainfeature__title">Curated Items</h4>
                  <p>From Handpicked Sellers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureArea;
