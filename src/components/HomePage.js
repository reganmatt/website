import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <section>
      <img src="../../public/img/selfie.JPG" alt="Matt Regan" />
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
