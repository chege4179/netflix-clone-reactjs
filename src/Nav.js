import React, { useState, useEffect } from "react";
import netflixlogo from "./netflix_logo.png";
import nav_avatar from "./nav_avatar.png";
import "./Nav.css";

function Nav() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);
  return (
    <div className={`nav${show && "nav_black"}`}>
      <img className="nav_logo" src={netflixlogo} alt="Netflix_Logo" />
      <img className="nav_avatar" src={nav_avatar} alt="Netflix_avatar" />
    </div>
  );
}

export default Nav;
//"https://upload.wikimedia.org/wikipedia/commons/0/0f/"
//"https://pbs.twimg.com/profile_images/124011999041155"
