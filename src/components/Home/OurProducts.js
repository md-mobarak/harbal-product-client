import React, { useEffect, useState } from 'react';
import Product from './Product';

const OurProducts = () => {
    const [products, setProducts] = useState([])
    const tenProducts = products.slice(0, 10)
    useEffect(() => {
        fetch("https://infinite-refuge-87124.herokuapp.com/product")
            .then(res => res.json())
            .then(data => {
                setProducts(data)
                console.log(data);
            })
    }, [])
    return (
        <div>

            <div className='flex justify-center'>
                <img className='h-8' src="https://sante.qodeinteractive.com/wp-content/uploads/2020/09/section-title-icon-1.png" alt="" />
            </div>
            <div className='flex justify-center items-center'>
                <div className=''>
                    <h1 className='text-4xl font-bold my-3 ml-12'>PRODUCT COLLECTION</h1>
                    <p className='lg:ml-[-30px]'>Alienum phaedrum torquatos nec eu,  detr periculis ex, nihil expetendis in mei. <br /> <span className=' lg:ml-48'>Mei an pericula.</span></p>
                </div>
            </div>

            <div className='grid  grid-cols-2 px-4 gap-4 lg:grid-cols-5 lg:gap-4 my-12 lg:px-6'>
                {
                    tenProducts.map(product => <Product product={product}>

                    </Product>)
                }
            </div>
        </div>
    );
};

export default OurProducts;