import React from "react";
import "../styles/HomeScreen.css";
import NavBar from "./NavBar";
import Banner from "./Banner";
import requests from "../tmdb/request";
import Row from "./Row";

function HomeScreen() {
  return (
    <div className="homeScreen">
      <NavBar />
      <Banner />
      <Row
        title="NETFLIX ORIGINALS"
        fetchURL={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Trending Now" fetchURL={requests.fetchTrending} />
      <Row title="Top Rated" fetchURL={requests.fetchTopRated} />
      <Row title="Action Movies" fetchURL={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchURL={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchURL={requests.fetchHorrorMovies} />
      <Row title="Documentaries" fetchURL={requests.fetchDocumentaries} />
      <Row title="Romantic Movies" fetchURL={requests.fetchRomanceMovies} />
    </div>
  );
}

export default HomeScreen;
