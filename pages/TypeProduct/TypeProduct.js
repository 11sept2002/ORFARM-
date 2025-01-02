import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import classNames from 'classnames/bind';

import styles from './TypeProduct.module.css';
import NotFound from '~/pages/NotFound';
import Filter from '~/components/UI/shop/Filter';
import ListProduct from '~/components/UI/shop/ListProduct';

const cx = classNames.bind(styles);

function TypeProduct() {
    //Check typeId
    const params = useParams();
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

    const paramId = types.find((type) => type.id.toString() === params.typeId);

    //End check typeId

    console.log(paramId);

    return (
        <div>
            {paramId !== undefined ? (
                <div className={cx('type-product')}>
                    <div className={cx('infor-type')}>
                        <div>
                            <h2>{paramId.title}</h2>
                            <p>
                                <Link to="/">Home</Link>
                                <span>/</span>
                                <Link to="/store">Store</Link>
                                <span>/</span>
                                {paramId.title}
                            </p>
                        </div>
                    </div>
                    <div className={cx('container')}>
                        <div className={cx('content')}>
                            <div className={cx('container-filter')}>
                                <Filter />
                            </div>
                            <div className={cx('container-list-product')}>
                                <ListProduct />
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <NotFound />
            )}
        </div>
    );
}
export default TypeProduct;
