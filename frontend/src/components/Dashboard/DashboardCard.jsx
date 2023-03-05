import React from "react";
import { useNavigate } from "react-router-dom";

function DashboardCard(props) {
  const navigate = useNavigate();
  props.friends != "true" ||
    (props.friends === "true" && props.interest.contains("F.R.I.E.N.D.S"));
  {
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
                <p>{value}</p>
              </div>
            );
          })}
        </div>
        <div className="interest-wrapper">
          <div className="interest-select">
            <p>{props.profession}</p>
          </div>
          <div className="interest-select">
            <p>{props.gender}</p>
          </div>
        </div>
        <button
          className="dashboardCard-button"
          onClick={() => navigate("../chatroom")}
        >
          Match !
        </button>
      </div>
    );
  }
}

export default DashboardCard;
