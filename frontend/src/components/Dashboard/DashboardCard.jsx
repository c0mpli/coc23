import React from "react";

function DashboardCard(props) {
  return (
    <div
      style={{ backgroundColor: props.color }}
      className="ourtips-card dashboard-card"
    >
      <h4>{props.name}</h4>
      <p>{props.description}</p>
      <div className="interest-wrapper">
        {props.interest?.map((value, index) => {
          return (
            <div key={index} className="interest-select">
              <img src={value.icon} />
              <p>{value.title}</p>
            </div>
          );
        })}
      </div>
      <div className="info-wrapper">
        {props.info?.map((value, index) => {
          return (
            <div>
              <img src={value.icon} />
              <p>{value.title}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default DashboardCard;
