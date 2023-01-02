import React from "react";
import Header from "../Header/Header";
import style from "../contactuspage/contactuspage.module.css";
import { imgobj } from "../../imagefolder/Image";

export default function ContactusPage() {
  return (
    <div>
      <div className={`${style.background_gradient} container-fluid`}>
        {" "}
        {/* header */}
        <Header />
        {/* header */}
        <div className="">
          {/* img logo  */}
          <div className="row">
            <div className={`${style.about_text} col-md-12 text-center py-3`}>
              Contact Us
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
        </div>
      </div>
    </div>
  );
}
