import classNames from 'classnames/bind';
import styles from './senthil/src/components/Layout/Footer/Footer.module.css';
import FeatherIcon from 'feather-icons-react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faYoutube, faSquareInstagram } from '@fortawesome/free-brands-svg-icons';

import icon1 from './src/assets/images/footer/icon-1.svg';
import icon2 from './src/assets/images/footer/icon-2.svg';
import icon3 from './src/assets/images/footer/icon-3.svg';
import icon4 from './src/assets/images/footer/icon-4.svg';
import icon5 from './src/assets/images/footer/icon-5.svg';

const cx = classNames.bind(styles);
function Footer() {
    return (
        <div className={cx('container-footer')}>
            <div className={cx('footer-content')}>
                <div className={cx('list-fast-items')}>
                    <div className={cx('item')}>
                        <img src={icon1} alt="icon1" />
                        <h5>Fast Delivery</h5>
                        <p>Across all provinces</p>
                    </div>
                    <div className={cx('item')}>
                        <img src={icon2} alt="icon2" />
                        <h5>Safe Payment</h5>
                        <p>100% safe payment</p>
                    </div>
                    <div className={cx('item')}>
                        <img src={icon3} alt="icon3" />
                        <h5>Online Discounts</h5>
                        <p>Additional discounts for multiple purchases</p>
                        <img src={icon4} alt="icon4" />
                        <h5>Help Center</h5>
                        <p>Dedicated support 24/7</p>
                    </div>
                    <div className={cx('item')}>
                        <img src={icon5} alt="icon5" />
                        <h5>Curated Items</h5>
                        <p>Items carefully selected from sellers</p>
                </div>
                <div className={cx('list-infor-items')}>
                    <div className={cx('item', 'item-1')}>
                        <h4>Let Us Help You</h4>
                        <div className={cx('content')}>
                            <p>
                                If you have any questions, please contact us at: 
                                <a href="/"> senthildeveloper5@gmail.com</a>
                            </p>
                            <div className={cx('social-network')}>
                                <p>Social Network: </p>
                                <ul className={cx('item-icons')}>
                                    <li>
                                        <a href="/">
                                            <FontAwesomeIcon className={cx('icon')} icon={faFacebookF} />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/">
                                            <FontAwesomeIcon className={cx('icon')} icon={faTwitter} />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/">
                                            <FontAwesomeIcon className={cx('icon')} icon={faYoutube} />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/">
                                            <FontAwesomeIcon className={cx('icon')} icon={faSquareInstagram} />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className={cx('item', 'item-2')}>
                        <h4>Looking for Orfarm?</h4>
                        <div className={cx('content')}>
                            <p>100 Dien Bien Phu, Thanh Khe District, Da Nang</p>
                            <ul>
                                <li>
                                    Monday - Friday: <span>8:10 AM - 6:10 PM</span>
                                </li>
                                <li>
                                    Saturday: <span>10:10 AM - 06:10 PM</span>
                                </li>
                                <li>
                                    Sunday: <span>Closed</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className={cx('item', 'item-3')}>
                        <h4>Hot Categories</h4>
                        <ul className={cx('content')}>
                            <li>
                                <a href="/">Vegetables</a>
                            </li>
                            <li>
                                <a href="/">Dairy Products</a>
                            </li>
                            <li>
                                <a href="/">Packaged Foods</a>
                            </li>
                            <li>
                                <a href="/">Beverages</a>
                            </li>
                            <li>
                                <a href="/">Fresh Meat</a>
                            </li>
                        </ul>
                    </div>
                    <div className={cx('item', 'item-4')}>
                        <h4>Our Newsletter</h4>
                        <div className={cx('content')}>
                            <p>
                                Subscribe to Orfarm's mailing list to receive updates on new arrivals and other information.
                            </p>
                            <div className={cx('email')}>
                                <FeatherIcon className={cx('icon-mail')} icon="mail" />
                                <input
                                    className={cx('input-mail')}
                                    type="email"
                                    name="EMAIL"
                                    placeholder="Your email address"
                                    required=""
                                />
                                <input className={cx('input-submit')} type="submit" value="Subscribe" />
                            </div>
                            <span className={cx('comfirm')}>
                                <input type="checkbox" />
                                I accept the terms & conditions & privacy policy. </span>
                        </div>
                    </div>
                </div>
                <div className={cx('copyright')}>
                    Copyright © <span>ORFARM</span>
                </div>
            </div>
        </div>
    );
}

export default Footer;
