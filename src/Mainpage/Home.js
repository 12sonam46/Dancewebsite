import React from "react";
import Carousalcompo from "../component/Carousal sec/Carousalcompo";
import Header from "../component/Header/Header";
import Ourservices from "../component/ourservices/Ourservices";
import style from "../Mainpage/home.module.css";

export default function Home() {
  return (
    <div>
      <Header />
      <Carousalcompo />
      <Ourservices />
    </div>
  );
}
