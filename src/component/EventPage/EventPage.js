import React from "react";
import { imgobj } from "../../imagefolder/Image";
import Cardcompo from "../cardcompo/Cardcompo";
import style from "../EventPage/eventpage.module.css";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

export default function EventPage() {
  return (
    <>
    <div className=" container-fluid px-0">
      <div className={`${style.background_gradient}`}>
        {/* header */}
        <Header />
        {/* header */}
        {/* img logo  */}
        <div className="">
          <div className={`${style.about_text} text-center py-3`}>
            Events
          </div>
          <div
            className={`${style.about_img}  d-flex justify-content-center  `}
          >
            <img
              className={`${style.about_main_img}`}
              src={imgobj.dplogo}
              alt=""
            />
          </div>
        </div>
        </div>
        {/* img logo  */}
      
        <div className={`${style.body_back_color} pb-5`}>
        <div className="container">
          {/* card */}
          <div className="row">
            <div className="col-md-4">
            <Cardcompo />
  
            </div>
            <div className="col-md-4">
            <Cardcompo />
  
            </div>
            <div className="col-md-4">
            <Cardcompo />
  
            </div>
          
          </div>
         
          {/* card */}
        </div>
        </div>
        
        {/* footer */}
        {/* <div className="row"> */}
        <Footer />
        {/* footer */}
      {/* </div> */}
     
    </div>
    </>
  );
}
