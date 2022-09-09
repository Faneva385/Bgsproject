
import React from 'react'
import {Contact} from "./contact";

export function NosServices() {
    return(<>
    <div className="container-fluid py-5">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-6">
                    <h6 className="text-secondary font-weight-semi-bold text-uppercase mb-3">Our Services</h6>
                    <h1 className="mb-4 section-title">Awesome Cleaning Services For You</h1>
                    <p>Invidunt lorem justo clita. Erat lorem labore ea, justo dolor lorem ipsum ut sed eos, ipsum et dolor kasd sit ea justo. Erat justo sed sed diam. Ea et erat ut sed diam sea ipsum</p>
                    <a href="" className="btn btn-primary mt-3 py-2 px-4">More Services</a>
                </div>
                <div className="col-lg-6 pt-5 pt-lg-0">
                    <div className="owl-carousel service-carousel position-relative">
                        <div className="d-flex flex-column align-items-center text-center bg-light rounded overflow-hidden pt-4">
                            <div className="icon-box bg-light text-secondary shadow mt-2 mb-4">
                                <i className="fa fa-2x fa-hotel"></i>
                            </div>
                            <h5 className="font-weight-bold mb-4 px-4">Home Cleaning</h5>
                            <img src="img/blog-1.jpg" alt=""/>
                        </div>
                        <div className="d-flex flex-column align-items-center text-center bg-light rounded overflow-hidden pt-4">
                            <div className="icon-box bg-light text-secondary shadow mt-2 mb-4">
                                <i className="fa fa-2x fa-city"></i>
                            </div>
                            <h5 className="font-weight-bold mb-4 px-4">Window Cleaning</h5>
                            <img src="img/blog-3.jpg" alt=""/>
                        </div>
                        <div className="d-flex flex-column align-items-center text-center bg-light rounded overflow-hidden pt-4">
                            <div className="icon-box bg-light text-secondary shadow mt-2 mb-4">
                                <i className="fa fa-2x fa-spa"></i>
                            </div>
                            <h5 className="font-weight-bold mb-4 px-4">Carpet Cleaning</h5>
                            <img src="img/blog-2.jpg" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
<Contact/>
    </>
    )
}