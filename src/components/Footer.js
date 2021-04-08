import React from "react";
import Zoom from "react-reveal/Zoom";
import Slide from "react-reveal/Slide";
import { Container, Row, Col } from "react-bootstrap";
import { ImPaintFormat } from "react-icons/im";
import {
  AiOutlineMail,
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiOutlineEnvironment,
  AiOutlinePhone,
} from "react-icons/ai";

const Footer = () => {
  return (
    <>
      <Container className="py-5">
        <Row>
          <Col xs={12} sm={12} md={3} lg={3} xl={3}>
            <Slide left>
              <div>
                <h2>
                  Designify
                  <ImPaintFormat
                    className="mr-1"
                    style={{ color: "#108dc7" }}
                  />
                </h2>
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
                <p>Home</p>
                <p>About</p>
                <p>Services</p>
                <p>Pricing</p>
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
              <p>
                <AiOutlinePhone className="mr-2" />
                +1 (773)-420-8593
              </p>
              <p>
                <AiOutlineEnvironment className="mr-2" />
                Lancaster, CA 93534
              </p>
              <p className="text-wrap">
                <AiOutlineMail className="mr-2" />
                isaiahthomas098@gmail.com
              </p>
            </Slide>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col className="d-flex justify-content-between">
            <Zoom left>
              <footer className="gradient-txt">
                Copyright &copy; 2021 Designify
              </footer>
            </Zoom>
            <Zoom right>
              <div>
                <AiOutlineFacebook size={22} />
                <AiOutlineInstagram size={22} />
              </div>
            </Zoom>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Footer;
