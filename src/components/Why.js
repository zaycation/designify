import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

const Why = () => {
  return (
    <>
      <Container>
        <Row>
          <Col className="text-center py-5">
            <h4>
              Every business <strong className="bold-txt">needs </strong> a website
            </h4>
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={12} md={4} lg={4} xl={4}>
            <div></div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Why;
