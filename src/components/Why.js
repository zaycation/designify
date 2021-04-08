import React from "react";
import Slide from "react-reveal/Slide";
import { Container, Row, Col } from "react-bootstrap";
import { FcSearch, FcBearish, FcMultipleDevices } from "react-icons/fc";

const Why = () => {
  return (
    <>
      <Container className="text-center">
        <Row>
          <Col>
            <Slide top>
              <div className="text-center py-5">
                <h4>
                  Every business <strong className="bold-txt">needs </strong> a
                  website
                </h4>
              </div>
            </Slide>
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={12} md={4} lg={4} xl={4}>
            <Slide left>
              <a
                href="https://review42.com/resources/what-percentage-of-small-businesses-have-a-website/"
                className="why-sections"
                rel="noopener noreferrer"
                target="_blank"
              >
                <div>
                  <FcMultipleDevices size={42} className="my-3" />
                  <p>
                    In the US and Canada, 88.5% of the population are daily
                    internet users
                  </p>
                </div>
              </a>
            </Slide>
          </Col>
          <Col xs={12} sm={12} md={4} lg={4} xl={4}>
            <Slide bottom>
              <a
                href="https://review42.com/resources/what-percentage-of-small-businesses-have-a-website/"
                className="why-sections"
                rel="noopener noreferrer"
                target="_blank"
              >
                <div>
                  <FcSearch size={42} className="my-3" />
                  <p>
                    70% of people research a company online before visiting it
                    or making a purchase
                  </p>
                </div>
              </a>
            </Slide>
          </Col>
          <Col xs={12} sm={12} md={4} lg={4} xl={4}>
            <Slide right>
              <a
                href="https://review42.com/resources/what-percentage-of-small-businesses-have-a-website/"
                className="why-sections"
                rel="noopener noreferrer"
                target="_blank"
              >
                <div>
                  <FcBearish size={42} className="my-3" />
                  <p>
                    Around 80% of potential customers will be lost due to
                    businesses without a website
                  </p>
                </div>
              </a>
            </Slide>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Why;
