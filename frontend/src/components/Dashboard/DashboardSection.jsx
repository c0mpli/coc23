import React from "react";
import DashboardCard from "./DashboardCard";

function DashboardSection(props) {
  return (
    <div className="dashboard-section">
      <h1>{props.title}</h1>
      <div className="dashboard-section-cards">
        {props.cardsData?.map((value, index) => {
          console.log(value.interest);
          if (index > 2) return;
          return (
            <DashboardCard
              name={`${value.name}, ${value.age}`}
              description={value.tagline}
              interest={value.interests}
              color={props.color}
              gender={value.gender}
              profession={value.profession}
            />
          );
        })}
      </div>
    </div>
  );
}

export default DashboardSection;
