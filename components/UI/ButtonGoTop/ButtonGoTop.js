import classNames from 'classnames/bind';
import { useState, useEffect } from 'react';
import styles from './src/components/UI/ButtonGoTop.module.css';
import FeatherIcon from 'feather-icons-react';

const cx = classNames.bind(styles);
function ButtonGoTop() {
    const [showTopBtn, setShowTopBtn] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 400) {
                setShowTopBtn(true);
            } else {
                setShowTopBtn(false);
            }
        };
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };
    return (
        <div>
            {showTopBtn && (
                <div onClick={goToTop} className={cx('button-go-top')}>
                    <FeatherIcon className={cx('icon')} icon="chevrons-up" />
                </div>
            )}
        </div>
    );
}

export default ButtonGoTop;
