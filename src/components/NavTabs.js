import React from "react";
import { Link, useLocation } from "react-router-dom";
import gitHub from "../Assets/icons/GitHub-Mark-Light-32px.png";
import linkedIn from "../Assets/icons/LI-light-32px.png";
import { Image, Nav, Navbar } from "react-bootstrap";

function NavTabs() {
  const location = useLocation();

  return (
    <Navbar expand="md" bg="dark">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Link
          to="/about"
          className={
            location.pathname === "/about" ? "nav-link active" : "nav-link"
          }
        >
          <h1>Samuel Fan</h1>
        </Link>
        <Nav className="ml-auto">
          <Link
            to="/about"
            className={
              location.pathname === "/about" ? "nav-link active" : "nav-link"
            }
          >
            About
          </Link>
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
          <Link
            to="/contact"
            className={
              location.pathname === "/contact" ? "nav-link active" : "nav-link"
            }
          >
            Contact
          </Link>
          <a href="https://github.com/SamFan808" target="blank">
            <Image src={gitHub} alt="github logo" id="git" />
          </a>
          <a href="https://www.linkedin.com/in/SamFan808/" target="blank">
            <Image src={linkedIn} alt="linkedin logo" id="linkedin" />
          </a>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavTabs;
