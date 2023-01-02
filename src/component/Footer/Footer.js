import React from "react";
import { imgobj } from "../../imagefolder/Image";
import style from "../Footer/footer.module.css";
import { FaBeer } from "react-icons/fa";
import {
  BsFacebook,
  BsFillAlarmFill,
  BsInstagram,
  BsTelephoneFill,
  BsTwitter,
  BsYoutube,
} from "react-icons/bs";

export default function Footer() {
  return (
    <>
        <footer className={`${style.footer_set}`}>
      <div className="container-fluid">
          <div className="row">
            <div className="col-md-2">
              <div className=" d-flex justify-content-center align-items-center ">
                <ul className={`${style.footer_all_list_link}`}>
                  <li>Home</li>
                  <li>About</li>
                  <li>Service</li>
                  <li>Pricing</li>
                </ul>
              </div>
            </div>
            <div className="col-md-4 ">
              <div className="d-flex justify-content-center align-items-center pt-2">
                <ul className={`${style.footer_all_list_link}`}>
                  <li>Address</li>
                  <p className={`${style.text_color_footer} p-3`}>
                    P-85 welcome Seelampur delhi -110053
                  </p>
                </ul>
                <ul className={`${style.footer_all_list_link}`}>
                  <li>Phone</li>
                  <p className={`${style.text_color_footer} p-2`}>
                    <BsTelephoneFill
                      style={{ color: "white" }}
                      className="mx-2"
                    />{" "}
                    9717xxxx79
                  </p>
                </ul>
              </div>
            </div>
            <div className="col-md-2 ">
              <div className=" d-flex justify-content-center align-items-center pt-2">
                <ul className={`${style.footer_all_list_link} `}>
                  <li>Link</li>
                  <li>
                    <BsFacebook />
                  </li>
                  <li>
                    <BsInstagram />
                  </li>

                  <li>
                    <BsYoutube />
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-4 ">
            <div className=" d-flex justify-content-center align-items-center pt-4">
              <img className="" src={imgobj.dplogo} width="50%" alt="" />
            </div>
            </div>
          </div>
          </div>
        </footer>
        <div className={`${style.copyryt_sec} text-center`}>
          Copyright 2022 by DancePlanet. All Rights Reserved.
        </div>
      {/* </div> */}
    </>
  );
}
