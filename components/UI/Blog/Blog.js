import classNames from 'classnames/bind';
import styles from './src/components/UI/Blog/Blog.module.css';

const cx = classNames.bind(styles);

function Blog({ img, type, day, title, content }) {
    return (
        <div className={cx('blog')}>
            <div className={cx('img')}>
                <img src={img} alt="IMG_BLOG" />
            </div>
            <div className={cx('bog-content')}>
                <div className={cx('type-day')}>
                    <h5 className={cx('type')}>{type} </h5>
                    <h5 className={cx('day')}>{day}</h5>
                </div>
                <a href="/blog" className={cx({ 'title-size': content === null ? false : true })}>
                    {title}
                </a>
                {content && <p>{content}</p>}
            </div>
        </div>
    );
}

export default Blog;
