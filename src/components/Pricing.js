import React from "react";
import Flip from "react-reveal/Flip";
import Slide from "react-reveal/Slide";
import { HashLink } from "react-router-hash-link";
import { Container, Row, Col, Button } from "react-bootstrap";

const Pricing = () => {
  return (
    <>
      <Container>
        <Row className="my-3">
          <Col xs={12} sm={12} md={4} lg={4} xl={4}>
            <br />
            <Slide left>
              <div className="price-bdr">
                <h2 className="text-center">$99.00</h2>
                <h4 className="text-center">The Starter Package</h4>
                <h6>Includes:</h6>
                <ul>
                  <li>Single page app (frontend only)</li>
                  <li>Up to (5) total sections</li>
                  <li>Less than 4 weeks development time</li>
                  <li>
                    Long term help and assistance with updates and how to
                    host/buy domains*
                  </li>
                </ul>
                <HashLink to="/form">
                  <Button block variant="outline-dark">
                    Get Started
                  </Button>
                </HashLink>
                <br />
                <HashLink to="/examples">
                  <Button block variant="dark">
                    View Examples
                  </Button>
                </HashLink>
              </div>
            </Slide>
          </Col>
          <Col xs={12} sm={12} md={4} lg={4} xl={4}>
            <br />
            <Slide top>
              <div className="price-bdr">
                <h2 className="text-center">$299.00</h2>
                <h4 className="text-center">The Premium Package</h4>
                <h6>Includes:</h6>
                <ul>
                  <li>Modern single page app (frontend only)</li>
                  <li>Up to (5) separate pages on the website</li>
                  <li>Less than 3 month development time</li>
                  <li>
                    Long term help and assistance with updates and how to
                    host/buy domains*
                  </li>
                </ul>
                <HashLink to="/form">
                  <Button block variant="outline-dark">
                    Get Started
                  </Button>
                </HashLink>
                <br />
                <HashLink to="/examples">
                  <Button block variant="dark">
                    View Examples
                  </Button>
                </HashLink>
              </div>
            </Slide>
          </Col>
          <Col xs={12} sm={12} md={4} lg={4} xl={4}>
            <br />
            <Slide right>
              <div className="price-bdr">
                <h2 className="text-center">$499.00</h2>
                <h4 className="text-center">The Elite Package</h4>
                <h6>Includes:</h6>
                <ul>
                  <li>Full-stack MERN application</li>
                  <li>3-6 month build time</li>
                  <li>
                    Complex app logic like connecting to APIs, saving data to
                    the backend, etc
                  </li>
                  <li>
                    Long term help and assistance with updates and how to
                    host/buy domains*
                  </li>
                </ul>
                <HashLink to="/form">
                  <Button block variant="outline-dark">
                    Get Started
                  </Button>
                </HashLink>
                <br />
                <HashLink to="/examples">
                  <Button block variant="dark">
                    View Examples
                  </Button>
                </HashLink>
              </div>
            </Slide>
          </Col>
        </Row>
        <Row>
          <Col>
            <Flip top>
              <footer className="page-footer font-small text-center px-3 py-3">
                * Long term consulting and general maintenance will be provided.
                This means that if there is a breaking update to any tech,
                Designify will update and fix it for free. Please note that any
                additional updates, new features, etc. can be provided at an
                additional charge. The prices above are general pricing
                guidelines based on what is included within the description.
                Additional services will require an additional corresponding
                charge
              </footer>
            </Flip>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Pricing;
