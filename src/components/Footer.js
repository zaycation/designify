import React from "react";
import {
  AiOutlineMail,
  AiOutlineEnvironment,
  AiOutlinePhone,
} from "react-icons/ai";
import Zoom from "react-reveal/Zoom";
import Slide from "react-reveal/Slide";
import { ImPaintFormat } from "react-icons/im";
import { HashLink } from "react-router-hash-link";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <>
      <Container className="py-5">
        <Row>
          <Col xs={12} sm={12} md={3} lg={3} xl={3}>
            <Slide left>
              <div>
                <HashLink smooth style={{ color: "black" }} to="/">
                  <h2>
                    Designify
                    <ImPaintFormat
                      className="ml-2"
                      style={{ color: "#108dc7" }}
                    />
                  </h2>
                </HashLink>
                <p>
                  Lancaster's top web design agency | Featuring the best website
                  designs and tech services within the Antelope Valley
                </p>
              </div>
            </Slide>
          </Col>
          <Col xs={6} sm={6} md={3} lg={3} xl={3}>
            <Slide left>
              <div className="text-xl-center text-lg-center text-md-center text-sm-left text-xs-left">
                <h4>Navigation</h4>
                <HashLink smooth style={{ color: "black" }} to="/home#why">
                  <p>About</p>
                </HashLink>
                <HashLink smooth style={{ color: "black" }} to="/services">
                  <p>Services</p>
                </HashLink>
                <HashLink smooth style={{ color: "black" }} to="/pricing">
                  <p>Pricing</p>
                </HashLink>
                <HashLink smooth style={{ color: "black" }} to="/examples">
                  Examples
                </HashLink>
              </div>
            </Slide>
          </Col>
          <Col xs={6} sm={6} md={3} lg={3} xl={3}>
            <Slide right>
              <div className="text-xl-center text-lg-center text-md-center text-sm-left text-xs-left">
                <h4>Programs</h4>
                <p>Consulting</p>
                <p>Website Revamps</p>
                <p>Internship Program</p>
                <p>Mentorship Program</p>
              </div>
            </Slide>
          </Col>
          <Col xs={12} sm={12} md={3} lg={3} xl={3}>
            <Slide right>
              <h4>Get in Touch</h4>
              <p
                style={{ cursor: "grab" }}
                onClick={() => window.open("tel:773-420-8593", "_blank")}
              >
                <AiOutlinePhone className="mr-2" />
                +1 (773)-420-8593
              </p>
              <p>
                <AiOutlineEnvironment className="mr-2" />
                Lancaster, CA 93534
              </p>
              <p
                className="text-wrap"
                style={{ cursor: "grab" }}
                onClick={() =>
                  window.open("mailto:isaiahthomas098@gmail.com", "_blank")
                }
              >
                <AiOutlineMail className="mr-2" />
                isaiahthomas098@gmail.com
              </p>
            </Slide>
          </Col>
          <Col xs={12} sm={12} md={12} lg={12} xl={12}>
            <footer className="my-2 text-xl-center text-lg-center text-md-center text-sm-left text-xs-left">
              Please give us a call or shoot us over an email to inquire about
              any of our programs!
            </footer>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col className="d-flex justify-content-between">
            <Zoom left>
              <HashLink
                smooth
                to="/"
                style={{ color: "black", textDecoration: "none" }}
              >
                <footer className="gradient-txt">
                  Copyright &copy; 2021 Designify
                </footer>
              </HashLink>
            </Zoom>
            {/*
            <Zoom right>
              <div>
                <AiOutlineFacebook size={22} />
                <AiOutlineInstagram size={22} />
              </div>
            </Zoom>
              */}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Footer;
