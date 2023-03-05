import React from "react";
import Navbar from "../components/Navbar/Navbar";
import tpBG from "../assets/tp.png";

import shop1 from "../assets/shop1.png";
import shop2 from "../assets/shop2.png";
import shop3 from "../assets/shop3.png";
import OurtipsCard from "../components/OurtipsCard/OurtipsCard";

function Shop() {
  const data = [
    {
      image: shop1,
      title: "Couple matching silver coated bracelets",
      description: "₹100 per piece",
    },
    { image: shop2, title: "Printed Tote Bag", description: "₹100 per piece" },
    {
      image: shop3,
      title: "Set of 2 Coffee Mugs for him and her",
      description: "₹300 per set",
    },
  ];
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
      <div className="shop-items-wrapper">
        {data?.map((value, key) => {
          return (
            <>
              <OurtipsCard
                image={value.image}
                title={value.title}
                description={value.description}
                color="#F2E1FF"
                shop="true"
              />
            </>
          );
        })}
      </div>
    </div>
  );
}

export default Shop;
