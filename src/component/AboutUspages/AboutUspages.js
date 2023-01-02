import React from "react";
import Header from "../Header/Header";
import style from "../AboutUspages/aboutuspages.module.css";
import { imgobj } from "../../imagefolder/Image";
import Footer from "../Footer/Footer";

export default function AboutUspages() {
  return (
    <div>
      <div style={{ backgroundColor: "black" }}>
        <div className={`${style.background_gradient} container-fluid`}>
          {/* header */}
          <Header />
          {/* header */}
          <div className="">
            {/* img logo  */}
            <div className="row">
              <div className={`${style.about_text} col-md-12 text-center py-3`}>
                About us
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
            <div className={`${style.body_back_color} row`}>
              <div className="col-md-4  ">
                <img
                  src={imgobj.front2}
                  width="100%"
                  className={`${style.cont_img} p-2`}
                  alt=""
                />
              </div>
              <div className="col-md-8 ">
                <p className={`${style.cont_para} p-4`}>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet
                  tempora atque unde ea provident porro? Facere natus voluptatem
                  ea dolorem laboriosam! Similique deserunt fugiat modi facere
                  assumenda illo eos ad dolore, odit natus voluptatibus
                  exercitationem sint ullam ea possimus eligendi iusto est
                  pariatur. Praesentium, magnam excepturi iste aliquam ducimus
                  numquam esse tempore, aperiam voluptates quos hic rem optio
                  nulla cumque, accusantium ratione recusandae. Illum maxime
                  doloribus inventore id, fugiat, excepturi sapiente accusamus
                  veniam laboriosam deserunt accusantium in optio corporis amet
                  distinctio aperiam, aspernatur dicta commodi fuga cupiditate?
                  Eius atque aperiam suscipit odit mollitia dolorum adipisci
                  excepturi debitis minus cum. Deserunt.
                </p>
              </div>
            </div>
          </div>
          {/* footer */}
          <Footer />
          {/* footer */}
        </div>
      </div>
    </div>
  );
}
