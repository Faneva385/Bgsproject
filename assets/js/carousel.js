import '../css/style.css';
// import '../css/style.min.css';
// import '../css/owl.carousel.css';
 import '../css/owl.theme.default.css';
import '../css/owl.carousel.min.css';
// import '../css/owl.theme.default.min.css';

import ca1 from '../img/bgs.jpg'
import ca2 from '../img/carousel-2.jpg'
import ca3 from '../img/carousel-3.jpg'
import React,{ Component }  from 'react'
import ReactDOM from 'react-dom/client';

export class Carousel extends Component{
    render(){
        return(
            <div className="container-fluid p-0">
                <div id="header-carousel" className="carousel slide carousel-fade" data-ride="carousel">

                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img className="img-fluid" src={ca1} alt="Image"/>
                                <div className="carousel-caption d-flex align-items-center ">
                                    <div className="p-5" style={{width: "100%", maxWidth: "900px",backgroundColor:"rgba(250,148,42,0.5)"}}>
                                        <h5 className="text-primary text-uppercase mb-md-3">Cleaning Services</h5>
                                        <h1 className="display-3 text-white mb-md-4">Best Quality Solution In Cleaning</h1>
                                    </div>
                                </div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}