import React from "react";
import Flip from "react-reveal/Flip";
import { ImPaintFormat } from "react-icons/im";
import { Navbar, Nav } from "react-bootstrap";
import { HashLink } from "react-router-hash-link";

import "../css/Navbar.css";

const HomeNavbar = () => {
  return (
    <>
      <Navbar bg="dark" expand="sm" className="navbar__main" variant="dark">
        <Flip top>
          <Navbar.Brand
            href="/"
            className="logo__text text-white d-flex flex-row align-items-center justify-content-center"
            style={{ fontSize: "95%" }}
          >
            <ImPaintFormat className="mr-1 text-white" />
            Designify
          </Navbar.Brand>
        </Flip>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Flip top>
              <Nav.Link>
                <HashLink className="navhas" smooth to="/home#why">
                  Why
                </HashLink>
              </Nav.Link>
              <Nav.Link>
                <HashLink className="navhas" to="/services">Services</HashLink>
              </Nav.Link>
              <Nav.Link>
                <HashLink className="navhas" to="/pricing">Pricing</HashLink>
              </Nav.Link>
              <Nav.Link>
                <HashLink className="navhas" to="/examples">Our Work</HashLink>
              </Nav.Link>
            </Flip>
          </Nav>
          <Nav className="ml-auto">
            <Flip top>
              <Nav.Link
                className="navbar-btn d-flex flex-row text-left"
                href="#link"
                onClick={() => window.open("tel:773-420-8593", "_blank")}
              >
                (773)-420-8593
              </Nav.Link>
            </Flip>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default HomeNavbar;
