import '../css/style.css';
// import '../css/style.min.css';
// import '../css/owl.carousel.css';
// import '../css/owl.theme.default.css';
import '../css/owl.carousel.min.css';
// import '../css/owl.theme.default.min.css';

import React,{ Component }  from 'react'
import ReactDOM from 'react-dom/client';

export const Contact = function(){
        return(
            <div className="container-fluid pb-5 contact-info">
                <div className="row">
                    <div className="col-lg-4 p-0">
                        <div className="contact-info-item d-flex align-items-center justify-content-center bg-primary text-white py-4 py-lg-0 ">
                            <i className="fa fa-3x fa-map-marker-alt text-secondary mr-4"></i>
                            <div className="">
                                <h5 className="mb-2">Our Office</h5>
                                <p className="m-0">123 Street, New York, USA</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 p-0">
                        <div className="contact-info-item d-flex align-items-center justify-content-center bg-secondary text-white py-4 py-lg-0">
                            <i className="fa fa-3x fa-envelope-open text-primary mr-4"></i>
                            <div className="">
                                <h5 className="mb-2">Email Us</h5>
                                <p className="m-0">info@example.com</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 p-0">
                        <div className="contact-info-item d-flex align-items-center justify-content-center bg-primary text-white py-4 py-lg-0">
                            <i className="fa fa-3x fa-phone-alt text-secondary mr-4"></i>
                            <div className="">
                                <h5 className="mb-2">Call Us</h5>
                                <p className="m-0">+012 345 6789</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
