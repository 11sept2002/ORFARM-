import classNames from 'classnames/bind';
import styles from './BtnControl.module.css';

const cx = classNames.bind(styles);
function BtnControl({ number, checked, callback }) {
    return (
        <div onClick={callback} className={cx('btn-control', { checked: true === checked })}>
            {number}
        </div>
    );
}

export default BtnControl;
