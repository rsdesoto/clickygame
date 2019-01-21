import React from "react";
import "./css/ImgCard.css";

function ImgCard(props) {
  return (
    <div className="imgcard" onClick={() => props.clickBox(props.id)}>
      <img alt={props.name} src={props.image} />
    </div>
  );
}

export default ImgCard;
