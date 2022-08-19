import React from 'react';

const SingupForNews = () => {
    return (
        <div className='my-20'>
            <div className='flex justify-center mb-3'>
                <img src="https://sante.qodeinteractive.com/wp-content/uploads/2020/09/section-title-icon-1.png" alt="" />
            </div>
            <h1 className='text-center text-3xl lg:text-5xl font-bold uppercase'>Sign up for news</h1>
            <div className='flex justify-center my-8'>
                <input type="text" placeholder="Your e-mail..." class="input input-bordered input-warning w-full max-w-xs" />
            </div>
            <div className='flex justify-center'>
                <button className='btn btn-primary bg-green-500 w-40 border-0 text-white'>Subscribe</button>
            </div>
        </div>
    );
};

export default SingupForNews;