import React, { useState } from "react";
import { imgobj } from "../../imagefolder/Image";
import style from "../cardcompo/cardcompo.module.css";

export default function Cardcompo() {
  const [cardsArr, setCardsArr] = useState([
    {
      name: "Stage show",
      des: "Lorem ipsum, dolor sit amet consectetur adipisicing elit Amet vtempora atque unde ea provident porro? Facere natus voluptatem",
      img: imgobj.dummy1,
    },
    {
      name: "Vande Matram Event",
      des: "Lorem ipsum, dolor sit amet consectetur adipisicing elit Amet vtempora atque unde ea provident porro? Facere natus voluptatem",
      img: imgobj.dummy1,
    },
    {
      name: "Work Shop",
      des: "Lorem ipsum, dolor sit amet consectetur adipisicing elit Amet vtempora atque unde ea provident porro? Facere natus voluptatem",
      img: imgobj.dummy1,
    },
  ]);
  return (
    <div>
      {/* card sec */}
      <div >
        {cardsArr.map((el) => {
          return (
            <>
              <div  className={`${style.cons_singleTeam} ${style.all_color_team} ${style.witr_team_s13} ${style.witr_team_s12}   mx-auto`}>
                <div className={`${style.bg_card_img} card text-start`}>
                  <img class=" p-3" src={el.img} alt="Title" />
                  <div className={`${style.card_bdy} card-body `}>
                    <h4 class="card-title">{el.name}</h4>
                    <p class="card-text">{el.des}</p>
                  </div>
                </div>
                <div  className={`${style.team_line} ${style.team_line_top} `}></div>
                    <div className={`${style.team_line} ${style.team_line_left} `}></div>
                    <div className={`${style.team_line} ${style.team_line_right} `}></div>
                    <div className={`${style.team_line} ${style.team_line_bottom} `}></div>
              </div>
            </>
          );
        })}
      </div>
      {/* card sec */}
    </div>
  );
}
