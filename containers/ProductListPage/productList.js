import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getProductsBySlug } from '../../actions/product.action';
import Layout from '../../components/Layout/layout';
import { useLocation } from 'react-router-dom';

const ProductList = (props) => {

    const dispatch = useDispatch();
    const location = useLocation()
    const params = location.pathname.split('/')[1]

    useEffect(() => {
        dispatch(getProductsBySlug(params));
    }, []);

    return(
        <Layout>
            <div>ProductList</div>
        </Layout>
    )
}

export default ProductList;