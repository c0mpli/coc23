import React from "react";
import DashboardSection from "../components/Dashboard/DashboardSection";
import Navbar from "../components/Navbar/Navbar";
import "./Dashboard.css";
import dashboardBG from "../assets/DashboardBG.png";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
function Dashboard() {
  const name = localStorage.getItem("name");
  const [data, setData] = useState();
  function matchUsers() {
    axios
      .get("https://coc-1.adityasurve1.repl.co/user/match", {
        headers: { token: localStorage.getItem("token") },
        auth: { user: { _id: localStorage.getItem("token") } },
      })
      .then((response) => {
        console.log("Matched");
      })
      .catch((error) => {
        console.log(error);
      });
  }
  function locationUsers() {
    axios
      .get("https://coc-1.adityasurve1.repl.co/user/match2", {
        headers: { token: localStorage.getItem("token") },
        auth: { user: { _id: localStorage.getItem("token") } },
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  function getData() {
    axios
      .get("https://coc-1.adityasurve1.repl.co/user/test", {
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
      });
  }

  useEffect(() => {
    matchUsers();
    locationUsers();
    getData();
  }, []);

  return (
    <div className="dashboard-wrapper">
      <img className="dashboard-bg" src={dashboardBG} alt="bgImage" />
      <Navbar />
      <div className="dashboard-section1">
        <h1>
          Welcome back,<br></br>
          {name} ! 👋
        </h1>
      </div>
      <div className="dashboard-rest">
        <DashboardSection
          title="Your next match might be . . ."
          color="#F2E1FF"
          cardsData={data}
        />
        <DashboardSection
          title="F.R.I.E.N.D.S Lovers ❤️"
          color="#C5F1FF"
          cardsData={data}
          friends="true"
        />
        <DashboardSection
          title="Near You 🗺️"
          color="#CBFFE4"
          cardsData={[
            {
              title: "Aditya, 21",
              description: "I’m crazy and awkward and desperate for love!",
              interest: [
                "Badmintion",
                "Badmintion",
                "Badmintion",
                "Badmintion",
              ],
            },
            {
              title: "Aditya, 21",
              description: "I’m crazy and awkward and desperate for love!",
              interest: [
                "Badmintion",
                "Badmintion",
                "Badmintion",
                "Badmintion",
              ],
            },
            {
              title: "Aditya, 21",
              description: "I’m crazy and awkward and desperate for love!",
              interest: [
                "Badmintion",
                "Badmintion",
                "Badmintion",
                "Badmintion",
              ],
            },
          ]}
        />
        <DashboardSection
          title="Cooking Connoissuers ❤️"
          color="#FFE9AA"
          cardsData={[
            {
              title: "Aditya, 21",
              description: "I’m crazy and awkward and desperate for love!",
              interest: [
                "Badmintion",
                "Badmintion",
                "Badmintion",
                "Badmintion",
              ],
            },
            {
              title: "Aditya, 21",
              description: "I’m crazy and awkward and desperate for love!",
              interest: [
                "Badmintion",
                "Badmintion",
                "Badmintion",
                "Badmintion",
              ],
            },
            {
              title: "Aditya, 21",
              description: "I’m crazy and awkward and desperate for love!",
              interest: [
                "Badmintion",
                "Badmintion",
                "Badmintion",
                "Badmintion",
              ],
            },
          ]}
        />
      </div>
    </div>
  );
}

export default Dashboard;
