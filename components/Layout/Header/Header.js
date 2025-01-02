import classNames from 'classnames/bind';
import styles from '..Header/Header.module.css';
import { NavLink } from 'react-router-dom';
import FeatherIcon from 'feather-icons-react';
import logo from '~src/assets/images/header/logo.svg';
import { useState, useRef, useEffect } from 'react';

const cx = classNames.bind(styles);

function Header() {
    const [pathname, setPathName] = useState('/');
    const oldPage = useRef(pathname);

    useEffect(() => {
        if (pathname !== oldPage.current) {
            try {
                window.scroll({
                    top: 0,
                    left: 0,
                });
            } catch (error) {
                window.scrollTo(0, 0);
            }
            oldPage.current = pathname;
        }
    }, [pathname]);

    return (
        <header className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('header-logo')}>
                    <div className="logo">
                        <NavLink exact="true" className={({ isActive }) => (isActive ? cx('active') : null)} to="/">
                            <img src={logo} alt="Orfarm" />
                        </NavLink>
                    </div>
                </div>
                <div className={cx('header-menu')}>
                    <ul className={cx('menu')}>
                        <li className={cx('item')}>
                            <NavLink
                                exact="true"
                                className={({ isActive }) => (isActive ? cx('active') : null)}
                                onClick={() => {
                                    setPathName('/');
                                }}
                                to="/"
                            >
                                Home
                            </NavLink>
                        </li>
                        <li className={cx('item')}>
                            <NavLink
                                className={({ isActive }) => (isActive ? cx('active') : null)}
                                onClick={() => {
                                    setPathName('/Shop');
                                }}
                                to="/Shop"
                            >
                                Shop
                            </NavLink>
                        </li>
                        <li className={cx('item')}>
                            <NavLink
                                className={({ isActive }) => (isActive ? cx('active') : null)}
                                onClick={() => {
                                    setPathName('/blog');
                                }}
                                to="/blog"
                            >
                                Blog
                            </NavLink>
                        </li>
                        <li className={cx('item')}>
                            <NavLink
                                className={({ isActive }) => (isActive ? cx('active') : null)}
                                onClick={() => {
                                    setPathName('/About Us');
                                }}
                                to="/About Us"
                            >
                                About Us
                            </NavLink>
                        </li>
                        <li className={cx('item')}>
                            <NavLink
                                className={({ isActive }) => (isActive ? cx('active') : null)}
                                onClick={() => {
                                    setPathName('/Contact');
                                }}
                                to="/Contact"
                            >
                                Contact
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <div className={cx('header-right')}>
                    <div className={cx('right-logo', 'search')}>
                        <FeatherIcon className={cx('icon')} icon="search" />
                    </div>
                    <div className={cx('right-logo', 'user')}>
                        <FeatherIcon className={cx('icon')} icon="user" />
                    </div>
                    <div className={cx('right-logo', 'love')}>
                        <FeatherIcon className={cx('icon')} icon="heart" />
                        <div className={cx('count')}>0</div>
                    </div>
                    <div className={cx('right-logo', 'cart')}>
                        <FeatherIcon className={cx('icon')} icon="shopping-cart" />
                        <div className={cx('count')}>0</div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
