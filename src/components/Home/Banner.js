import React from 'react';

const Banner = () => {

    return (
        <div>
            <div class="carousel w-full banner">
                <div id="slide1" class="carousel-item relative w-full">
                    <img src="https://img.freepik.com/free-photo/top-view-plant-with-special-properties-assortment_23-2148799516.jpg?w=900&t=st=1660826232~exp=1660826832~hmac=a8d5f1e99a6c2e61954dbd86243807fe17a07713c5146a342e0db9ff32fbce2c" alt='' class="w-full lg:h-[600px]" />
                    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" class="btn btn-circle">❮</a>
                        <a href="#slide2" class="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" class="carousel-item relative w-full ">
                    <img src="https://img.freepik.com/free-vector/cosmetic-products-water-splash-with-herb_107791-2674.jpg?w=900&t=st=1660826262~exp=1660826862~hmac=24e1eab306e7e76d481542b2d629a91be344fe837087fb6ff1ab5c59d2836ddf" alt='' class="w-full lg:h-[600px]" />
                    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" class="btn btn-circle">❮</a>
                        <a href="#slide3" class="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" class="carousel-item relative w-full">
                    <img src="https://img.freepik.com/premium-vector/kratom-alternative-medicine-kratom-capsule-tablet-medicine-bottle-with-biology-molecule-structure_251139-112.jpg?w=740" alt='' class="w-full lg:h-[600px]" />
                    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" class="btn btn-circle">❮</a>
                        <a href="#slide4" class="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" class="carousel-item relative w-full">
                    <img src="https://img.freepik.com/free-photo/skin-care-product-composition_23-2148761389.jpg?w=900&t=st=1660826336~exp=1660826936~hmac=1821c828953f22db893ef992101d1093d127d80040e88701bcb629ec2f15fe18" alt='' class="w-full lg:h-[600px]" />
                    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" class="btn btn-circle">❮</a>
                        <a href="#slide1" class="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Banner;