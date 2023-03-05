import React from "react";
import Navbar from "../components/Navbar/Navbar";
import tpBG from "../assets/tp.png";

function Shop() {
  return (
    <div>
      <img src={tpBG} alt="Tp BG" style={{ width: "100%", height: "15vh" }} />
      <Navbar />
      <div
        style={{
          marginTop: "5rem",
          padding: "0 5rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <h1>Shop</h1>
        <p>
          We’re happy you’re here ! Send your loved ones a little something or
          show yourself some extra love ❤️
        </p>
      </div>
    </div>
  );
}

export default Shop;
