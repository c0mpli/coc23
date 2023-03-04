import React from "react";
import eyeIcon from "../../assets/eye.png";
import timeIcon from "../../assets/time.png";
import "./OurtipsCard.css";
function OurtipsCard(props) {
  return (
    <div className="ourtips-card" style={{ backgroundColor: props.color }}>
      <img src={props.image} />
      <h2>{props.title}</h2>
      <p>{props.description}</p>
      <div className="outtips-card-bottomBar">
        <img src={eyeIcon} />
        <p>{props.time} read</p>
        <img src={timeIcon} />
        <p>{props.views} views</p>
      </div>
    </div>
  );
}

export default OurtipsCard;
