import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Slide from "react-reveal/Slide";
import {
  SiAmazonaws,
  SiReact,
  SiReactrouter,
  SiNetlify,
  SiNginx,
  SiVisualstudiocode,
  SiGit,
  SiBootstrap,
  SiNodeDotJs,
  SiNodemon,
  SiMongodb,
} from "react-icons/si";

const Projects = () => {
  const [isShown1, setIsShown1] = useState(false);
  const [isShown2, setIsShown2] = useState(false);
  const [isShown3, setIsShown3] = useState(false);
  const [isShown4, setIsShown4] = useState(false);
  const [isShown5, setIsShown5] = useState(false);
  const [isShown6, setIsShown6] = useState(false);
  const [isShown7, setIsShown7] = useState(false);
  const [isShown8, setIsShown8] = useState(false);

  const handleChange1 = () => {
    setIsShown1((prevState) => !prevState);
  };
  const handleChange2 = () => {
    setIsShown2((prevState) => !prevState);
  };
  const handleChange3 = () => {
    setIsShown3((prevState) => !prevState);
  };
  const handleChange4 = () => {
    setIsShown4((prevState) => !prevState);
  };
  const handleChange5 = () => {
    setIsShown5((prevState) => !prevState);
  };
  const handleChange6 = () => {
    setIsShown6((prevState) => !prevState);
  };
  const handleChange7 = () => {
    setIsShown7((prevState) => !prevState);
  };
  const handleChange8 = () => {
    setIsShown8((prevState) => !prevState);
  };

  return (
    <>
      <Container fluid={true}>
        <Row>
          <Col
            onClick={() => {
              window.open("https://scoutindustries.com", "_blank");
            }}
            onMouseEnter={handleChange1}
            onMouseLeave={handleChange1}
            className="proj-container scout-industries"
            xs={12}
            sm={12}
            md={6}
            lg={6}
            xl={6}
          >
            {isShown1 ? (
              <Slide top>
                <div className="text-center text-white my-5 px-3">
                  <h4>Scout Industries</h4>
                  <p>
                    Custom website built to highlight all subsidiaries of the
                    parent company: Scout Industries. The main goal here was to
                    make an app similar to linktree to link the existing
                    websites.
                  </p>
                  <p>Technologies used:</p>
                  <div className="d-flex flex-column justify-content-center align-items-center">
                    <SiVisualstudiocode size={32} />
                    <SiAmazonaws size={32} />
                    <SiBootstrap size={32} />
                    <SiReact size={32} />
                    <SiNginx size={32} />
                    <SiGit size={32} />
                  </div>
                </div>
              </Slide>
            ) : null}
          </Col>
          <Col
            onClick={() => {
              window.open("http://scoutinsures.com/", "_blank");
            }}
            onMouseEnter={handleChange2}
            onMouseLeave={handleChange2}
            className="proj-container scoutins"
            xs={12}
            sm={12}
            md={6}
            lg={6}
            xl={6}
          >
            {isShown2 ? (
              <Slide top>
                <div className="text-center text-white my-5 px-3">
                  <h4>Scout Insurance</h4>
                  <p>
                    Elegantly designed web app created to generate insurance
                    leads for our partners. The main goal of this project was to
                    obtain potential customer info and import it to Scout's CRM.
                  </p>
                  <p>Technologies used:</p>
                  <div className="d-flex flex-column justify-content-center align-items-center">
                    <SiVisualstudiocode size={26} />
                    <SiAmazonaws size={26} />
                    <SiBootstrap size={26} />
                    <SiReact size={26} />
                    <SiNginx size={26} />
                    <SiGit size={26} />
                    <SiReactrouter size={26} />
                    <SiNodeDotJs size={26} />
                    <SiNodemon size={26} />
                    <SiMongodb size={26} />
                  </div>
                </div>
              </Slide>
            ) : null}
          </Col>
        </Row>
        <Row>
          <Col
            onClick={() => {
              window.open("https://augurysalon.netlify.app/", "_blank");
            }}
            onMouseEnter={handleChange3}
            onMouseLeave={handleChange3}
            className="proj-container augury"
            xs={12}
            sm={12}
            md={6}
            lg={6}
            xl={6}
          >
            {isShown3 ? (
              <Slide top>
                <div className="text-center text-white my-5 px-3">
                  <h4>Augury Salon</h4>
                  <p>
                    Augury went from a booming local business with no tech, to a
                    phenomenal online presence with ecommerce solutions that
                    help customers create appointments and understand more about
                    the business. This site is currently still a work in
                    progress.
                  </p>
                  <p>Technologies used:</p>
                  <div className="d-flex flex-column justify-content-center align-items-center">
                    <SiVisualstudiocode size={26} />
                    <SiBootstrap size={26} />
                    <SiReact size={26} />
                    <SiGit size={26} />
                    <SiReactrouter size={26} />
                    <SiNetlify size={26} />
                  </div>
                </div>
              </Slide>
            ) : null}
          </Col>
          <Col
            onClick={() => {
              window.open("https://raneemsaad.netlify.app/", "_blank");
            }}
            onMouseEnter={handleChange4}
            onMouseLeave={handleChange4}
            className="proj-container raneem"
            xs={12}
            sm={12}
            md={6}
            lg={6}
            xl={6}
          >
            {isShown4 ? (
              <Slide top>
                <div className="text-center text-white my-5 px-3">
                  <h4>Raneem Saad Photography</h4>
                  <p>
                    Raneem's website had attempts to aim at beautiful
                    eye-capturing design to help show off how amazing her
                    photography skills are! The primary goal was toe stablish an
                    online presence and ease booking for clients. This site is
                    currently still a work in progress.
                  </p>
                  <p>Technologies used:</p>
                  <div className="d-flex flex-column justify-content-center align-items-center">
                    <SiVisualstudiocode size={26} />
                    <SiBootstrap size={26} />
                    <SiReact size={26} />
                    <SiGit size={26} />
                    <SiReactrouter size={26} />
                    <SiNetlify size={26} />
                  </div>
                </div>
              </Slide>
            ) : null}
          </Col>
        </Row>
        <Row>
          <Col
            onClick={() => {
              window.open("https://techship-uidemo.netlify.app/", "_blank");
            }}
            onMouseEnter={handleChange5}
            onMouseLeave={handleChange5}
            className="proj-container techship"
            xs={12}
            sm={12}
            md={6}
            lg={6}
            xl={6}
          >
            {isShown5 ? (
              <Slide top>
                <div className="text-center text-white my-5 px-3">
                  <h4>Tech-Ship</h4>
                  <p>
                    Tech-Ship is still currently a work in progress. Tech-Ship
                    is a NPO dedicated to mentoring youth on tech! We are
                    currently still working on building their web app.
                  </p>
                  <p>Technologies used:</p>
                  <div className="d-flex flex-column justify-content-center align-items-center">
                    <SiVisualstudiocode size={26} />
                    <SiBootstrap size={26} />
                    <SiReact size={26} />
                    <SiGit size={26} />
                    <SiReactrouter size={26} />
                    <SiNetlify size={26} />
                  </div>
                </div>
              </Slide>
            ) : null}
          </Col>
          <Col
            onClick={() => {
              window.open("http://scouttax.com/", "_blank");
            }}
            onMouseEnter={handleChange6}
            onMouseLeave={handleChange6}
            className="proj-container scout-tax"
            xs={12}
            sm={12}
            md={6}
            lg={6}
            xl={6}
          >
            {isShown6 ? (
              <Slide top>
                <div className="text-center text-white my-5 px-3">
                  <h4>Scout Tax</h4>
                  <p>
                    This app was meant to appeal to majority of customers
                    (specifically young ones) and educate them on Scout's tax
                    services. Customers can fill out a free consultation form to
                    get contacted from Scout.
                  </p>
                  <p>Technologies used:</p>
                  <div className="d-flex flex-column justify-content-center align-items-center">
                    <SiVisualstudiocode size={26} />
                    <SiBootstrap size={26} />
                    <SiReact size={26} />
                    <SiGit size={26} />
                    <SiReactrouter size={26} />
                    <SiNetlify size={26} />
                  </div>
                </div>
              </Slide>
            ) : null}
          </Col>
        </Row>
        <Row>
          <Col
            onClick={() => {
              window.open("https://scoutfinancing.com/", "_blank");
            }}
            onMouseEnter={handleChange7}
            onMouseLeave={handleChange7}
            className="proj-container scout-financing"
            xs={12}
            sm={12}
            md={6}
            lg={6}
            xl={6}
          >
            {isShown7 ? (
              <Slide top>
                <div className="text-center text-white my-5 px-3">
                  <h4>Scout Financing</h4>
                  <p>
                    This site is intended to market towards the Southern
                    California real estate market. It helps potential clients
                    fill out a form for a consultation regarding lending and
                    better understand what the Financing side of Scout has to
                    offer.
                  </p>
                  <p>Technologies used:</p>
                  <div className="d-flex flex-column justify-content-center align-items-center">
                    <SiVisualstudiocode size={32} />
                    <SiAmazonaws size={32} />
                    <SiBootstrap size={32} />
                    <SiReact size={32} />
                    <SiNginx size={32} />
                    <SiGit size={32} />
                  </div>
                </div>
              </Slide>
            ) : null}
          </Col>
          <Col
            onClick={() => {
              window.open("https://scoutfi.com/", "_blank");
            }}
            onMouseEnter={handleChange8}
            onMouseLeave={handleChange8}
            className="proj-container scout-financial"
            xs={12}
            sm={12}
            md={6}
            lg={6}
            xl={6}
          >
            {isShown8 ? (
              <Slide top>
                <div className="text-center text-white my-5 px-3">
                  <h4>Scout Financial Website</h4>
                  <p>
                    This was our first professional project. This project was
                    meant to improve Scout's online presence and allow potential
                    customers to fill out a consultation form.
                  </p>
                  <p>Technologies used:</p>
                  <div className="d-flex flex-column justify-content-center align-items-center">
                    <SiVisualstudiocode size={26} />
                    <SiAmazonaws size={26} />
                    <SiBootstrap size={26} />
                    <SiReact size={26} />
                    <SiNginx size={26} />
                    <SiGit size={26} />
                    <SiReactrouter size={26} />
                    <SiNodeDotJs size={26} />
                    <SiNodemon size={26} />
                    <SiMongodb size={26} />
                  </div>
                </div>
              </Slide>
            ) : null}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Projects;
