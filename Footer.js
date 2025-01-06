import React from 'react';
import './Footer.css';  // Import the CSS file for styles

const Footer = () => {
  return (
    <footer>
      <div className="tpfooter__area theme-bg-2">
        <div className="tpfooter__top pb-15">
          <div className="container">
            <div className="row">
              {/* Footer Column 1 */}
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                <div className="tpfooter__widget footer-col-1 mb-50">
                  <h4 className="tpfooter__widget-title">Let Us Help You</h4>
                  <p>If you have any question, please <br />
                    contact us at: <a href="mailto:support@example.com">support@example.com</a>
                  </p>
                  <div className="tpfooter__widget-social mt-45">
                    <span className="tpfooter__widget-social-title mb-5">Social Media:</span>
                    <a href="facebook.com"><i className="fab fa-facebook-f"></i></a>
                    <a href="twitter.com"><i className="fab fa-twitter"></i></a>
                    <a href="youtube.com"><i className="fab fa-youtube"></i></a>
                    <a href="pintrest.com"><i className="fab fa-pinterest-p"></i></a>
                    <a href="skype.com"><i className="fab fa-skype"></i></a>
                  </div>
                </div>
              </div>

              {/* Footer Column 2 */}
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                <div className="tpfooter__widget footer-col-2 mb-50">
                  <h4 className="tpfooter__widget-title">Looking for Orfarm?</h4>
                  <p>68 St. Vicent Place, Glasgow, Greater <br /> Newyork NH2012, UK.</p>
                  <div className="tpfooter__widget-time-info mt-35">
                    <span>Monday – Friday: <b>8:10 AM – 6:10 PM</b></span>
                    <span>Saturday: <b>10:10 AM – 06:10 PM</b></span>
                    <span>Sunday: <b>Closed</b></span>
                  </div>
                </div>
              </div>

              {/* Footer Column 3 */}
              <div className="col-xl-2 col-lg-4 col-md-4 col-sm-5">
                <div className="tpfooter__widget footer-col-3 mb-50">
                  <h4 className="tpfooter__widget-title">HOT CATEGORIES</h4>
                  <div className="tpfooter__widget-links">
                    <ul>
                      <li><a href="index.html">Fruits & Vegetables</a></li>
                      <li><a href="index.html">Dairy Products</a></li>
                      <li><a href="index.html">Package Foods</a></li>
                      <li><a href="index.html">Beverage</a></li>
                      <li><a href="index.html">Health & Wellness</a></li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Footer Column 4 */}
              <div className="col-xl-4 col-lg-6 col-md-8 col-sm-7">
                <div className="tpfooter__widget footer-col-4 mb-50">
                  <h4 className="tpfooter__widget-title">Our newsletter</h4>
                  <div className="tpfooter__widget-newsletter">
                    <p>Subscribe to the Orfarm mailing list to receive updates <br /> on new arrivals & other information.</p>
                    <form action="index.html">
                      <span><i><img src="/project/src/assets/footer/message-1.png" alt="" /></i></span>
                      <input type="email" placeholder="Your email address..." />
                      <button className="tpfooter__widget-newsletter-submit tp-news-btn">Subscribe</button>
                    </form>
                    <div className="tpfooter__widget-newsletter-check mt-10">
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                          I accept terms & conditions & privacy policy.
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="tpfooter___bottom pt-40 pb-40">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-7 col-sm-12">
                <div className="tpfooter__copyright">
                  <span className="tpfooter__copyright-text">Copyright © <a href="index.html">ORFARM</a> all rights reserved. Powered by <a href="index.html">ThemePure</a>.</span>
                </div>
              </div>
              <div className="col-lg-6 col-md-5 col-sm-12">
                <div className="tpfooter__copyright-thumb text-end">
                  <img src="project/src/assets/footer/footer-payment.png" alt="hi" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
