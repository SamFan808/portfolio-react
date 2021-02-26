import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./styles.css";
import gitHub from "../Assets/icons/GitHub-Mark-32px.png";
import linkedIn from "../Assets/icons/LI-light-32px.png";

function NavTabs() {
  const location = useLocation();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <nav className="container-fluid">
        <h1>Samuel Fan</h1>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link
                to="/"
                className={
                  location.pathname === "/" ? "nav-link active" : "nav-link"
                }
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/portfolio"
                className={
                  location.pathname === "/portfolio"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                Portfolio
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/contact"
                className={
                  location.pathname === "/contact"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                Contact
              </Link>
            </li>
          </ul>
          <a href="https://github.com/SamFan808" target="blank">
            <img src={gitHub} alt="github logo" id="git" />
          </a>
          <a href="https://www.linkedin.com/in/SamFan808/" target="blank">
            <img src={linkedIn} alt="linkedin logo" id="linkedin" />
          </a>
        </div>
      </nav>
    </nav>
  );
}

export default NavTabs;
