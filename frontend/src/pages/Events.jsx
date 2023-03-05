import React from "react";
import Navbar from "../components/Navbar/Navbar";
import OurtipsCard from "../components/OurtipsCard/OurtipsCard";
import tpBG from "../assets/tp.png";
import bg1 from "../assets/ourtips1.png";

function Events() {
  return (
    <div>
      <img src={tpBG} alt="Tp BG" style={{ width: "100%", height: "15vh" }} />
      <Navbar />
      <h1
        style={{
          marginTop: "5rem",
          padding: "0 5rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        Upcoming Events
      </h1>
      <div className="events-wrapper">
        <OurtipsCard
          title="Speed Dating Experiment"
          description="This dataset contains data from a speed dating experiment where participants went on multiple 4-minute dates and rated their level of interest in each person."
          time="28 Feb,2023"
          color="#F2E1FF"
          views="Bandra"
          events="true"
          image={bg1}
        />
        <OurtipsCard
          title="OkCupid Profiles"
          description=" This dataset includes data from OkCupid dating profiles, including users' ages, genders, orientations, and answers to various questions about their personalities and preferences. "
          time="28 Feb,2023"
          color="#F2E1FF"
          views="Bandra"
          events="true"
          image={bg1}
        />
        <OurtipsCard
          title="First Dates"
          description="This dataset includes data from a TV show called First Dates,5 which documents blind dates between two strangers"
          time="28 Feb,2023"
          color="#F2E1FF"
          views="Bandra"
          events="true"
          image={bg1}
        />
        <OurtipsCard
          title="Dating App Usage"
          description="This dataset includes data about the usage of various dating apps, including Tinder, Bumble, and Hinge."
          time="28 Feb,2023"
          color="#F2E1FF"
          views="Bandra"
          events="true"
          image={bg1}
        />
        <OurtipsCard
          title="Online Dating"
          description=" This dataset includes data from an online dating site, including users' ages, genders, locations, and interests. The data was scraped from the site in 2011."
          time="28 Feb,2023"
          color="#F2E1FF"
          views="Bandra"
          events="true"
          image={bg1}
        />
        <OurtipsCard
          title="Speed Dating Survey"
          description="This dataset includes data from a survey conducted after a speed dating event. Participants rated their level of interest in each person they met, and also answered questions about their own preferences and attitudes towards dating."
          time="28 Feb,2023"
          color="#F2E1FF"
          views="Bandra"
          events="true"
          image={bg1}
        />
      </div>
    </div>
  );
}

export default Events;
