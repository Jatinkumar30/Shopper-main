import React from 'react';
import Slider from 'react-slick';
import './Hero.css';
import hand_icon from '../Assets/hand_icon.png';
import arrow_icon from "../Assets/arrow.png";
import hero_image from "../Assets/hero_image.png";
import pic2 from "../Assets/pic2.png";
import pic3 from "../Assets/pic3.png";

const Hero = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    };

    return (
        <div className="hero-container">
            <Slider {...settings}>
                <div className="hero-slide">
                    <div className="hero">
                        <div className="hero-left">
                            <h2>NEW ARRIVAL ONLY</h2>
                            <div>
                                <div className="hero-hand-icon">
                                    <p>New</p>
                                    <img src={hand_icon} alt="" />
                                </div>
                                <p>Collections</p>
                                <p>for Everyone</p>
                            </div>
                            <div className="hero-latest-btn">
                                <a href="#newCollection"><div className='transparent'>Latest Collection</div></a>
                                <img src={arrow_icon} alt="" />
                            </div>
                        </div>
                        <div className="hero-right">
                            <img className='heroImg' src={hero_image} alt="" />
                        </div>
                    </div>
                </div>
                <div className="hero-slide">
                    <div className="hero">
                        <div className="hero-left">
                            <h2>EXCITING</h2>
                            <div>
                                <div className="hero-hand-icon">
                                    <p>Kids</p>
                                    <img src={hand_icon} alt="" />
                                </div>
                                <p>Collections</p>
                                <p>for Kids</p>
                            </div>
                            <div className="hero-latest-btn">
                                <a href="#kidsCollection"><div className='transparent'>Shop Kids</div></a>
                                <img src={arrow_icon} alt="" />
                            </div>
                        </div>
                        <div className="hero-right">
                            <img className='heroImg' src={pic3} alt="" />
                        </div>
                    </div>
                </div>
                <div className="hero-slide">
                    <div className="hero">
                        <div className="hero-left">
                            <h2>ELEGANT</h2>
                            <div>
                                <div className="hero-hand-icon">
                                    <p>Women</p>
                                    <img src={hand_icon} alt="" />
                                </div>
                                <p>Collections</p>
                                <p>for Mens</p>
                            </div>
                            <div className="hero-latest-btn">
                                <a href="#womenCollection"><div className='transparent'>Shop Women</div></a>
                                <img src={arrow_icon} alt="" />
                            </div>
                        </div>
                        <div className="hero-right">
                            <img className='heroImg2' src={pic2} alt="" />
                        </div>
                    </div>
                </div>
            </Slider>
        </div>
    );
}

export default Hero;
