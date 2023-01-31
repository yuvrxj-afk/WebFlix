import React from "react";
import "../styles/HomeScreen.css";
import NavBar from "./NavBar";
import Banner from "./Banner";

function HomeScreen() {
  return (
    <div className="homeScreen">
      {/* Nav */}
      <NavBar />
      {/* Banner */}
      <Banner />
      {/* Rows */}
    </div>
  );
}

export default HomeScreen;
