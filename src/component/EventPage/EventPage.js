import React from "react";
import { imgobj } from "../../imagefolder/Image";
import Cardcompo from "../cardcompo/Cardcompo";
import style from "../EventPage/eventpage.module.css";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

export default function EventPage() {
  return (
    <div>
      <div className={`${style.background_gradient} container-fluid`}>
        {/* header */}
        <Header />
        {/* header */}
        {/* img logo  */}
        <div className="row">
          <div className={`${style.about_text} col-md-12 text-center py-3`}>
            Events
          </div>
          <div
            className={`${style.about_img} col-md-12 d-flex justify-content-center  `}
          >
            <img
              className={`${style.about_main_img}`}
              src={imgobj.dplogo}
              alt=""
            />
          </div>
        </div>
        {/* img logo  */}
        <div className={`${style.body_back_color} `}>
          {/* card */}
          <div className="mb-5">
            <Cardcompo />
          </div>
          <div className="mt-3">
            <Cardcompo />
          </div>
          {/* card */}
        </div>
        {/* footer */}
        <Footer />
        {/* footer */}
      </div>
    </div>
  );
}
