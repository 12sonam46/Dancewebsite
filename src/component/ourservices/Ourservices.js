import React from "react";
import style from "../ourservices/ourservices.module.css";
import { imgobj } from "../../imagefolder/Image";
import Cardcompo from "../cardcompo/Cardcompo";

export default function Ourservices() {
  return (
    <div>
      {/* this is services page */}
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <h2 className={`${style.ser_heading} text-center my-4`}>
              Our Services{" "}
            </h2>
          </div>
        </div>
        {/* paralex */}
        <div
          className={`${style.paralexx} d-flex justify-content-center align-items-center`}
        >
          {/* service */}
          <div className={`${style.ser_btn}`}>Service</div>
          {/* service */}
        </div>
        {/* paralex */}
        <div
          className={`${style.paralexx_snd} d-flex justify-content-center align-items-center`}
        >
          {/* about */}
          <div className={`${style.about_btn}`}>About Us</div>

          {/* about */}
        </div>
        {/* paralex */}
        <div
          className={`${style.paralexx_snd_3} d-flex justify-content-center align-items-center`}
        >
          {/* event */}
          <div className={`${style.event_btn}`}>Event</div>

          {/* event */}
        </div>
      </div>
      {/* this is services page */}
    </div>
  );
}
