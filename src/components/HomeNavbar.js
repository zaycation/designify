import React from "react";
import Flip from "react-reveal/Flip";
import { ImPaintFormat } from "react-icons/im";
import { Navbar, Nav, NavDropdown, Button } from "react-bootstrap";

import "../css/Navbar.css";

const HomeNavbar = () => {
  return (
    <>
      <Navbar bg="light" expand="lg" className="navbar__main">
        <Flip top>
          <Navbar.Brand
            href="/"
            className="logo__text text-white d-flex flex-row align-items-center justify-content-center "
            style={{ fontSize: "95%" }}
          >
            <ImPaintFormat className="mr-1 text-white" />
            Designify
          </Navbar.Brand>
        </Flip>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className="collapseitem"
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Flip top>
              <Nav.Link href="#home">About</Nav.Link>
              <Nav.Link href="#link">Services</Nav.Link>
              <Nav.Link href="#link">Pricing</Nav.Link>
            </Flip>
          </Nav>
          <Flip top>
            <Nav.Link className="navbar-btn" href="#link">
              (773)-420-8593
            </Nav.Link>
          </Flip>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default HomeNavbar;