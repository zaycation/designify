import React from "react";
import Bounce from "react-reveal/Bounce";
import { HashLink } from "react-router-hash-link";
import { Container, Row, Col, Button } from "react-bootstrap";

const Header = () => {
  return (
    <>
      <Container fluid={true}>
        <Row>
          <div className="hdr-img">
            <Col>
              <Bounce top cascade>
                <div className="hdr-text">
                  <p className="text-white text-center">
                    Affordable Websites <strong>FOR YOU </strong>starting at{" "}
                    <strong>$99</strong>
                  </p>
                  <h4 className="text-white text-center">
                    Open up your business to new possibilities
                  </h4>
                  <hr className="divider my-4" />
                  <div className="text-center">
                    <Button className="hdr-btns" variant="outline-light">
                      Get Started
                    </Button>{" "}
                    <HashLink to="/services">
                      <Button className="hdr-btns" variant="outline-light">
                        Learn More
                      </Button>{" "}
                    </HashLink>
                  </div>
                </div>
              </Bounce>
            </Col>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default Header;
