import React from 'react'
import {BrowserRouter, Routes, Route,Outlet, Link} from "react-router-dom";
import {Header} from "./header";
import {Carousel} from "./carousel";
import {ContactForm} from "./contact-form";
import {Contact} from "./contact";
import {About_us} from "./about_us";
import {NosServices} from "./nos-services";

const Home=function () {
    return(<>
        <Carousel/>
        <Contact/>
        <About_us/>
        </>)
}

export class NavBarWithContent extends React.Component {
    render() {
      return (
          <BrowserRouter>
              <Routes>
                  <Route path="/" element={<Header/>}>
                <Route index element={<Home/>}/>
                <Route path="nos-services" element={<NosServices/>}/>
                <Route path="contact" element={<ContactForm/>}/>
                  </Route>
              </Routes>
          </BrowserRouter>
      //    On englobe toutes les routes possibles
      );
    }
  }