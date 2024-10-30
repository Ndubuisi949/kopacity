import React from 'react';

function TrafficHomeOne({ className }) {
    return (
        <section className={`appie-traffic-area pt-140 pb-180 ${className || ''}`}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-7">
                        <div className="appie-traffic-title">
                            <span></span>
                            <h3 className="title">Experience the Easiest Way to Find Your NYSC Home</h3>
                            <p>
                            With secure listings and easy rent-sharing, here’s why you should download the app today.
                            </p>
                        </div>
                        <div className="row">
                            <div className="col-lg-6 col-md-6">
                                <div className="appie-traffic-service mb-30">
                                    <div className="icon">
                                        <i className="fal fa-check" />
                                    </div>
                                    <h5 className="title">Find Apartment Faster</h5>
                                    <p>Browse thousands of verified listings across Nigeria, tailored for NYSC corps members.</p>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <div className="appie-traffic-service item-2 mb-30">
                                    <div className="icon">
                                        <i className="fal fa-check" />
                                    </div>
                                    <h5 className="title">Split Rent Easily</h5>
                                    <p> Connect with other corps members to share a space and reduce costs, all within the app.</p>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <div className="appie-traffic-service item-3">
                                    <div className="icon">
                                        <i className="fal fa-check" />
                                    </div>
                                    <h5 className="title">Marketplace for Essentials</h5>
                                    <p>Buy and sell new or used household items, making it easy to furnish your new home.</p>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <div className="appie-traffic-service item-4">
                                    <div className="icon">
                                        <i className="fal fa-check" />
                                    </div>
                                    <h5 className="title">User Interactive</h5>
                                    <p>Mucker plastered bugger all mate morish are.</p>
                                </div>
                            </div>
                            {/* <div className="col-lg-12">
                                <div className="traffic-btn mt-50">
                                    <a className="main-btn" href="#">
                                        Learn More <i className="fal fa-arrow-right" />
                                    </a>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
            <div className="traffic-thumb ">
                <img
                    className="wow animated fadeInRight kopaNyscPic"
                    data-wow-duration="2000ms"
                    data-wow-delay="200ms"
                    src='/assets/images/hero-thumb-2.png'
                    alt=""
                />
            </div>
        </section>
    );
}

export default TrafficHomeOne;
