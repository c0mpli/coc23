import React from "react";
import Navbar from "../components/Navbar/Navbar";
import tpBG from "../assets/tp.png";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import DashboardSection from "../components/Dashboard/DashboardSection";
import DashboardCard from "../components/Dashboard/DashboardCard";
function Discover() {
  const [data, setData] = useState();
  function getData() {
    axios
      .get("https://coc-1.adityasurve1.repl.co/user/getusers", {
        headers: { token: localStorage.getItem("token") },
        auth: { user: { _id: localStorage.getItem("token") } },
      })
      .then((response) => {
        setData(response.data);
        //setData(response.data);
        //setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      }, []);
  }
  function handleClick() {}
  useEffect(() => {
    getData();
  });
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
        Recent People
      </h1>{" "}
      <div
        className="people-wrapper"
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "3rem",
          marginTop: "5rem",
          justifyContent: "center",
        }}
        onclick={handleClick}
      >
        {data?.reverse()?.map((value, key) => {
          return (
            <>
              <DashboardCard
                name={value.name}
                description={value.description || value.tagline}
                interest={value.interests}
                profession={value.profession || value.qualitfication}
                gender={value.gender}
                color="#F2E1FF"
                cardsData={data}
                email={value.email}
                mail="true"
              />
            </>
          );
        })}
      </div>
    </div>
  );
}

export default Discover;
