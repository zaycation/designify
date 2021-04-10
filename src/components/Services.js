import React from "react";
import { HashLink } from "react-router-hash-link";
import { Container, Row, Col, Button } from "react-bootstrap";
import {
  FcCollaboration,
  FcMultipleDevices,
  FcSearch,
  FcRules,
  FcEditImage,
  FcPaid,
} from "react-icons/fc";

const Services = () => {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <div className="my-5 text-center">
              <h2 className="bold-txt">Services We Provide</h2>
            </div>
            <div className="my-5 text-center">
              <HashLink className="mr-5" to="/form">
                <Button className="services-btns" variant="outline-dark">
                  Get Started
                </Button>
              </HashLink>
              <HashLink to="/form">
                <Button className="services-btns" variant="outline-dark">
                  View Pricing
                </Button>
              </HashLink>
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={12} md={6} lg={6} xl={6}>
            <div className="d-flex align-items-center justify-content-between">
              <h4>Brand Strategy and Development</h4>
              <FcCollaboration size={56} />
            </div>
            <p className="text-left">
              Customers develop an opinion of your brand within the first few
              seconds. Make the right impression. Your dream is our reality.
            </p>
          </Col>
          <Col xs={12} sm={12} md={6} lg={6} xl={6}>
            <div className="d-flex align-items-center justify-content-between">
              <h4>Web Design and Development</h4>
              <FcMultipleDevices size={56} />
            </div>
            <p>
              First impressions matter, especially online. Get more customers
              and make a lasting impression with a website that gets results.
            </p>
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={12} md={6} lg={6} xl={6}>
            <div className="d-flex align-items-center justify-content-between">
              <h4>Search Engine Optimization (SEO)</h4>
              <FcSearch size={56} />
            </div>
            <p>
              With the majority consumers searching for products or services
              online, your business' online presence matters more than ever.
            </p>
          </Col>
          <Col xs={12} sm={12} md={6} lg={6} xl={6}>
            <div className="d-flex align-items-center justify-content-between">
              <h4>Copywriting and Content Development</h4>
              <FcRules size={56} />
            </div>
            <p>
              Ensure your online presence speaks to your brand and goals. Our
              content writers understand good copy designed to activate
              customers.
            </p>
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={12} md={6} lg={6} xl={6}>
            <div className="d-flex align-items-center justify-content-between">
              <h4>Logo Design</h4>
              <FcEditImage size={56} />
            </div>
            <p>
              Need a custom logo designed? We design Logos that help brands
              succeed, and they look good while doing so!
            </p>
          </Col>
          <Col xs={12} sm={12} md={6} lg={6} xl={6}>
            <div className="d-flex align-items-center justify-content-between">
              <h4>E-commerce</h4>
              <FcPaid size={56} />
            </div>
            <p>
              Sell directly to your target customer base with ease. Our
              eCommerce solution helps potential customers find your product and
              purchase them online.
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Services;
