import React from 'react';

function ServicesHomeTwo({ className }) {
    return (
        <>
            <section className={`appie-services-2-area pb-100 ${className}`} id="service">
                <div className="container">
                    <div className="row align-items-end">
                        <div className="col-lg-6 col-md-8">
                            <div className="appie-section-title">
                                <h3 className="appie-title"><br></br>Features You’ll Love</h3>
                                <p>
                                    {/* The full monty spiffing good time no biggie cack grub fantastic. */}
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-4">
                            <div className="appie-section-title text-right">
                                <a className="main-btn" href="#">
                                    View all Features <i className="fal fa-arrow-right" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div
                                className="appie-single-service-2 mt-30 wow animated fadeInUp"
                                data-wow-duration="2000ms"
                                data-wow-delay="200ms"
                            >
                                <div className="icon">
                                    <i className="fas fa-lock" />
                                </div>
                                <h4 className="title">Browse Verified Listings</h4>
                                <p>
                                Search through a wide range of fully vetted homes – from furnished to unfurnished options.
                                </p>
                                <a href="#">
                                    Read Mor <i className="fal fa-arrow-right" />
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div
                                className="appie-single-service-2 item-2 mt-30 wow animated fadeInUp"
                                data-wow-duration="2000ms"
                                data-wow-delay="400ms"
                            >
                                <div className="icon">
                                    <i className="fas fa-home" />
                                </div>
                                <h4 className="title">Marketplace for Items</h4>
                                <p>
                                Furnish your new home through our in-app marketplace, where you can buy and sell new or used household items.
                                </p>
                                <a href="#">
                                    Read Mor <i className="fal fa-arrow-right" />
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div
                                className="appie-single-service-2 item-3 mt-30 wow animated fadeInUp"
                                data-wow-duration="2000ms"
                                data-wow-delay="600ms"
                            >
                                <div className="icon">
                                    <i className="fas fa-link" />
                                </div>
                                <h4 className="title">Connect with Housemates</h4>
                                <p>
                                Looking to share a place and split the rent? Find fellow corps members through the app.
                                </p>
                                <a href="#">
                                    Read Mor <i className="fal fa-arrow-right" />
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div
                                className="appie-single-service-2 item-4 mt-30 wow animated fadeInUp"
                                data-wow-duration="2000ms"
                                data-wow-delay="200ms"
                            >
                                <div className="icon">
                                <i className="fas fa-bolt" />
                                </div>
                                <h4 className="title">Easy Payments</h4>
                                <p>
                                Choose from flexible payment options, allowing you to pay rent securely and on time.
                                </p>
                                <a href="#">
                                    Read Mor <i className="fal fa-arrow-right" />
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div
                                className="appie-single-service-2 item-5 mt-30 wow animated fadeInUp"
                                data-wow-duration="2000ms"
                                data-wow-delay="400ms"
                            >
                                <div className="icon">
                                <i className="fas fa-bolt" />
                                </div>
                                <h4 className="title">In-App Messaging</h4>
                                <p>
                                Contact house owners or potential housemates directly through our secure messaging platform.
                                </p>
                                <a href="#">
                                    Read Mor <i className="fal fa-arrow-right" />
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div
                                className="appie-single-service-2 item-6 mt-30 wow animated fadeInUp"
                                data-wow-duration="2000ms"
                                data-wow-delay="600ms"
                            >
                                <div className="icon">
                                <i className="fas fa-cog" />
                                </div>
                                <h4 className="title">User-Friendly Interface</h4>
                                <p>
                                Navigate the platform with ease, making your search for accommodation straightforward and efficient
                                </p>
                                <a href="#">
                                    Read More <i className="fal fa-arrow-right" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default ServicesHomeTwo;
