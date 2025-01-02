import classNames from 'classnames/bind';

import styles from './Shop.module.css';
import Filter from '~/components/UI/shop/Filter';
import TypeProduct from '~/components/UI/shop/TypeProduct';
import ListProduct from '~/components/UI/shop/ListProduct';
import { useState, useEffect } from 'react';

const cx = classNames.bind(styles);

function Shop() {
    //Render all type product
    const [types, setTypes] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/type-product')
            .then((res) => {
                return res.json();
            })
            .then((res) => {
                setTypes(res);
            });
    }, []);
    //End render all type product

    return (
        <div className={cx('shop')}>
            <div className={cx('container-shop')}>
                <div className={cx('filter-container')}>
                    <Filter />
                </div>
                <div className={cx('product-container')}>
                    <div className={cx('list-type-product')}>
                        {types.map((type, index) => {
                            return <TypeProduct key={type.id} to={type.to} title={type.title} img={type.img} />;
                        })}
                    </div>
                    <div className={cx('list-product')}>
                        <ListProduct />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Shop;
