import classNames from 'classnames/bind';
import FeatherIcon from 'feather-icons-react';

import styles from './Product.module.css';

const cx = classNames.bind(styles);
function Product({ sale, img, type, title, rate, priceReal, priceFake }) {
    return (
        <div className={cx('product')}>
            <div className={cx('product-content')}>
                <div className={cx('love-view')}>
                    <div className={cx('icons')}>
                        <FeatherIcon className={cx('icon')} icon="heart" />
                    </div>
                    <div className={cx('icons')}>
                        <FeatherIcon className={cx('icon')} icon="eye" />
                    </div>
                </div>
                <a href="/" className={cx('product-img')}>
                    <div>
                        <img src={img} alt="img-product" />
                    </div>
                </a>
                <div className={cx('product-name')}>{type}</div>
                <a href="/" className={cx('product-describe')}>
                    {title}
                </a>
                <div className={cx('ratings')}>
                    <FeatherIcon className={cx('icon', { rater: 1 <= rate })} icon="star" />
                    <FeatherIcon className={cx('icon', { rater: 2 <= rate })} icon="star" />
                    <FeatherIcon className={cx('icon', { rater: 3 <= rate })} icon="star" />
                    <FeatherIcon className={cx('icon', { rater: 4 <= rate })} icon="star" />
                    <FeatherIcon className={cx('icon', { rater: 5 <= rate })} icon="star" />
                </div>
                <div className={cx('price')}>
                    <div className={cx('price-real')}>${priceReal},00</div>
                    <div className={cx('price-fake')}>{priceFake && `$${priceFake},00`}</div>
                </div>
                {sale && <div className={cx('sale')}>{sale && `-${sale}%`}</div>}
                <div className={cx('product-hover')}>
                    <a className={cx('add-cart')} href="/">
                        Add to Cart
                    </a>
                    <ul className={cx('infor')}>
                        <li>Type: {type}</li>
                        <li>MFG: 4.2022</li>
                        <li>LIFE: 60 days</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Product;