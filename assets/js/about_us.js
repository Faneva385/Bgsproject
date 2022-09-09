import '../css/style.css';
// import '../css/style.min.css';
import '../css/owl.carousel.css';
import '../css/owl.theme.default.css';
import '../css/owl.carousel.min.css';
import about from '../img/about.jpg'
// import '../css/owl.theme.default.min.css';

import React,{ Component }  from 'react'
import ReactDOM from 'react-dom/client';


export class About_us extends Component{
    render(){
        return(<div>
            <div className="container-fluid py-5 mb-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5">
                                <img style={{
                                    display:'block',
                                    borderRadius:'3%',
                                    marginLeft: 'auto',
                                    marginRight: 'auto',
                                    width:'100%'
                                }} src={about} alt=""/>

                        </div>
                        <div className="col-lg-7 pt-5 pb-lg-5">
                            <h6 className="text-secondary font-weight-semi-bold text-uppercase mb-3">Learn About Us</h6>
                            <h1 className="mb-4 section-title">Nos visions</h1>
                            <h5 className="text-muted font-weight-normal mb-3">Eos kasd eos dolor vero vero, lorem stet
                                diam rebum. Ipsum amet sed vero dolor sea lorem justo est dolor eos</h5>
                            <p>Invidunt lorem justo sanctus clita. Erat lorem labore ea, justo dolor lorem ipsum ut sed
                                eos, ipsum et dolor kasd sit ea justo. Erat justo sed sed diam. Ea et erat ut sed diam
                                sea ipsum est dolor</p>

                            <div className="d-flex align-items-center pt-4">
                                <a href="" className="btn btn-primary mr-5">En savoir plus</a>
                            </div>
                        </div>
                    </div>

                </div>
                </div>

            <div className="container-fluid bg-service py-5 mb-5">
                <div className="container py-5">
                    <div className="row ">
                        <div className="col-lg-5">
                            <h6 className="text-secondary font-weight-semi-bold text-uppercase mb-3">Learn about us</h6>
                            <h1 className="mb-4 section-title ">Nos visions</h1>
                            <p >Invidunt lorem justo clita. Erat lorem labore ea, justo dolor
                                lorem ipsum ut sed eos, ipsum et dolor kasd sit ea justo. Erat justo sed sed diam. Ea et
                                erat ut sed diam sea ipsum</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi eius, ex in ipsam, iste molestias natus odio omnis perspiciatis quibusdam quidem quisquam quod ullam vel voluptatum! Consequuntur modi nemo ullam.</p>
                            <a href="" className="btn btn-primary mt-3 py-2 px-4">More Services</a>
                        </div>
                        <div className="col-lg-5 pt-5 pt-lg-0">
                            <img style={{
                                display:'block',
                                borderRadius:'3%',
                                marginLeft: 'auto',
                                marginRight: 'auto',
                                width:'100%'
                            }} src={about} alt=""/>
                        </div>
                    </div>
                </div>
            </div>

                <div className="container-fluid py-5 mb-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-5">
                                <img style={{
                                    display:'block',
                                    borderRadius:'3%',
                                    marginLeft: 'auto',
                                    marginRight: 'auto',
                                    width:'100%'
                                }} src={about} alt=""/>
                            </div>
                            <div className="col-lg-7 pt-5 pb-lg-5">
                                <h6 className="text-secondary font-weight-semi-bold text-uppercase mb-3">Learn About Us</h6>
                                <h1 className="mb-4 section-titleProvide Th">Nos missions</h1>
                                <h5 className="text-muted font-weight-normal mb-3">Eos kasd eos dolor vero vero, lorem stet
                                    diam rebum. Ipsum amet sed vero dolor sea lorem justo est dolor eos</h5>
                                <p>Invidunt lorem justo sanctus clita. Erat lorem labore ea, justo dolor lorem ipsum ut sed
                                    eos, ipsum et dolor kasd sit ea justo. Erat justo sed sed diam. Ea et erat ut sed diam
                                    sea ipsum est dolor</p>
                                <div className="d-flex align-items-center pt-4">
                                    <a href="" className="btn btn-primary mr-5">En savoir plus</a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            <div className="container-fluid  py-5">
                <div className="container ">
                    <h6 className="text-secondary font-weight-semi-bold text-uppercase mb-3">Learn About Us</h6>
                    <h1 className="mb-4 section-title">Nos valeurs</h1>
                    <div className="row row-cols-2 flex-md-row-reverse" >
                        <div className="col text-center  pt-5 pb-5 " style={{backgroundColor:"#FA942A"}}>
                            <h3 className="text-white">Audace</h3>
                            <p><span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda distinctio eius ipsum nobis placeat quae quos ratione repellendus? Accusamus aperiam aspernatur illo maiores maxime perferendis porro quae recusandae velit voluptate.</span></p>
                        </div>
                        <div className="col text-center  pt-5 pb-5 " style={{backgroundColor:"#0DC1FF"}}>
                            <h3 className="text-white">Professionalisme</h3>
                            <p><span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda distinctio eius ipsum nobis placeat quae quos ratione repellendus? Accusamus aperiam aspernatur illo maiores maxime perferendis porro quae recusandae velit voluptate.</span></p>
                        </div>

                        <div className="col text-center  pt-5 pb-5 " style={{backgroundColor:"#0DC1FF"}}>
                            <h3 className="text-white">Engagement</h3>
                            <p><span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda distinctio eius ipsum nobis placeat quae quos ratione repellendus? Accusamus aperiam aspernatur illo maiores maxime perferendis porro quae recusandae velit voluptate.</span></p>
                        </div>
                        <div className="col text-center  pt-5 pb-5 " style={{backgroundColor:"#FA942A"}}>
                            <h3 className="text-white">Innovation</h3>
                            <p><span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda distinctio eius ipsum nobis placeat quae quos ratione repellendus? Accusamus aperiam aspernatur illo maiores maxime perferendis porro quae recusandae velit voluptate.</span></p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        )
    }
}