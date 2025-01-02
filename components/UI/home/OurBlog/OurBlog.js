import classNames from 'classnames/bind';
import Blog from '~/components/UI/Blog';
import styles from './senthil/src/components/UI/home/OurBlog/OurBlog.module.cssOurBlog.module.css';
import listBlog from '~/constansts/home/blog';
import Title from '../../Title';

const cx = classNames.bind(styles);

function OurBlog() {
    return (
        <div className={cx('blog-content')}>
            <Title
                title="~ Read Our Blog ~"
                content="Our Latest Posts"
                add="The free time with the solution to us, the option of flexible arrangement, which is the greatest."
            />
            <div className={cx('list-blog')}>
                {listBlog.map((blog, index) => {
                    return (
                        <div key={index} className={cx('item-blog')}>
                            <Blog
                                key={index}
                                img={blog.img}
                                type={blog.type}
                                day={blog.day}
                                title={blog.title}
                                content={blog.content}
                            />
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default OurBlog;