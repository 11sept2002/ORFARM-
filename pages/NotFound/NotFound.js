import classNames from 'classnames/bind';
import styles from './NotFound.module.css';

const cx = classNames.bind(styles);
function NotFound() {
    return <div className={cx('not-found')}></div>;
}

export default NotFound;
