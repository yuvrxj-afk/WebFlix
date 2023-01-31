import React from "react";
import "../styles/Banner.css";

function Banner() {
  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  }
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundImage: `url('https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bmV0ZmxpeHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60)`,
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">Movie Name</h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
        <h1 className="banner__description">
          {truncate(
            `This is a testing description Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Optio tempora veniam, eos ducimus officiis ipsam
          dolores voluptatem at ea nemo iure. Porro quibusdam ut consequatur
          necessitatibus labore molestiae laborum vero. Lorem ipsum dolor, sit
          amet consectetur adipisicing elit. Saepe labore ut itaque totam
          debitis ex id? Sunt accusamus consequuntur voluptate! Ipsum esse
          pariatur corporis vitae consectetur maxime dolor est fugiat!`,
            150
          )}
        </h1>
      </div>
      <div className="banner--fadeBottom" />
    </header>
  );
}

export default Banner;
