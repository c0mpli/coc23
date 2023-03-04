import React from "react";
import MultistepForm from "../components/MultistepForm/MultistepForm";
import Navbar from "../components/Navbar/Navbar";

function AboutYou() {
  return (
    <div>
      <Navbar />
      <div style={{ marginTop: "20rem" }}>
        <MultistepForm />
      </div>
    </div>
  );
}

export default AboutYou;
