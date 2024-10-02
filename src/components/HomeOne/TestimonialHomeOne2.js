import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

function TestimonialHomeOne2({ className }) {
    const sliderRef = useRef();
    const sliderNext = () => {
        sliderRef.current.slickNext();
    };
    const sliderPrev = () => {
        sliderRef.current.slickPrev();
    };
    return (
        <section
            className={`appie-testimonial-kopaArea pt-100 pb-160 ${className || ''}`}
            id="testimonial"
        >
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-10">
                        <div className="appie-testimonial-slider" style={{ position: 'relative' }}>
                            
                            <Slider ref={sliderRef} dots arrows={false}>
                                <div className="appie-testimonial-item text-center">
                                    <div className="author-info">
                                        <h2 className="title">About us</h2>
                                       
                                    </div>
                                    <div className="text">
                                        <p>
                                        Kopacity is a dedicated platform designed to simplify the search for suitable accommodation for NYSC Corps members precamp and after camp. We understand the unique challenges Corps members face, so we offer a streamlined, stress-free solution that connects them with quality housing, whether they need a premium, fully furnished apartment or a basic, non-furnished option. 

                                        </p>
                                    </div>
                                </div>
                                
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default TestimonialHomeOne2;
