import React from "react";
import { imgobj } from "../../imagefolder/Image";
import style from "../Header/header.module.css";

export default function Header() {
  return (
    <div>
      <div className="container-fluid">
        {/* navbar */}
        <nav className={`${style.navbar_com} navbar navbar-expand-lg`}>
          <div class="container-fluid">
            <a class="navbar-brand" href="#0">
              <img src={imgobj.dplogo} alt="Logo" width="50" height="50" />
            </a>
            <a class="navbar-brand text-light" href="#1">
              Dance Planet
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <a
                    class="nav-link active text-light"
                    aria-current="page"
                    href="#2"
                  >
                    Home
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-light" href="#3">
                    AboutUs
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-light" href="#4">
                    Pricing
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-light" href="#4">
                    Contact us
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        {/* navbar */}
      </div>
    </div>
  );
}
