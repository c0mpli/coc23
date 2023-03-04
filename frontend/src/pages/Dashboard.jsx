import React from "react";
import DashboardSection from "../components/Dashboard/DashboardSection";
import Navbar from "../components/Navbar/Navbar";
import "./Dashboard.css";
import dashboardBG from "../assets/DashboardBG.png";
function Dashboard() {
  return (
    <div className="dashboard-wrapper">
      <img className="dashboard-bg" src={dashboardBG} alt="bgImage" />
      <Navbar />
      <div className="dashboard-section1">
        <h1>
          Welcome back,<br></br>Manasi ! 👋
        </h1>
      </div>
      <div className="dashboard-rest">
        <DashboardSection
          title="Your next match might be . . ."
          color="#F2E1FF"
          cardsData={[
            {
              title: "Aditya, 21",
              description: "I’m crazy and awkward and desperate for love!",
              interest: [
                { title: "Badmintion" },
                { title: "Badmintion" },
                { title: "Badmintion" },
                { title: "Badmintion" },
              ],
            },
            {
              title: "Aditya, 21",
              description: "I’m crazy and awkward and desperate for love!",
              interest: [
                { title: "Badmintion" },
                { title: "Badmintion" },
                { title: "Badmintion" },
                { title: "Badmintion" },
              ],
            },
            {
              title: "Aditya, 21",
              description: "I’m crazy and awkward and desperate for love!",
              interest: [
                { title: "Badmintion" },
                { title: "Badmintion" },
                { title: "Badmintion" },
                { title: "Badmintion" },
              ],
            },
          ]}
        />
        <DashboardSection
          title="F.R.I.E.N.D.S Lovers ❤️"
          color="#C5F1FF"
          cardsData={[
            {
              title: "Aditya, 21",
              description: "I’m crazy and awkward and desperate for love!",
              interest: [
                { title: "Badmintion" },
                { title: "Badmintion" },
                { title: "Badmintion" },
                { title: "Badmintion" },
              ],
            },
            {
              title: "Aditya, 21",
              description: "I’m crazy and awkward and desperate for love!",
              interest: [
                { title: "Badmintion" },
                { title: "Badmintion" },
                { title: "Badmintion" },
                { title: "Badmintion" },
              ],
            },
            {
              title: "Aditya, 21",
              description: "I’m crazy and awkward and desperate for love!",
              interest: [
                { title: "Badmintion" },
                { title: "Badmintion" },
                { title: "Badmintion" },
                { title: "Badmintion" },
              ],
            },
          ]}
        />
        <DashboardSection
          title="Near You 🗺️"
          color="#CBFFE4"
          cardsData={[
            {
              title: "Aditya, 21",
              description: "I’m crazy and awkward and desperate for love!",
              interest: [
                { title: "Badmintion" },
                { title: "Badmintion" },
                { title: "Badmintion" },
                { title: "Badmintion" },
              ],
            },
            {
              title: "Aditya, 21",
              description: "I’m crazy and awkward and desperate for love!",
              interest: [
                { title: "Badmintion" },
                { title: "Badmintion" },
                { title: "Badmintion" },
                { title: "Badmintion" },
              ],
            },
            {
              title: "Aditya, 21",
              description: "I’m crazy and awkward and desperate for love!",
              interest: [
                { title: "Badmintion" },
                { title: "Badmintion" },
                { title: "Badmintion" },
                { title: "Badmintion" },
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
                { title: "Badmintion" },
                { title: "Badmintion" },
                { title: "Badmintion" },
                { title: "Badmintion" },
              ],
            },
            {
              title: "Aditya, 21",
              description: "I’m crazy and awkward and desperate for love!",
              interest: [
                { title: "Badmintion" },
                { title: "Badmintion" },
                { title: "Badmintion" },
                { title: "Badmintion" },
              ],
            },
            {
              title: "Aditya, 21",
              description: "I’m crazy and awkward and desperate for love!",
              interest: [
                { title: "Badmintion" },
                { title: "Badmintion" },
                { title: "Badmintion" },
                { title: "Badmintion" },
              ],
            },
          ]}
        />
      </div>
    </div>
  );
}

export default Dashboard;
