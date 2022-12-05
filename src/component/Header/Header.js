import React from "react";
import { imgobj } from "../../imagefolder/Image";
import style from "../Header/header.module.css";

export default function Header() {
  return (
    <div>
      {/* <div className="containersss"> */}
      {/* bs header */}
      <nav className={`${style.navbar_com} navbar navbar-expand-lg  `}>
        <div class="container-fluid">
          <div>
            <img src={imgobj.dplogo} width="80px" height="80px" alt="" />
          </div>
          <a className={`${style.for_text} navbar-brand`} href="#qw">
            DancePlanet
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <a
                className={`${style.for_text} nav-link `}
                aria-current="page"
                href="sa#"
              >
                About
              </a>
              <a className={`${style.for_text} nav-link `} href="ss#">
                Service
              </a>
              <a className={`${style.for_text} nav-link `} href="#ss">
                Pricing
              </a>
              <a className={`${style.for_text} nav-link `} href="ad">
                Event
              </a>
            </div>
          </div>
        </div>
      </nav>
      {/* bs header */}
      {/* </div> */}
    </div>
  );
}
