import React, { useState } from "react";
import { imgobj } from "../../imagefolder/Image";
import style from "../cardcompo/cardcompo.module.css";

export default function Cardcompo() {
  const [cardsArr, setCardsArr] = useState([
    {
      name: "satyam",
      des: "dancer",
      img: imgobj.dummy1,
      //   bgimg:
    },
    {
      name: "satyam",
      des: "dancer",
      img: imgobj.dummy1,
    },
    {
      name: "satyam",
      des: "dancer",
      img: imgobj.dummy1,
    },
  ]);
  return (
    <div>
      {/* card sec */}
      <div className="row">
        {cardsArr.map((el) => {
          return (
            <>
              <div className="col-md-3 mx-auto">
                <div className={`${style.bg_card_img} card text-start`}>
                  {/* <img class="card-img-top" src={el.img} alt="Title" /> */}
                  <div className={`${style.card_bdy} card-body`}>
                    <h4 class="card-title">{el.name}</h4>
                    <p class="card-text">{el.des}</p>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
      {/* card sec */}
    </div>
  );
}
