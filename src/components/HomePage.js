import React from "react";
import { Link } from "react-router-dom";
import selfie6 from "../img/selfie6.JPG";

const HomePage = () => {
  return (
    <section className="home-page">
      <div className="image-container">
        <img src={selfie6} alt="Matt Regan" className="profile-image" />
      </div>
      <h1>Ello..</h1>
      <p>
        I'm a musician. I make music for{" "}
        <Link to="/music-for-others" className="link">
          other people
        </Link>{" "}
        and{" "}
        <Link to="/solo-work" className="link">
          my own stuff
        </Link>
        .
      </p>
    </section>
  );
};

export default HomePage;
