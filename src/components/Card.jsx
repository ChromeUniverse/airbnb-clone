import React from "react";

import katie from "../assets/katie-zaferes.png";
import star from "../assets/star-icon.png";

function Card({ item }) {
  
  let badgeText;
  if (item.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (item.location === "Online") {
    badgeText = "ONLINE";
  }

  return (
    <div className="card">
      {badgeText && <div className="card-badge">{badgeText}</div>}

      <img src={item.coverImg} alt="" />
      <div className="card-info">
        <div className="card-info-reviews">
          <img src={star} alt="" />
          <p>{item.stats.rating}</p>
          <span>
            ({item.stats.reviewCount}) • {item.location}
          </span>
        </div>
        <p>{item.title}</p>
        <p>
          <strong>From ${item.price}</strong> / person
        </p>
      </div>
    </div>
  );
}

export default Card;
