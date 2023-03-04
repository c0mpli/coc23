import React from "react";
import DashboardCard from "./DashboardCard";

function DashboardSection(props) {
  return (
    <div className="dashboard-section">
      <h1>{props.title}</h1>
      <div className="dashboard-section-cards">
        {props.cardsData.map((value, index) => {
          console.log(props.color);
          return (
            <DashboardCard
              name={value.title}
              description={value.description}
              interest={value.interest}
              color={props.color}
            />
          );
        })}
      </div>
    </div>
  );
}

export default DashboardSection;
