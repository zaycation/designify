import React from "react";
import Flip from "react-reveal/Flip";
import Slide from "react-reveal/Slide";
import { FcBullish, FcVoicePresentation } from "react-icons/fc";
import { FaJs, FaReact, FaNode, FaCss3Alt, FaAws } from "react-icons/fa";
import { Container, Row, Col } from "react-bootstrap";

const About = () => {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <Flip bottom>
              <div className="py-5 text-center">
                <h4>
                  Why should <strong className="bold-txt">you </strong>work with
                  <strong className="bold-txt"> us?</strong>
                </h4>
              </div>
            </Flip>
          </Col>
        </Row>
        <Row>
          <Col className="bg-1" xs={12} sm={12} md={6} lg={6} xl={6}></Col>
          <Col
            className="abt-txt text-left my-5"
            xs={12}
            sm={12}
            md={6}
            lg={6}
            xl={6}
          >
            <Slide right>
              <p>
                Here at Designify, we use the newest technologies to always
                ensure our apps look modern and remain up to date
              </p>
              <div>
                <a
                  href="https://www.javascript.com/"
                  rel="noopener noreferrer"
                  className="tech-icons"
                  target="_blank"
                >
                  <FaJs className="mr-1" size={30} />
                </a>
                <a
                  href="https://www.w3schools.com/css/"
                  rel="noopener noreferrer"
                  className="tech-icons"
                  target="_blank"
                >
                  <FaCss3Alt className="mr-1" size={30} />
                </a>
                <a
                  href="https://reactjs.org/"
                  rel="noopener noreferrer"
                  className="tech-icons"
                  target="_blank"
                >
                  <FaReact className="mr-1" size={30} />
                </a>
                <a
                  href="https://nodejs.org/en/"
                  rel="noopener noreferrer"
                  className="tech-icons"
                  target="_blank"
                >
                  <FaNode className="mr-1" size={30} />
                </a>
                <a
                  href="https://aws.amazon.com/"
                  rel="noopener noreferrer"
                  className="tech-icons"
                  target="_blank"
                >
                  <FaAws className="mr-1" size={30} />
                </a>
              </div>
            </Slide>
          </Col>
        </Row>
        <Row>
          <Col
            className="abt-txt text-right my-5"
            xs={{ span: 12, order: 2 }}
            sm={{ span: 12, order: 2 }}
            md={{ span: 6, order: 1 }}
            lg={{ span: 6, order: 1 }}
            xl={{ span: 6, order: 1 }}
          >
            <Slide left>
              <div className="text-center">
                <FcVoicePresentation size={56} />
              </div>
              <p>
                When you work with us, you get one on one experience with a
                professional software engineer who will tailor your site
                precisely to your goals
              </p>
            </Slide>
          </Col>
          <Col
            className="bg-2"
            xs={{ span: 12, order: 1 }}
            sm={{ span: 12, order: 1 }}
            md={{ span: 6, order: 2 }}
            lg={{ span: 6, order: 2 }}
            xl={{ span: 6, order: 2 }}
          ></Col>
        </Row>
        <Row>
          <Col
            className="bg-3"
            xs={{ span: 12, order: 3 }}
            sm={{ span: 12, order: 3 }}
            md={{ span: 6, order: 3 }}
            lg={{ span: 6, order: 3 }}
            xl={{ span: 6, order: 3 }}
          ></Col>
          <Col
            className="abt-txt text-left my-5"
            xs={{ span: 12, order: 4 }}
            sm={{ span: 12, order: 4 }}
            md={{ span: 6, order: 4 }}
            lg={{ span: 6, order: 4 }}
            xl={{ span: 6, order: 4 }}
          >
            <Slide right>
              <div className="text-center">
                <FcBullish size={56} />
              </div>
              <p>
                Stop missing out on thousands of potential clients. Improve your
                online presence and business trustworthiness by working with us
                today!
              </p>
            </Slide>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default About;
