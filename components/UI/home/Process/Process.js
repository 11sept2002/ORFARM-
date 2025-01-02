import styles from './Process.module.css';
import classNames from 'classnames';

import icon1 from '~/src/assets/images/home/trust/icon-svg1.svg';
import icon2 from '~/src/assets/images/home/trust/icon-svg2.svg';
import icon3 from '~/src/assets/images/home/trust/icon-svg3.svg';
import line1 from '~/src/assets/images/home/trust/line-svg1.svg';
import line2 from '~/src/assets/images/home/trust/line-svg2.svg';

const cx = classNames.bind(styles);
function Process() {
    return (
        <div className={cx('process')}>
            <div className={cx('item')}>
                <img src={icon1} alt="icon1" />
                <h3>Select Your Products</h3>
                <p>
                    Choose from selected products to get started. Hold, add, or remove
                    <br /> items.
                </p>
            </div>
            <div className={cx('img-to-item')}>
                <img className={cx('line1')} src={line1} alt="line1" />
            </div>
            <div className={cx('item')}>
                <img src={icon2} alt="icon2" />
                <h3>Our Orfarm Store</h3>
                <p>
                    We offer over 100 products, providing enough nutrition for <br />
                    your family.
                </p>
            </div>
            <div className={cx('img-to-item')}>
                <img className={cx('line2')} src={line2} alt="line2" />
            </div>
            <div className={cx('item')}>
                <img src={icon3} alt="icon3" />
                <h3>Delivery to You</h3>
                <p>Home delivery. Up to 100km and completely free.</p>
            </div>
        </div>
    );
}

export default Process;
