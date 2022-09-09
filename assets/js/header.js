
// any CSS you import will output into a single css file (app.css in this case)
import '../css/style.css';
import '../css/owl.carousel.min.css';
import logo from '../img/bgs-couleur.png';
// start the Stimulus application
import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
import {Link} from "react-router-dom";
import {Outlet} from "react-router";
// import { BrowserRouter } from 'react-router-dom';
// import Home from "./components/Home";

export class Header extends Component {
    render() {
        return (<>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-3 bg-white d-none d-lg-block">
                        <a href="" className="navbar-brand w-100 h-100 m-0 p-0 d-flex align-items-center justify-content-center">
                            <img className="bgs-logo" src={logo} alt=""/>
                        </a>
                    </div>
                    <div className="col-lg-9 text-center">
                        <nav className="navbar navbar-expand-lg bg-white navbar-light p-0">
                            <a href="" className="navbar-brand d-block d-lg-none">
                                <img className="bgs-logo" src={logo} alt=""/>
                            </a>
                            
                            <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                                <div className="navbar-nav mr-auto py-0">
                                    <Link to="/" className="nav-item nav-link ">Accueil</Link>
                                    <Link to="/nos-services" className="nav-item nav-link">Notre service</Link>
                                    {/*<div className="nav-item dropdown">*/}
                                    {/*    <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown">Pages</a>*/}
                                    {/*    <div className="dropdown-menu rounded-0 m-0">*/}
                                    {/*        <Link path="/blog/latest" className="dropdown-item">Latest Blog</Link>*/}
                                    {/*        <Link path="/blog/detail" className="dropdown-item">Blog Detail</Link>*/}
                                    {/*    </div>*/}
                                    {/*</div>*/}
                                    <Link to="/contact" className="nav-item nav-link">Contact</Link>
                                </div>
                                <a href="" className="btn btn-primary mr-3 d-none d-lg-block">Connexion</a>
                            </div>
                            
                            <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                        </nav>
                    </div>
                </div>
            </div>
        <Outlet/>
    </>
        )
    }
}
