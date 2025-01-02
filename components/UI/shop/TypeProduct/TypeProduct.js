import styles from './TypeProduct.module.css';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function TypeProduct({ to, img, title }) {
    return (
        <div className={cx('type-product')}>
            <div className={cx('content')}>
                <Link to={to}>
                    <img src={img} alt={title} />
                    <h2>{title}</h2>
                </Link>
            </div>
        </div>
    );
}

export default TypeProduct;
