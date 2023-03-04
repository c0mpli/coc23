import React from "react";
import Navbar from "../components/Navbar/Navbar";
import "./Landing.css";
import heroBG from "../assets/hero-bg.png";
import ExploreCard from "../components/ExploreCard/ExploreCard";

import explore1 from "../assets/explore/1.png";
import explore2 from "../assets/explore/2.png";
import explore3 from "../assets/explore/3.png";
import explore4 from "../assets/explore/4.png";
import explore5 from "../assets/explore/5.png";
import explore6 from "../assets/explore/6.png";
import explore7 from "../assets/explore/7.png";
import explore8 from "../assets/explore/8.png";

import readmeImg from "../assets/readme.png";

{
  /*const exploreData = [
  {
    title: "Cafe",
    image: explore1,
  },
  {
    title: "Staycations",
    image: explore2,
  },
  {
    title: "Homestays",
    image: explore3,
  },
  {
    title: "Short Tours",
    image: explore4,
  },
  {
    title: "Bike Rides",
    image: explore5,
  },
  {
    title: "Night Tours",
    image: explore6,
  },
  {
    title: "Treks",
    image: explore7,
  },
  {
    title: "International",
    image: explore8,
  },
];*/
}

function Landing() {
  return (
    <div>
      <img className="hero-bg" src={heroBG} alt="bgImage" />
      <Navbar />
      <div className="hero-section" id="landing">
        <div className="hero-content">
          <h1>
            Your likes. Your person.<br></br> The{" "}
            <em className="hero-upperPerfect">perfect</em>
            <em className="hero-perfect">perfect</em> date.
          </h1>
          <p>
            From <em className="hero-specialP">Harry Potter</em> to{" "}
            <em className="hero-specialP">How to Lose a Guy in 10 Days</em>,
            pick up a conversation and kickstart a meaningful relationship.
          </p>
        </div>
        <div className="hero-buttons">
          <button>Sign me up !👋</button>
          <button>Why you ?🤔</button>
        </div>
      </div>
      {/*<div className="explore-section">
        <h1>
          Your likes. Your person.<br></br> The perfect date.
        </h1>
        <div className="explore-grids">
          {exploreData.map((value, index) => {
            return <ExploreCard title={value.title} image={value.image} />;
          })}
        </div>
        </div>*/}
      <div className="readme-section">
        <div className="readme-content-wrapper">
          <h1 className="readme-title">
            <em className="readme-uppertitle">
              That’s what <br></br>They said !
            </em>
            <em>
              That’s what <br></br>They said !
            </em>
          </h1>
          <p>
            Take a look at Arya and Suraj’s meet-up story and how one pizza
            started a relatinship for years to last 🍕
          </p>
          <button>Read me 👉</button>
        </div>
        <img src={readmeImg} />
      </div>
      <div className="features-section"></div>
    </div>
  );
}

export default Landing;
