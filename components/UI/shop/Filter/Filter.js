import styles from './Filter.module.css';
import FeatherIcon from 'feather-icons-react';
import classNames from 'classnames/bind';
import { NavLink } from 'react-router-dom';

const cx = classNames.bind(styles);

function Filter() {
    return (
        <div className={cx('filter')}>
            <div className={cx('categories')}>
                <h4>Product Categories</h4>
                <ul className={cx('list-categories')}>
                    <li>
                        <NavLink
                            className={({ isActive }) => (isActive ? null : cx('link-to-type'))}
                            to="/cuahang/snack"
                        >
                            <span>
                                <FeatherIcon className={cx('icon-check')} icon="check" />
                            </span>
                            Snack
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className={({ isActive }) => (isActive ? null : cx('link-to-type'))}
                            to="/cuahang/banh-my-tuoi"
                        >
                            <span>
                                <FeatherIcon className={cx('icon-check')} icon="check" />
                            </span>
                            Fresh Bread
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className={({ isActive }) => (isActive ? null : cx('link-to-type'))}
                            to="/cuahang/trai-cay-tuoi"
                        >
                            <span>
                                <FeatherIcon className={cx('icon-check')} icon="check" />
                            </span>
                            Fresh Fruits
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className={({ isActive }) => (isActive ? null : cx('link-to-type'))}
                            to="/cuahang/thit-tuoi-song"
                        >
                            <span>
                                <FeatherIcon className={cx('icon-check')} icon="check" />
                            </span>
                            Fresh Meat
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className={({ isActive }) => (isActive ? null : cx('link-to-type'))}
                            to="/cuahang/sua-tuoi"
                        >
                            <span>
                                <FeatherIcon className={cx('icon-check')} icon="check" />
                            </span>
                            Fresh Milk
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className={({ isActive }) => (isActive ? null : cx('link-to-type'))}
                            to="/cuahang/do-uong-trai-cay"
                        >
                            <span>
                                <FeatherIcon className={cx('icon-check')} icon="check" />
                            </span>
                            Fruit Drinks
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className={({ isActive }) => (isActive ? null : cx('link-to-type'))} to="/cuahang/rau">
                            <span>
                                <FeatherIcon className={cx('icon-check')} icon="check" />
                            </span>
                            Vegetables
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div className={cx('price')}>
                <h4>Filter by Price</h4>
                <input type="text" placeholder="From"></input>
                <input type="text" placeholder="To"></input>
                <button>Apply</button>
            </div>
            <div className={cx('rating')}>
                <h4>Rating</h4>
                <ul>
                    <li>
                        <a href="/cuahang">
                            <span>
                                <FeatherIcon className={cx('icon-check')} icon="check" />
                            </span>
                            <span>
                                <FeatherIcon className={cx('icon', 'raiter')} icon="star" />
                                <FeatherIcon className={cx('icon', 'raiter')} icon="star" />
                                <FeatherIcon className={cx('icon', 'raiter')} icon="star" />
                                <FeatherIcon className={cx('icon', 'raiter')} icon="star" />
                                <FeatherIcon className={cx('icon', 'raiter')} icon="star" />
                            </span>
                        </a>
                    </li>
                    <li>
                        <a href="/cuahang">
                            <span>
                                <FeatherIcon className={cx('icon-check')} icon="check" />
                            </span>
                            <span>
                                <FeatherIcon className={cx('icon', 'raiter')} icon="star" />
                                <FeatherIcon className={cx('icon', 'raiter')} icon="star" />
                                <FeatherIcon className={cx('icon', 'raiter')} icon="star" />
                                <FeatherIcon className={cx('icon', 'raiter')} icon="star" />
                                <FeatherIcon className={cx('icon')} icon="star" />
                            </span>
                        </a>
                    </li>
                    <li>
                        <a href="/cuahang">
                            <span>
                                <FeatherIcon className={cx('icon-check')} icon="check" />
                            </span>
                            <span>
                                <FeatherIcon className={cx('icon', 'raiter')} icon="star" />
                                <FeatherIcon className={cx('icon', 'raiter')} icon="star" />
                                <FeatherIcon className={cx('icon', 'raiter')} icon="star" />
                                <FeatherIcon className={cx('icon')} icon="star" />
                                <FeatherIcon className={cx('icon')} icon="star" />
                            </span>
                        </a>
                    </li>
                    <li>
                        <a href="/cuahang">
                            <span>
                                <FeatherIcon className={cx('icon-check')} icon="check" />
                            </span>
                            <span>
                                <FeatherIcon className={cx('icon', 'raiter')} icon="star" />
                                <FeatherIcon className={cx('icon', 'raiter')} icon="star" />
                                <FeatherIcon className={cx('icon')} icon="star" />
                                <FeatherIcon className={cx('icon')} icon="star" />
                                <FeatherIcon className={cx('icon')} icon="star" />
                            </span>
                        </a>
                    </li>
                    <li>
                        <a href="/cuahang">
                            <span>
                                <FeatherIcon className={cx('icon-check')} icon="check" />
                            </span>
                            <span>
                                <FeatherIcon className={cx('icon', 'raiter')} icon="star" />
                                <FeatherIcon className={cx('icon')} icon="star" />
                                <FeatherIcon className={cx('icon')} icon="star" />
                                <FeatherIcon className={cx('icon')} icon="star" />
                                <FeatherIcon className={cx('icon')} icon="star" />
                            </span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Filter;