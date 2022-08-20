import { async } from '@firebase/util';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

import ManageProduct from './ManageProduct';

const ManageAllProduct = () => {
    const [allProduct, setAllProduct] = useState([])

    // console.log(_id);
    useEffect(() => {
        fetch('https://infinite-refuge-87124.herokuapp.com/product')
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                setAllProduct(data)
            })
    }, [allProduct])



    return (
        <div className='py-20 px-16'>
            <h1 className='text-center text-2xl font-bold text-green-500'>MANAGE ALL PRODUCT</h1>
            <div className='grid lg:grid-cols-3 col-start-10  grid-cols-1 gap-5 mt-10'>
                {
                    allProduct.map(product => <ManageProduct product={product}>

                    </ManageProduct>)
                }
            </div>
        </div>
    );
};

export default ManageAllProduct;