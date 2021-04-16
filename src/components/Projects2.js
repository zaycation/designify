import React from "react";
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
  SiGithub,
} from "react-icons/si";
import Slide from "react-reveal/Slide";
import { Container, Row, Col, Button } from "react-bootstrap";

const Projects2 = () => {
  return (
    <>
      <Container>
        <Row>
          <Col
            className="proj-container2 scout-industries"
            xs={{ span: 12, order: 2 }}
            sm={{ span: 12, order: 2 }}
            md={{ span: 6, order: 1 }}
            lg={{ span: 6, order: 1 }}
            xl={{ span: 6, order: 1 }}
            onClick={() => {
              window.open("https://scoutindustries.com", "_blank");
            }}
          />
          <Col
            xs={{ span: 12, order: 1 }}
            sm={{ span: 12, order: 1 }}
            md={{ span: 6, order: 2 }}
            lg={{ span: 6, order: 2 }}
            xl={{ span: 6, order: 2 }}
          >
            <Slide right>
              <div className="text-center my-5 px-3">
                <h4 className="orange-txt font-weight-bold">
                  Scout Industries
                </h4>
                <p>
                  Custom website built to highlight all subsidiaries of the
                  parent company: Scout Industries. The main goal here was to
                  make an app similar to linktree to link the existing websites.
                </p>
                <p className="text-muted">Technologies used:</p>
                <div className="d-flex flex-row justify-content-center align-items-center">
                  <SiReact
                    size={26}
                    color="#ef8e38"
                    className="mr-1"
                    onClick={() => {
                      window.open("https://reactjs.org/", "_blank");
                    }}
                  />
                  <SiBootstrap
                    size={26}
                    color="#ef8e38"
                    className="mr-1"
                    onClick={() => {
                      window.open("https://getbootstrap.com/", "_blank");
                    }}
                  />
                  <SiVisualstudiocode
                    size={26}
                    color="#ef8e38"
                    className="mr-1"
                    onClick={() => {
                      window.open("https://code.visualstudio.com/", "_blank");
                    }}
                  />
                  <SiGit
                    size={26}
                    color="#ef8e38"
                    className="mr-1"
                    onClick={() => {
                      window.open("https://git-scm.com/", "_blank");
                    }}
                  />
                  <SiNginx
                    size={26}
                    color="#ef8e38"
                    className="mr-1"
                    onClick={() => {
                      window.open("https://nginx.com/", "_blank");
                    }}
                  />
                  <SiAmazonaws
                    size={26}
                    color="#ef8e38"
                    className="mr-1"
                    onClick={() => {
                      window.open("https://aws.amazon.com/", "_blank");
                    }}
                  />
                </div>
                <Button
                  block
                  className="my-3 live-btn"
                  variant="outline-secondary"
                  onClick={() => {
                    window.open("https://scoutindustries.com", "_blank");
                  }}
                >
                  View Live
                </Button>
              </div>
            </Slide>
          </Col>
        </Row>
        <Row>
          <Col
            xs={{ span: 12, order: 3 }}
            sm={{ span: 12, order: 3 }}
            md={{ span: 6, order: 4 }}
            lg={{ span: 6, order: 4 }}
            xl={{ span: 6, order: 4 }}
          >
            <Slide left>
              <div className="text-center my-5 px-3">
                <h4 className="orange-txt font-weight-bold">Scout Insurance</h4>
                <p>
                  Elegantly designed web app created to generate insurance leads
                  for our partners. The main goal of this project was to obtain
                  potential customer info and import it to Scout's CRM.
                </p>
                <p className="text-muted">Technologies used:</p>
                <div className="d-flex flex-row justify-content-center align-items-center">
                  <SiReact
                    size={26}
                    color="#ef8e38"
                    className="mr-1"
                    onClick={() => {
                      window.open("https://reactjs.org/", "_blank");
                    }}
                  />
                  <SiBootstrap
                    size={26}
                    color="#ef8e38"
                    className="mr-1"
                    onClick={() => {
                      window.open("https://getbootstrap.com/", "_blank");
                    }}
                  />
                  <SiVisualstudiocode
                    size={26}
                    color="#ef8e38"
                    className="mr-1"
                    onClick={() => {
                      window.open("https://code.visualstudio.com/", "_blank");
                    }}
                  />
                  <SiReactrouter
                    size={26}
                    color="#ef8e38"
                    className="mr-1"
                    onClick={() => {
                      window.open("https://reactrouter.com/", "_blank");
                    }}
                  />
                  <SiNginx
                    size={26}
                    color="#ef8e38"
                    className="mr-1"
                    onClick={() => {
                      window.open("https://nginx.com/", "_blank");
                    }}
                  />
                  <SiAmazonaws
                    size={26}
                    color="#ef8e38"
                    className="mr-1"
                    onClick={() => {
                      window.open("https://aws.amazon.com/", "_blank");
                    }}
                  />

                  <SiGit
                    size={26}
                    color="#ef8e38"
                    className="mr-1"
                    onClick={() => {
                      window.open("https://git-scm.com/", "_blank");
                    }}
                  />
                  <SiNodeDotJs
                    size={26}
                    color="#ef8e38"
                    className="mr-1"
                    onClick={() => {
                      window.open("https://nodejs.org/en/", "_blank");
                    }}
                  />
                  <SiNodemon
                    size={26}
                    color="#ef8e38"
                    className="mr-1"
                    onClick={() => {
                      window.open("https://nodemon.io/", "_blank");
                    }}
                  />
                  <SiMongodb
                    size={26}
                    color="#ef8e38"
                    className="mr-1"
                    onClick={() => {
                      window.open("https://www.mongodb.com/", "_blank");
                    }}
                  />
                </div>
                <Button
                  block
                  className="my-3 live-btn"
                  variant="outline-secondary"
                  onClick={() => {
                    window.open("http://scoutcovered.com/", "_blank");
                  }}
                >
                  View Live
                </Button>
              </div>
            </Slide>
          </Col>
          <Col
            className="proj-container2 scoutins"
            xs={{ span: 12, order: 3 }}
            sm={{ span: 12, order: 3 }}
            md={{ span: 6, order: 4 }}
            lg={{ span: 6, order: 4 }}
            xl={{ span: 6, order: 4 }}
            onClick={() => {
              window.open("http://scoutcovered.com/", "_blank");
            }}
          />
        </Row>
        <Row>
          <Col
            className="proj-container2 augury"
            xs={{ span: 12, order: 6 }}
            sm={{ span: 12, order: 6 }}
            md={{ span: 6, order: 5 }}
            lg={{ span: 6, order: 5 }}
            xl={{ span: 6, order: 5 }}
            onClick={() => {
              window.open("https://augurysalon.netlify.app/", "_blank");
            }}
          />
          <Col
            xs={{ span: 12, order: 5 }}
            sm={{ span: 12, order: 5 }}
            md={{ span: 6, order: 6 }}
            lg={{ span: 6, order: 6 }}
            xl={{ span: 6, order: 6 }}
          >
            <Slide right>
              <div className="text-center my-5 px-3">
                <h4 className="orange-txt font-weight-bold">Augury Salon</h4>
                <p>
                  Augury went from a booming local business with no tech, to a
                  phenomenal online presence with e-commerce solutions that help
                  customers create appointments and understand more about the
                  business. This site is currently still a work in progress.
                </p>
                <p className="text-muted">Technologies used:</p>
                <div className="d-flex flex-row justify-content-center align-items-center">
                  <SiReact
                    size={26}
                    color="#ef8e38"
                    className="mr-1"
                    onClick={() => {
                      window.open("https://reactjs.org/", "_blank");
                    }}
                  />
                  <SiBootstrap
                    size={26}
                    color="#ef8e38"
                    className="mr-1"
                    onClick={() => {
                      window.open("https://getbootstrap.com/", "_blank");
                    }}
                  />
                  <SiVisualstudiocode
                    size={26}
                    color="#ef8e38"
                    className="mr-1"
                    onClick={() => {
                      window.open("https://code.visualstudio.com/", "_blank");
                    }}
                  />
                  <SiReactrouter
                    size={26}
                    color="#ef8e38"
                    className="mr-1"
                    onClick={() => {
                      window.open("https://reactrouter.com/", "_blank");
                    }}
                  />
                  <SiGit
                    size={26}
                    color="#ef8e38"
                    className="mr-1"
                    onClick={() => {
                      window.open("https://git-scm.com/", "_blank");
                    }}
                  />
                  <SiNetlify
                    size={26}
                    color="#ef8e38"
                    className="mr-1"
                    onClick={() => {
                      window.open("https://www.netlify.com/", "_blank");
                    }}
                  />
                </div>
                <Button
                  block
                  className="my-3 live-btn"
                  variant="outline-secondary"
                  onClick={() => {
                    window.open("https://augurysalon.netlify.app/", "_blank");
                  }}
                >
                  View Live
                </Button>
              </div>
            </Slide>
          </Col>
        </Row>
        <Row>
          <Col
            xs={{ span: 12, order: 7 }}
            sm={{ span: 12, order: 7 }}
            md={{ span: 6, order: 7 }}
            lg={{ span: 6, order: 7 }}
            xl={{ span: 6, order: 7 }}
          >
            <Slide left>
              <div className="text-center my-5 px-3">
                <h4 className="orange-txt font-weight-bold">
                  Raneem Saad Photography
                </h4>
                <p>
                  Raneem's website had attempts to aim at beautiful
                  eye-capturing design to help show off how amazing her
                  photography skills are! The primary goal was toe stablish an
                  online presence and ease booking for clients. This site is
                  currently still a work in progress.
                </p>
                <p className="text-muted">Technologies used:</p>
                <div className="d-flex flex-row justify-content-center align-items-center">
                  <SiReact
                    size={26}
                    color="#ef8e38"
                    className="mr-1"
                    onClick={() => {
                      window.open("https://reactjs.org/", "_blank");
                    }}
                  />
                  <SiBootstrap
                    size={26}
                    color="#ef8e38"
                    className="mr-1"
                    onClick={() => {
                      window.open("https://getbootstrap.com/", "_blank");
                    }}
                  />
                  <SiVisualstudiocode
                    size={26}
                    color="#ef8e38"
                    className="mr-1"
                    onClick={() => {
                      window.open("https://code.visualstudio.com/", "_blank");
                    }}
                  />
                  <SiReactrouter
                    size={26}
                    color="#ef8e38"
                    className="mr-1"
                    onClick={() => {
                      window.open("https://reactrouter.com/", "_blank");
                    }}
                  />
                  <SiGit
                    size={26}
                    color="#ef8e38"
                    className="mr-1"
                    onClick={() => {
                      window.open("https://git-scm.com/", "_blank");
                    }}
                  />
                  <SiNetlify
                    size={26}
                    color="#ef8e38"
                    className="mr-1"
                    onClick={() => {
                      window.open("https://www.netlify.com/", "_blank");
                    }}
                  />
                </div>
                <Button
                  block
                  className="my-3 live-btn"
                  variant="outline-secondary"
                  onClick={() => {
                    window.open("https://raneemsaad.netlify.app/", "_blank");
                  }}
                >
                  View Live
                </Button>
              </div>
            </Slide>
          </Col>
          <Col
            className="proj-container2 raneem"
            xs={{ span: 12, order: 8 }}
            sm={{ span: 12, order: 8 }}
            md={{ span: 6, order: 8 }}
            lg={{ span: 6, order: 8 }}
            xl={{ span: 6, order: 8 }}
            onClick={() => {
              window.open("https://raneemsaad.netlify.app/", "_blank");
            }}
          />
        </Row>
        <Row>
          <Col
            className="proj-container2 techship"
            xs={{ span: 12, order: 10 }}
            sm={{ span: 12, order: 10 }}
            md={{ span: 6, order: 9 }}
            lg={{ span: 6, order: 9 }}
            xl={{ span: 6, order: 9 }}
            onClick={() => {
              window.open("https://techship-uidemo.netlify.app/", "_blank");
            }}
          />
          <Col
            xs={{ span: 12, order: 9 }}
            sm={{ span: 12, order: 9 }}
            md={{ span: 6, order: 10 }}
            lg={{ span: 6, order: 10 }}
            xl={{ span: 6, order: 10 }}
          >
            <Slide right>
              <div className="text-center my-5 px-3">
                <h4 className="orange-txt font-weight-bold">Tech-Ship</h4>
                <p>
                  Tech-Ship is still currently a work in progress. Tech-Ship is
                  a NPO dedicated to mentoring youth on tech! We are currently
                  still working on building their web app.
                </p>
                <p className="text-muted">Technologies used:</p>
                <div className="d-flex flex-row justify-content-center align-items-center">
                  <SiReact
                    size={26}
                    color="#ef8e38"
                    className="mr-1"
                    onClick={() => {
                      window.open("https://reactjs.org/", "_blank");
                    }}
                  />
                  <SiBootstrap
                    size={26}
                    color="#ef8e38"
                    className="mr-1"
                    onClick={() => {
                      window.open("https://getbootstrap.com/", "_blank");
                    }}
                  />
                  <SiVisualstudiocode
                    size={26}
                    color="#ef8e38"
                    className="mr-1"
                    onClick={() => {
                      window.open("https://code.visualstudio.com/", "_blank");
                    }}
                  />
                  <SiReactrouter
                    size={26}
                    color="#ef8e38"
                    className="mr-1"
                    onClick={() => {
                      window.open("https://reactrouter.com/", "_blank");
                    }}
                  />
                  <SiGit
                    size={26}
                    color="#ef8e38"
                    className="mr-1"
                    onClick={() => {
                      window.open("https://git-scm.com/", "_blank");
                    }}
                  />
                  <SiNetlify
                    size={26}
                    color="#ef8e38"
                    className="mr-1"
                    onClick={() => {
                      window.open("https://www.netlify.com/", "_blank");
                    }}
                  />
                </div>
                <Button
                  block
                  className="my-3 live-btn"
                  variant="outline-secondary"
                  onClick={() => {
                    window.open(
                      "https://techship-uidemo.netlify.app/",
                      "_blank"
                    );
                  }}
                >
                  View Live
                </Button>
              </div>
            </Slide>
          </Col>
        </Row>
        <Row>
          <Col
            xs={{ span: 12, order: 11 }}
            sm={{ span: 12, order: 11 }}
            md={{ span: 6, order: 11 }}
            lg={{ span: 6, order: 11 }}
            xl={{ span: 6, order: 11 }}
          >
            <Slide left>
              <div className="text-center my-5 px-3">
                <h4 className="orange-txt font-weight-bold">Scout Tax</h4>
                <p>
                  This app was meant to appeal to majority of customers
                  (specifically young ones) and educate them on Scout's tax
                  services. Customers can fill out a free consultation form to
                  get contacted from Scout.
                </p>
                <p className="text-muted">Technologies used:</p>
                <div className="d-flex flex-row justify-content-center align-items-center">
                  <SiReact
                    size={26}
                    color="#ef8e38"
                    className="mr-1"
                    onClick={() => {
                      window.open("https://reactjs.org/", "_blank");
                    }}
                  />
                  <SiBootstrap
                    size={26}
                    color="#ef8e38"
                    className="mr-1"
                    onClick={() => {
                      window.open("https://getbootstrap.com/", "_blank");
                    }}
                  />
                  <SiVisualstudiocode
                    size={26}
                    color="#ef8e38"
                    className="mr-1"
                    onClick={() => {
                      window.open("https://code.visualstudio.com/", "_blank");
                    }}
                  />
                  <SiReactrouter
                    size={26}
                    color="#ef8e38"
                    className="mr-1"
                    onClick={() => {
                      window.open("https://reactrouter.com/", "_blank");
                    }}
                  />
                  <SiNginx
                    size={26}
                    color="#ef8e38"
                    className="mr-1"
                    onClick={() => {
                      window.open("https://nginx.com/", "_blank");
                    }}
                  />
                  <SiAmazonaws
                    size={26}
                    color="#ef8e38"
                    className="mr-1"
                    onClick={() => {
                      window.open("https://aws.amazon.com/", "_blank");
                    }}
                  />

                  <SiGit
                    size={26}
                    color="#ef8e38"
                    className="mr-1"
                    onClick={() => {
                      window.open("https://git-scm.com/", "_blank");
                    }}
                  />
                  <SiNodeDotJs
                    size={26}
                    color="#ef8e38"
                    className="mr-1"
                    onClick={() => {
                      window.open("https://nodejs.org/en/", "_blank");
                    }}
                  />
                  <SiNodemon
                    size={26}
                    color="#ef8e38"
                    className="mr-1"
                    onClick={() => {
                      window.open("https://nodemon.io/", "_blank");
                    }}
                  />
                  <SiMongodb
                    size={26}
                    color="#ef8e38"
                    className="mr-1"
                    onClick={() => {
                      window.open("https://www.mongodb.com/", "_blank");
                    }}
                  />
                </div>
                <Button
                  block
                  className="my-3 live-btn"
                  variant="outline-secondary"
                  onClick={() => {
                    window.open("https://scouttax.com/", "_blank");
                  }}
                >
                  View Live
                </Button>
              </div>
            </Slide>
          </Col>
          <Col
            className="proj-container2 scout-tax"
            xs={{ span: 12, order: 12 }}
            sm={{ span: 12, order: 12 }}
            md={{ span: 6, order: 12 }}
            lg={{ span: 6, order: 12 }}
            xl={{ span: 6, order: 12 }}
            onClick={() => {
              window.open("https://scouttax.com/", "_blank");
            }}
          />
        </Row>
        <Row>
          <Col
            xs={{ span: 12, order: 1 }}
            sm={{ span: 12, order: 1 }}
            md={{ span: 6, order: 2 }}
            lg={{ span: 6, order: 2 }}
            xl={{ span: 6, order: 2 }}
          >
            <Slide right>
              <div className="text-center my-5 px-3">
                <h4 className="orange-txt font-weight-bold">Scout Financing</h4>
                <p>
                  This site is intended to market towards the Southern
                  California real estate market. It helps potential clients fill
                  out a form for a consultation regarding lending and better
                  understand what the Financing side of Scout has to offer.
                </p>
                <p className="text-muted">Technologies used:</p>
                <div className="d-flex flex-row justify-content-center align-items-center">
                  <SiReact
                    size={26}
                    color="#ef8e38"
                    className="mr-1"
                    onClick={() => {
                      window.open("https://reactjs.org/", "_blank");
                    }}
                  />
                  <SiBootstrap
                    size={26}
                    color="#ef8e38"
                    className="mr-1"
                    onClick={() => {
                      window.open("https://getbootstrap.com/", "_blank");
                    }}
                  />
                  <SiVisualstudiocode
                    size={26}
                    color="#ef8e38"
                    className="mr-1"
                    onClick={() => {
                      window.open("https://code.visualstudio.com/", "_blank");
                    }}
                  />
                  <SiReactrouter
                    size={26}
                    color="#ef8e38"
                    className="mr-1"
                    onClick={() => {
                      window.open("https://reactrouter.com/", "_blank");
                    }}
                  />
                  <SiNginx
                    size={26}
                    color="#ef8e38"
                    className="mr-1"
                    onClick={() => {
                      window.open("https://nginx.com/", "_blank");
                    }}
                  />
                  <SiAmazonaws
                    size={26}
                    color="#ef8e38"
                    className="mr-1"
                    onClick={() => {
                      window.open("https://aws.amazon.com/", "_blank");
                    }}
                  />

                  <SiGit
                    size={26}
                    color="#ef8e38"
                    className="mr-1"
                    onClick={() => {
                      window.open("https://git-scm.com/", "_blank");
                    }}
                  />
                  <SiNodeDotJs
                    size={26}
                    color="#ef8e38"
                    className="mr-1"
                    onClick={() => {
                      window.open("https://nodejs.org/en/", "_blank");
                    }}
                  />
                  <SiNodemon
                    size={26}
                    color="#ef8e38"
                    className="mr-1"
                    onClick={() => {
                      window.open("https://nodemon.io/", "_blank");
                    }}
                  />
                  <SiMongodb
                    size={26}
                    color="#ef8e38"
                    className="mr-1"
                    onClick={() => {
                      window.open("https://www.mongodb.com/", "_blank");
                    }}
                  />
                </div>
                <Button
                  block
                  className="my-3 live-btn"
                  variant="outline-secondary"
                  onClick={() => {
                    window.open("https://scoutfinancing.com/", "_blank");
                  }}
                >
                  View Live
                </Button>
              </div>
            </Slide>
          </Col>
          <Col
            className="proj-container2 scout-financing"
            xs={{ span: 12, order: 2 }}
            sm={{ span: 12, order: 2 }}
            md={{ span: 6, order: 1 }}
            lg={{ span: 6, order: 1 }}
            xl={{ span: 6, order: 1 }}
            onClick={() => {
              window.open("https://scoutfinancing.com/", "_blank");
            }}
          />
        </Row>
        <Row>
          <Col
            xs={{ span: 12, order: 16 }}
            sm={{ span: 12, order: 16 }}
            md={{ span: 6, order: 15 }}
            lg={{ span: 6, order: 15 }}
            xl={{ span: 6, order: 15 }}
          >
            <Slide left>
              <div className="text-center my-5 px-3">
                <h4 className="orange-txt font-weight-bold">
                  Scout Financial Website
                </h4>
                <p>
                  This was our first professional project. This project was
                  meant to improve Scout's online presence and allow potential
                  customers to fill out a consultation form.
                </p>
                <p className="text-muted">Technologies used:</p>
                <div className="d-flex flex-row justify-content-center align-items-center">
                  <SiReact
                    size={26}
                    color="#ef8e38"
                    className="mr-1"
                    onClick={() => {
                      window.open("https://reactjs.org/", "_blank");
                    }}
                  />
                  <SiBootstrap
                    size={26}
                    color="#ef8e38"
                    className="mr-1"
                    onClick={() => {
                      window.open("https://getbootstrap.com/", "_blank");
                    }}
                  />
                  <SiVisualstudiocode
                    size={26}
                    color="#ef8e38"
                    className="mr-1"
                    onClick={() => {
                      window.open("https://code.visualstudio.com/", "_blank");
                    }}
                  />
                  <SiReactrouter
                    size={26}
                    color="#ef8e38"
                    className="mr-1"
                    onClick={() => {
                      window.open("https://reactrouter.com/", "_blank");
                    }}
                  />
                  <SiNginx
                    size={26}
                    color="#ef8e38"
                    className="mr-1"
                    onClick={() => {
                      window.open("https://nginx.com/", "_blank");
                    }}
                  />
                  <SiAmazonaws
                    size={26}
                    color="#ef8e38"
                    className="mr-1"
                    onClick={() => {
                      window.open("https://aws.amazon.com/", "_blank");
                    }}
                  />

                  <SiGit
                    size={26}
                    color="#ef8e38"
                    className="mr-1"
                    onClick={() => {
                      window.open("https://git-scm.com/", "_blank");
                    }}
                  />
                  <SiNodeDotJs
                    size={26}
                    color="#ef8e38"
                    className="mr-1"
                    onClick={() => {
                      window.open("https://nodejs.org/en/", "_blank");
                    }}
                  />
                  <SiNodemon
                    size={26}
                    color="#ef8e38"
                    className="mr-1"
                    onClick={() => {
                      window.open("https://nodemon.io/", "_blank");
                    }}
                  />
                  <SiMongodb
                    size={26}
                    color="#ef8e38"
                    className="mr-1"
                    onClick={() => {
                      window.open("https://www.mongodb.com/", "_blank");
                    }}
                  />
                </div>
                <Button
                  block
                  className="my-3 live-btn"
                  variant="outline-secondary"
                  onClick={() => {
                    window.open("https://scoutfi.com/", "_blank");
                  }}
                >
                  View Live
                </Button>
              </div>
            </Slide>
          </Col>
          <Col
            className="proj-container2 scout-financial"
            xs={{ span: 12, order: 15 }}
            sm={{ span: 12, order: 15 }}
            md={{ span: 6, order: 16 }}
            lg={{ span: 6, order: 16 }}
            xl={{ span: 6, order: 16 }}
            onClick={() => {
              window.open("https://scoutfi.com/", "_blank");
            }}
          />
        </Row>
        <Row>
          <Col className="text-center my-5">
            <h6>Want to view additional projects? Check out our github:</h6>
            <SiGithub
              size={50}
              color="#ef8e38"
              className="git-btn"
              onClick={() => {
                window.open("https://github.com/zaycation/", "_blank");
              }}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Projects2;
