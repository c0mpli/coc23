import React from "react";
import Navbar from "../components/Navbar/Navbar";
import "./Landing.css";
import heroBG from "../assets/hero-bg.png";

import readmeImg from "../assets/readme.png";
import featuresIcon from "../assets/featuresIcon.png";
import heartIcon from "../assets/heart.png";
import OurtipsCard from "../components/OurtipsCard/OurtipsCard";

import tips1 from "../assets/ourtips1.png";
import tips2 from "../assets/ourtips2.png";
import tips3 from "../assets/ourtips3.png";

import newsLetter from "../assets/newsletterBottom.png";

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
      <div className="features-section">
        <div className="features-lhs">
          <img src={featuresIcon} alt="Features icon" />
          <h2>Efficient</h2>
          <p>
            Our specially programmed algorithms are sure to help you find the
            perfect match according to your likes. You can update your
            preferences even after registering.
          </p>
        </div>
        <div className="features-vertical-line"></div>
        <div className="features-mhs">
          <img src={featuresIcon} alt="Features icon" />
          <h2>Secure</h2>
          <p>
            Each profile that is registered on our platform has gone through
            face verification to make sure that you are chatting with a real
            person.
          </p>
        </div>
        <div className="features-vertical-line"></div>
        <div className="features-rhs">
          <img src={featuresIcon} alt="Features icon" />
          <h2>Reliable</h2>
          <p>
            Although we cannot guarantee whether you will strike a chord with
            your person at first, we can assure to send you the most compatible
            profiles according to your interests.
          </p>
        </div>
      </div>
      <div className="tips-section">
        <div className="tips-title">
          <img src={heartIcon} alt="Heart Icon" />
          <h1>Our Tips</h1>
          <img src={heartIcon} alt="Heart Icon" />
        </div>
        <div className="ourtips-cards">
          <OurtipsCard
            title="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum."
            color="#F2E1FF"
            time="3 min"
            views="4.8k"
            image={tips1}
          />
          <OurtipsCard
            title="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum."
            color="#C5F1FF"
            time="3 min"
            views="4.8k"
            image={tips2}
          />
          <OurtipsCard
            title="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum."
            color="#CBFFE4"
            time="3 min"
            views="4.8k"
            image={tips3}
          />
        </div>
      </div>
      <div className="newsletter-section">
        <div className="newsletter-content">
          <h1>Join Our Fam !</h1>
          <p>
            There are endless number of hearts looking for love. Be a part of
            our community to get exclusive articles to improve upon your dating
            life, profile recommendations, notifications, etc.
          </p>
        </div>
        <div className="input-wrapper">
          <input placeholder="Your Email" />
        </div>
        <img src={newsLetter} />
      </div>
    </div>
  );
}

export default Landing;
