import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import HomePage from "./HomePage";
import MusicForOthers from "./MusicForOthers";
import SoloWork from "./SoloWork";
import Contact from "./Contact";

import "./styles.css";

const App = () => {
  return (
    <Router>
      <header>
        <h1>MATT REGAN</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/music-for-others">Music for Others</Link>
            </li>
            <li>
              <Link to="/solo-work">Solo Work</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/music-for-others" element={<MusicForOthers />} />
          <Route path="/solo-work" element={<SoloWork />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <footer>
        <p>
          &copy; {new Date().getFullYear()} My Music Website. All rights
          reserved.
        </p>
      </footer>
    </Router>
  );
};

export default App;
