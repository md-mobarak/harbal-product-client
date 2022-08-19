import React from 'react';
// import './TopProduct.css'

const TopProduct = () => {
    return (
        <div className='grid grid-cols-1 gap-y-12 lg:gap-y-0 lg:grid-cols-2 my-12 relative p-8 gap-x-3 lg:p-20 lg:gap-x-20'>
            <div className='flex items-center relative'>
                <div>
                    <h1 className='text-5xl font-bold'>2020 Top selling <br />
                        natural moistuizers</h1>
                    <h3 className='text-xl my-5'>
                        Alienum phaedrum torquatos nec eu, detr periculis ex, <br />  nihil expetendis in mei. Mei an pericula euripidis.
                    </h3>
                    <button class="btn btn-secondary bg-green-500 border-0 text-white w-40">READ MORE</button>

                </div>
            </div>
            <div className='flex relative'>
                <img className='hidden lg:block absolute top-24 left-[-100px]  w-40 h-96' src="https://sante.qodeinteractive.com/wp-content/uploads/2020/10/h2-img-2.2.png" alt="" />
                <img className='w-full h-[550px]' src="https://sante.qodeinteractive.com/wp-content/uploads/2020/10/h2-img-2.1.jpg" alt="" />
            </div>
        </div>
    );
};

export default TopProduct;