import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const CardSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 3000,
        autoplaySpeed: 3000,
        cssEase: "linear"
    };
    return (
        <div className='px-12'>
            <div>

                <Slider {...settings}>
                    <div>
                        <img src="https://sante.qodeinteractive.com/wp-content/uploads/sb-instagram-feed-images/122256224_388097935898759_6286333495606662557_nfull.jpg" alt="" />
                    </div>
                    <div>
                        <img src="https://sante.qodeinteractive.com/wp-content/uploads/sb-instagram-feed-images/122532905_212695603620644_6725145753884071558_nfull.jpg" alt="" />
                    </div>
                    <div>
                        <img src="https://sante.qodeinteractive.com/wp-content/uploads/sb-instagram-feed-images/122533319_1074715989624624_1633980363282783001_nfull.jpg" alt="" />
                    </div>
                    <div>
                        <img src="https://sante.qodeinteractive.com/wp-content/uploads/sb-instagram-feed-images/122491741_1107800769617785_8404734715511592181_nfull.jpg" alt="" />
                    </div>
                    <div>
                        <img src="https://sante.qodeinteractive.com/wp-content/uploads/sb-instagram-feed-images/122490364_1490896024454956_492291287937004405_nfull.jpg" alt="" />
                    </div>
                    {/* <div>
                        <img src="" alt="" />
                    </div>
                    <div>
                        <img src="" alt="" />
                    </div>
                    <div>
                        <img src="" alt="" />
                    </div> */}
                </Slider>
            </div>
        </div>
    );
};

export default CardSlider;