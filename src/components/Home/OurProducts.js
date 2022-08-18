import React, { useEffect, useState } from 'react';

const OurProducts = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch("product.json")
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
                    <h1 className='text-4xl font-bold my-4 ml-12'>PRODUCT COLLECTION</h1>
                    <p className='lg:ml-[-30px]'>Alienum phaedrum torquatos nec eu,  detr periculis ex, nihil expetendis in mei. <br /> <span className=' lg:ml-48'>Mei an pericula.</span></p>
                </div>
            </div>

            <div>
                <h1>{products.length}</h1>
            </div>
        </div>
    );
};

export default OurProducts;