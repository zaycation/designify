import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

const Pricing = () => {
  return (
    <>
      <Container>
        <Row className="my-3">
          <Col xs={12} sm={12} md={4} lg={4} xl={4}>
            <br />
            <div className="price-bdr">
              <h2 className="text-center">$99.00</h2>
              <h4 className="text-center">The Starter Package</h4>
              <h6>Includes:</h6>
              <ul>
                <li>Single page app (frontend only)</li>
                <li>Up to (5) total sections</li>
                <li>Less than 4 weeks development time</li>
                <li>
                  Long term help and assistance with updates and how to host/buy
                  domains
                </li>
              </ul>
              <Button block variant="outline-dark">
                Get Started
              </Button>
              <Button block variant="dark">View Examples</Button>
            </div>
          </Col>
          <Col xs={12} sm={12} md={4} lg={4} xl={4}>
            <br />
            <div className="price-bdr">
              <h2 className="text-center">$299.00</h2>
              <h4 className="text-center">The Premium Package</h4>
              <h6>Includes:</h6>
              <ul>
                <li>Modern single page app (frontend only)</li>
                <li>Up to (5) separate pages on the website</li>
                <li>Less than 3 month development time</li>
                <li>
                  Long term help and assistance with updates and how to host/buy
                  domains
                </li>
              </ul>
              <Button block variant="outline-dark">
                Get Started
              </Button>
              <Button block variant="dark">View Examples</Button>
            </div>
          </Col>
          <Col xs={12} sm={12} md={4} lg={4} xl={4}>
            <br />
            <div className="price-bdr">
              <h2 className="text-center">$499.00</h2>
              <h4 className="text-center">The Elite Package</h4>
              <h6>Includes:</h6>
              <ul>
                <li>Full-stack MERN application</li>
                <li>3-6 month build time</li>
                <li>
                  Complex app logic like connecting to APIs, saving data to the
                  backend, etc
                </li>
                <li>
                  Long term help and assistance with updates and how to host/buy
                  domains
                </li>
              </ul>
              <Button block variant="outline-dark">
                Get Started
              </Button>
              <Button block variant="dark">View Examples</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Pricing;
