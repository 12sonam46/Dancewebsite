import React from "react";
import style from "../ourservices/ourservices.module.css";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";

export default function Ourservices() {
  return (
    <div>
      {/* this is services page */}

      <div className="container-fluid">
        <div className={`${style.ser_heading}  `}>
          <div>
            <div className="row">
              <div className="col-md-4 ">
                <div className={`${style.Dance_text}`}>Dance</div>
              </div>
              <div className="col-md-4 "></div>
              <div className="col-md-4 ">
                <div className={`${style.planet_text}`}>planet</div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <marquee behavior="" direction="right">
                  since 2010 start the company
                </marquee>
              </div>
            </div>
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
          <Link className={`${style.link_page}`} to="/AboutUspages">
            {" "}
            <div className={`${style.about_btn}`}>About Us</div>
          </Link>

          {/* about */}
        </div>
        {/* paralex */}
        <div
          className={`${style.paralexx_snd_3} d-flex justify-content-center align-items-center`}
        >
          {/* event */}
          <Link className={`${style.link_page}`} to="/EventPage">
            <div className={`${style.event_btn}`}>Event</div>
          </Link>

          {/* event */}
        </div>
      </div>
      {/* this is services page */}
      {/* footer */}

      <Footer />
      {/* footer */}
    </div>
  );
}
