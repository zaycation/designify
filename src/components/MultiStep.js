import React, { useState } from "react";
import Swal from "sweetalert2";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  ProgressBar,
} from "react-bootstrap";
import emailjs from "emailjs-com";

import HomeNavbar from "../components/HomeNavbar";
import Footer from "../components/Footer";

import "../css/MultiStep.css";

const MultiStep = () => {
  // eslint-disable-next-line no-unused-vars

  const [count, setCount] = useState(1);
  //const [validated, setValidated] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phoneNum: "",
    bizName: "",
    typeBiz: "",
    bizPhone: "",
    bizSite: "",
    referral: "",
  });

  const updateForm = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const submitForm = () => {
    console.log(form);
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        denyButton: "btn btn-danger",
      },
      buttonsStyling: false,
    });

    swalWithBootstrapButtons
      .fire({
        title: `Thanks, ${form.name}!`,
        text: `We've received your request and will follow up with you shortly via a phone call.`,
        icon: "success",
        confirmButtonText: `Close`,
      })
      .then((result) => {
        if (result.isConfirmed) {
          window.open("/", "_self");
        }
      });

    /*
    var templateParams = {
      message: JSON.stringify(form),
    };

    emailjs
      .send(
        "service_r0ilvpo",
        "template_vk1p6im",
        templateParams,
        "user_h2oSDkzclTQzPqQoJ4mzeƒ"
      )
      .then(
        function (response) {
          console.log("SUCCESS!", response.status, response.text);
        },
        function (error) {
          console.log("FAILED...", error);
        }
      );
    */
  };

  return (
    <>
      <HomeNavbar />
      <Container className="my-3 main-cont">
        <Row>
          <Col sm={12} md={12} lg={12}>
            <h2>Consultation Form</h2>
          </Col>
          <Col sm={12} md={12} lg={12}>
            <Form noValidate onSubmit={submitForm} id="insform">
              {count === 1 ? (
                <>
                  <div>
                    <h6>Contact Information</h6>
                    <Form.Group>
                      <Form.Label>Full Name</Form.Label>
                      <Form.Control
                        required
                        type="text"
                        name="name"
                        onChange={updateForm}
                        value={form.name}
                        placeholder="John Stockton"
                      />
                    </Form.Group>
                    <Form.Group>
                      <Form.Label>Phone Number</Form.Label>
                      <Form.Control
                        required
                        type="text"
                        name="phoneNum"
                        onChange={updateForm}
                        value={form.phoneNum}
                        placeholder="(555) 555 - 5555"
                      />
                    </Form.Group>
                    <Form.Group>
                      <Form.Label>Email Address</Form.Label>
                      <Form.Control
                        required
                        type="email"
                        name="email"
                        onChange={updateForm}
                        value={form.email}
                        placeholder="jstock123@email.com"
                      />
                      <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                      </Form.Text>
                    </Form.Group>
                  </div>
                </>
              ) : null}
              {count === 2 ? (
                <>
                  <div>
                    <h6>Business Information</h6>
                    <Form.Group>
                      <Form.Label>Business Name</Form.Label>
                      <Form.Control
                        required
                        type="text"
                        name="bizName"
                        onChange={updateForm}
                        value={form.bizName}
                        placeholder="Amazon"
                      />
                    </Form.Group>
                    <Form.Group>
                      <Form.Label>
                        Does your business have a current website?
                      </Form.Label>
                      <Form.Control
                        required
                        type="text"
                        name="bizSite"
                        onChange={updateForm}
                        value={form.bizSite}
                        placeholder="www.amazon.com"
                      />
                    </Form.Group>
                    <Form.Group>
                      <Form.Label>Business Type/Industry</Form.Label>
                      <Form.Control
                        required
                        type="text"
                        name="typeBiz"
                        onChange={updateForm}
                        value={form.typeBiz}
                        placeholder="Financial Services, Hydroponics, Plumbing, etc."
                      />
                    </Form.Group>

                    <Form.Group controlId="bizServices">
                      <Form.Label>
                        Which services are you interested in?
                      </Form.Label>
                      <Form.Check
                        checked
                        type="checkbox"
                        label="Web Design & Development"
                        onChange={updateForm}
                        value={form.webDesign}
                      />
                      <Form.Check
                        type="checkbox"
                        label="E-commerce"
                        onChange={updateForm}
                        value={form.eCommerce}
                      />
                      <Form.Check
                        type="checkbox"
                        label="Brand Strategy & Development"
                        onChange={updateForm}
                        value={form.brandDevelopment}
                      />
                      <Form.Check
                        type="checkbox"
                        label="(SEO) Search Engine Optimization"
                        onChange={updateForm}
                        value={form.seo}
                      />
                      <Form.Check
                        type="checkbox"
                        label="Copywriting & Content Development"
                        onChange={updateForm}
                        value={form.contentDevelopment}
                      />
                      <Form.Check
                        type="checkbox"
                        label="Logo Design"
                        onChange={updateForm}
                        value={form.logoDesign}
                      />
                    </Form.Group>
                  </div>
                </>
              ) : null}
              {count === 3 ? (
                <>
                  <div>
                    <h6>Referral Information</h6>
                    <Form.Group>
                      <Form.Label>
                        How did you find out about Designify?
                      </Form.Label>
                      <Form.Control
                        required
                        type="text"
                        name="referral"
                        onChange={updateForm}
                        value={form.referral}
                        placeholder="Flyers, Friend told me, Google search, etc"
                      />
                    </Form.Group>
                  </div>
                </>
              ) : null}
            </Form>
          </Col>
          <Col sm={12} md={12} lg={12}>
            <ProgressBar
              className="my-3"
              variant="dark"
              now={count}
              animated
              min={0}
              max={3}
            />
            {count === 1 ? (
              <>
                <div className="text-center py-3">
                  <Button
                    block
                    type="submit"
                    variant="outline-dark"
                    onClick={() => {
                      setCount(count + 1);
                    }}
                  >
                    Next <i className="fas fa-arrow-right" />
                  </Button>
                </div>
              </>
            ) : null}
            {count === 2 ? (
              <>
                <div className="text-center py-3">
                  <Button
                    block
                    type="submit"
                    variant="outline-dark"
                    onClick={() => {
                      setCount(count + 1);
                    }}
                  >
                    Next <i className="fas fa-arrow-right" />
                  </Button>
                </div>
              </>
            ) : null}
            {count === 3 ? (
              <>
                <div className="text-center py-3">
                  <Button
                    variant="success"
                    type="submit"
                    onClick={submitForm}
                    className="my-1"
                  >
                    Submit Form
                  </Button>
                </div>
              </>
            ) : null}
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default MultiStep;
