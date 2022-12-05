import React from "react";
import { imgobj } from "../../imagefolder/Image";
import style from "../Carousal sec/carousalcompo.module.css";

export default function Carousalcompo() {
  return (
    <div>
      {/* this is our slider */}
      <div
        id="carouselExampleIndicators"
        class="carousel slide"
        data-bs-ride="true"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            {/* <div className={`${style.over_view}`}> */}
            <img src={imgobj.dummy1} class="d-block w-100" alt="..." />
            {/* </div> */}
          </div>
          <div class="carousel-item">
            <img src={imgobj.dummy2} class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src={imgobj.dummy3} class="d-block w-100" alt="..." />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      {/* this is our slider */}
    </div>
  );
}
