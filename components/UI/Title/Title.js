import classNames from 'classnames/bind';

import styles from './Title.module.css';

const cx = classNames.bind(styles);

function Title({ title, content, add }) {
    return (
        <div className={cx('content')}>
            <h4>{title}</h4>
            <h3>{content}</h3>
            <p>{add}</p>
        </div>
    );
}

export default Title;
