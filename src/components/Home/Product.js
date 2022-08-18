import React, { useState } from 'react';

const Product = ({ product }) => {
    const [isHovering, setIsHovering] = useState(false);

    const handleMouseOver = () => {
        setIsHovering(true);
    };

    const handleMouseOut = () => {
        setIsHovering(false);
    };
    console.log(product);
    return (
        <div className='shadow-xl p-8'>
            <img className='hover:w-[400px] h-full' src={product.img} alt="" />
            <div className='flex justify-evenly'>
                <h3 className='font-bold hover:text-primary static'>{product.name}</h3>

                <div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} >
                    {isHovering ? <h3 className='font-bold delay-700 text-green-500'>Add to Cart</h3>
                        : <h3 className='font-bold block delay-1000'>{product.price}</h3>}
                </div>
            </div>
        </div>
    );
};

export default Product;