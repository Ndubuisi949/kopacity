import React from 'react';

function HeroAbout() {
    return (
        <>
            <div className="appie-about-top-title-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7">
                            <div className="appie-about-top-title">
                                <h2 className="title">About Kopacity</h2>
                                <p>
                                Kopacity is a dedicated platform designed to simplify the search for suitable accommodation for NYSC Corps members precamp and after camp. We understand the unique challenges Corps members face, so we offer a streamlined, stress-free solution that connects them with quality housing, whether they need a premium, fully furnished apartment or a basic, non-furnished option. 
                                </p>
                                
                            </div>
                        </div>
                        <div className="col-lg-5" >
                        <img src="/assets/images/house-with-garage-garage-left-side.jpg" className="about-kopa-bg" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
            <section className="appie-about-page-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="appie-about-page-content">
                                <h3 className="title">
                                Join Us on Our Journey
                                </h3>
                                <p>Our mission is to create a seamless rental process, where corps members can find affordable homes quickly and securely. We also provide flexible solutions like rent splitting, which allows corps members to share costs with fellow service members, making housing more accessible.</p>
                                <p>
                                    
                                In addition to connecting corps members with homes, CorpMembers offers a marketplace for buying and selling new and used household items, ensuring that our users can find everything they need in one place.</p>
                            </div>
                        </div>
                        <div className="col-lg-4" >
                        <img src="/assets/images/original-3402733273481c3a7c8051db6ad473d0.png" className="about-kopa-bg" alt=""/>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="footer-copyright footer-servicesKopa align-items-center justify-content-between pt-35">
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
                </div>
            </section>
        </>
    );
}

export default HeroAbout;
