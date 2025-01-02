import classNames from 'classnames/bind';
import FeatherIcon from 'feather-icons-react';

import styles from './ListProduct.module.scss';
import Product from '../../Product';
import BtnControl from './BtnControl/BtnControl';
import { useState, useEffect } from 'react';

const cx = classNames.bind(styles);

function ListProduct() {
    const [listProduct, setListProduct] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/shop')
            .then((res) => {
                return res.json();
            })
            .then((res) => {
                setListProduct(res);
            });
    }, []);

    
    const [page, setPage] = useState(1);

    const numberProduct = 12; 

    const handleNextPage = () => {
        if (listProduct.length / page > numberProduct) {
            setPage((prev) => prev + 1);
            window.scrollTo({
                top: 0,
            });
        }
    };

    const handleBackPage = () => {
        if (page > 1) {
            setPage((prev) => prev - 1);
            window.scrollTo({
                top: 0,
            });
        }
    };

    const handleFocusPage = (index) => {
        setPage(index);
        window.scrollTo({
            top: 0,
        });
    };
    const numberPage = () => {
        let allPage = [];
        const totalPage = listProduct.length / numberProduct + 1;
        for (let index = 1; index <= totalPage; index++) {
            allPage.push(
                <BtnControl
                    key={index}
                    callback={() => {
                        handleFocusPage(index);
                    }}
                    number={index}
                    checked={index === page ? true : false}
                />,
            );
        }
        return allPage;
    };
    return (
        <div className={cx('list-product-container')}>
            <div className={cx('feature')}>
                <span>Showing 1-12 of 28 results</span>
                <select className={cx('sort')}>
                    <option>Sort by best selling</option>
                    <option>Sort by popularity</option>
                    <option>Price: low to high</option>
                    <option>Price: high to low</option>
                </select>
            </div>
            <div className={cx('list-product')}>
                {listProduct.slice((page - 1) * 12, page * 12).map((product, index) => {
                    return (
                        <div key={index} className={cx('product')}>
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
            <div className={cx('control-list')}>
                <span onClick={handleBackPage}>
                    <FeatherIcon icon="chevrons-left" />
                </span>
                {numberPage()}
                <span onClick={handleNextPage}>
                    <FeatherIcon icon="chevrons-right" />
                </span>
            </div>
        </div>
    );
}

export default ListProduct;
