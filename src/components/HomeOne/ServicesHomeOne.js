import React from 'react';

function ServicesHomeOne({ className }) {
    return (
        <section className={`appie-service-area pt-90 pb-100 ${className}`} id="service">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6">
                        <div className="appie-section-title text-center">
                            <h3 className="appie-title">
                            Get started with <br /> Kopacity
                            </h3>
                            <p>Follow these easy steps</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-3 col-md-6">
                        <div
                            className="appie-single-service text-center mt-30 wow animated fadeInUp"
                            data-wow-duration="2000ms"
                            data-wow-delay="200ms"
                        >
                            <div className="icon">
                                <img src='/assets/images/icon/download2.png' alt="" />
                                <span>1</span>
                            </div>
                            <h4 className="appie-title">Download the app</h4>
                            <p>Visit the Playstore or App Store to download the Kopacity app and get started.</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div
                            className="appie-single-service text-center mt-30 item-2 wow animated fadeInUp"
                            data-wow-duration="2000ms"
                            data-wow-delay="400ms"
                        >
                            <div className="icon">
                                <img src='/assets/images/icon/user.png' alt="" className="kopa-img"/>
                                <span>2</span>
                            </div>
                            <h4 className="appie-title">Sign up</h4>
                            <p> Create your profile in minutes and start browsing true all the futures.</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div
                            className="appie-single-service text-center mt-30 item-3 wow animated fadeInUp"
                            data-wow-duration="2000ms"
                            data-wow-delay="600ms"
                        >
                            <div className="icon">
                                <img src='/assets/images/icon/verified.png' alt="" />
                                <span>3</span>
                            </div>
                            <h4 className="appie-title">
                            Verify your details</h4>
                            <p>Click on the massage we sent to your email to verify all your details are correct. </p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div
                            className="appie-single-service text-center mt-30 item-4 wow animated fadeInUp"
                            data-wow-duration="2000ms"
                            data-wow-delay="800ms"
                        >
                            <div className="icon">
                                <img src='/assets/images/icon/find2.png' alt="" className='kopa-img'/>
                                <span>4</span>
                            </div>
                            <h4 className="appie-title">Find Your Home</h4>
                            <p>Search for homes, connect with house owners, and rent your next place!</p>
                        </div>
                    </div>
                </div>
                    <div className="row">
                        <div className="col-lg-11">
                            <div className="footer-copyright footer-copyright-kopa footer-servicesKopa align-items-center justify-content-between pt-35">
                                <div className="apps-download-btn">
                                    <ul>
                                        <li>
                                            <a href="#">
                                                <i className="fab fa-apple" /> Download for iOS
                                            </a>
                                        </li>
                                        <li>
                                            <a className="item-2" href="#">
                                                <i className="fab fa-google-play" /> Download for
                                                Android
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

            </div>
        </section>
    );
}

export default ServicesHomeOne;
