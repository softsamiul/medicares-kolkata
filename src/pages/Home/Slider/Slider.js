import React from 'react';
import { Carousel } from 'react-bootstrap';
import { default as slideImg1, default as slideImg2, default as slideImg3 } from '../../../assets/images/1.jpg';
import './Slider.css';

const Slider = () => {
    return (
        <div  className="slider-wrapper" style={{height:"100px"}}>
            <Carousel>
                <Carousel.Item>
                    <div className="slider-img">
                    <img
                    className="d-block w-100 h-100 "
                    src={slideImg1}
                    alt="First slide"
                    />
                    </div>
                    <div className="">
                    <Carousel.Caption className=" py-18">
                    <div className="test"></div>
                    <div className="caption-wrap">
                        <h3 className="text-3xl font-extrabold">First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </div>
                    </Carousel.Caption>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="slider-img">
                        <img
                        className="d-block w-100 h-100"
                        src={slideImg2}
                        alt="Second slide"
                        />
                    </div>

                    <Carousel.Caption className="bg-blue-900 py-18">
                    <div className="test"></div>
                    <div className="caption-wrap">
                        <h3 className="text-3xl font-extrabold">Second slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="slider-img">
                        <img
                        className="d-block w-100 h-100"
                        src={slideImg3}
                        alt="Third slide"
                        />
                    </div>

                    <Carousel.Caption className="bg-blue-900 py-18">
                    <div className="test"></div>
                    <div className="caption-wrap">
                        <h3 className="text-3xl font-extrabold">Third slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </div>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Slider;