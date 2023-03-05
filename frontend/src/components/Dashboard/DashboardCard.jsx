import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
function DashboardCard(props) {
  const navigate = useNavigate();
  function handleMail() {
    axios
      .post("https://coc-1.adityasurve1.repl.co/user/sendemail", {
        email: props.email,
        subject: "Someone has viewed your profile",
        message: "A user has viewed your profile",
      })
      .then((response) => {
        alert("done" + props.email);
      })
      .catch((err) => {
        console.log(err.message);
        setErrorMessage("Incorrect details");
      });
  }
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
        {props.mail != "true" && (
          <button
            className="dashboardCard-button"
            onClick={() => navigate("../chatroom")}
          >
            Match !
          </button>
        )}
        {props.mail === "true" && (
          <button className="dashboardCard-button" onClick={() => handleMail()}>
            View Profile
          </button>
        )}
      </div>
    );
  }
}

export default DashboardCard;
