import classNames from 'classnames/bind';
import Title from '../../Title';

import styles from './SpecialProduct.module.css';
import Product from '~/components/UI/Product';
import { useEffect, useState } from 'react';

const cx = classNames.bind(styles);

function SpecialProduct() {
    const [listSpecialProduct, setListSpecialProduct] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/special-product')
            .then((res) => {
                return res.json();
            })
            .then((res) => {
                setListSpecialProduct(res);
            });
    }, []);
    return (
        <div className={cx('special-product')}>
            <Title
                title="~ Special Products ~"
                content="Weekly Food Offers"
                add="The free time with the solution to us, the option of flexible arrangement, which is the greatest."
            />
            <div className={cx('list-product')}>
                {listSpecialProduct.map((product, index) => {
                    return (
                        <div key={index} className={cx('product-item')}>
                            <Product
                                key={index}
                                sale={product.sale}
                                img={product.img}
                                type={product.type}
                                title={product.title}
                                rate={product.rate}
                                priceReal={product.priceReal}
                                priceFake={product.priceFake}
                            />
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default SpecialProduct;
