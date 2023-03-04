import React from "react";
import Navbar from "../components/Navbar/Navbar";
import OurtipsCard from "../components/OurtipsCard/OurtipsCard";
import tpBG from "../assets/tp.png";
function Events() {
  return (
    <div>
      <img src={tpBG} alt="Tp BG" style={{ width: "100%", height: "15vh" }} />
      <Navbar />
      <div className="events-wrapper">
        <OurtipsCard
          title="Event 1"
          description="Test"
          time="28 Feb,2023"
          color="#F2E1FF"
          views="Bandra"
          events="true"
        />
        <OurtipsCard
          title="Event 1"
          description="Test"
          time="28 Feb,2023"
          color="#F2E1FF"
          views="Bandra"
          events="true"
        />
        <OurtipsCard
          title="Event 1"
          description="Test"
          time="28 Feb,2023"
          color="#F2E1FF"
          views="Bandra"
          events="true"
        />
        <OurtipsCard
          title="Event 1"
          description="Test"
          time="28 Feb,2023"
          color="#F2E1FF"
          views="Bandra"
          events="true"
        />
        <OurtipsCard
          title="Event 1"
          description="Test"
          time="28 Feb,2023"
          color="#F2E1FF"
          views="Bandra"
          events="true"
        />
        <OurtipsCard
          title="Event 1"
          description="Test"
          time="28 Feb,2023"
          color="#F2E1FF"
          views="Bandra"
          events="true"
        />
      </div>
    </div>
  );
}

export default Events;
