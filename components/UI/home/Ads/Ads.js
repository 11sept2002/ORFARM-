import classNames from 'classnames/bind';
import { memo } from 'react';
import { Link } from 'react-router-dom';
import styles from './Ads.module.css';
import revo1 from '~./senthil/src/assets/images/home/ads/img-revo1.png';
import revo2 from '~./senthil/src/assets/images/home/ads/img-revo2.png';
import revo3 from '~./senthil/src/assets/images/home/ads/img-revo3.png';

const cx = classNames.bind(styles);

function Ads({ src, title, content }) {
    return (
        <div className={cx('ads')}>
            <div className={cx('ads-container')}>
                <div className={cx('content')}>
                    <h5>{title}</h5>
                    <h1>{content}</h1>
                    <p>Presentation matters. Our fresh Vietnamese vegetables look beautiful and taste even better.</p>
                    <Link to="/Shop">Shop Now</Link>
                </div>
                <div className={cx('img')}>
                    <img src={src} alt="IMG" />
                    <img className={cx('revo-1')} src={revo1} alt="Revo" />
                    <img className={cx('revo-2')} src={revo2} alt="Revo" />
                    <img className={cx('revo-3')} src={revo3} alt="Revo" />
                </div>
            </div>
        </div>
    );
}

export default memo(Ads);
