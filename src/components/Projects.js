import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
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
              <div className="text-center text-white my-5 px-3">
                <h4>Scout Industries</h4>
                <p>
                  Custom website built to highlight all subsidiaries of the
                  parent company: Scout Industries. The main goal here was to
                  make an app similar to linktree to link the existing websites.
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
              <div className="text-center text-white my-5 px-3">
                <h4>Scout Insurance</h4>
                <p>
                  Elegantly designed web app created to generate insurance leads
                  for our partners. The main goal of this project was to obtain
                  potential customer info and import it to Scout's CRM.
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
              <div className="text-center text-white my-5 px-3">
                <h4>Scout Insurance</h4>
                <p>
                  Elegantly designed web app created to generate insurance leads
                  for our partners. The main goal of this project was to obtain
                  potential customer info and import it to Scout's CRM.
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
            ) : null}
          </Col>
          <Col
            onClick={() => {
              window.open("https://raneemsaad.netlify.app/", "_blank");
            }}
            className="proj-container raneem"
            xs={12}
            sm={12}
            md={6}
            lg={6}
            xl={6}
          >
            {isShown3 ? (
              <div className="text-center text-white my-5 px-3">
                <h4>Scout Insurance</h4>
                <p>
                  Elegantly designed web app created to generate insurance leads
                  for our partners. The main goal of this project was to obtain
                  potential customer info and import it to Scout's CRM.
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
            ) : null}
          </Col>
        </Row>
        <Row>
          <Col
            onClick={() => {
              window.open("https://techship-uidemo.netlify.app/", "_blank");
            }}
            className="proj-container techship"
            xs={12}
            sm={12}
            md={6}
            lg={6}
            xl={6}
          />
          <Col
            onClick={() => {
              window.open("http://scouttax.com/", "_blank");
            }}
            className="proj-container scout-tax"
            xs={12}
            sm={12}
            md={6}
            lg={6}
            xl={6}
          />
        </Row>
        <Row>
          <Col
            onClick={() => {
              window.open("https://scoutfinancing.com/", "_blank");
            }}
            className="proj-container scout-financing"
            xs={12}
            sm={12}
            md={6}
            lg={6}
            xl={6}
          />
          <Col
            onClick={() => {
              window.open("https://scoutfi.com/", "_blank");
            }}
            className="proj-container scout-financial"
            xs={12}
            sm={12}
            md={6}
            lg={6}
            xl={6}
          />
        </Row>
      </Container>
    </>
  );
};

export default Projects;
