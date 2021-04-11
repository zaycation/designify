import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  ProgressBar,
} from "react-bootstrap";
import Swal from "sweetalert2";
import emailjs from "emailjs-com";
import Checkbox from "@material-ui/core/Checkbox";
import { withStyles } from "@material-ui/core/styles";
import FormControlLabel from "@material-ui/core/FormControlLabel";

import Footer from "../components/Footer";
import HomeNavbar from "../components/HomeNavbar";
import FloatingBtn from "../components/FloatingBtn";

import "../css/MultiStep.css";

const MultiStep = () => {
  const [count, setCount] = useState(1);
  const [form, setForm] = useState({
    name: "",
    email: "",
    typeBiz: "",
    bizSite: "",
    bizName: "",
    referral: "",
    phoneNum: "",
    seo: false,
    webDesign: true,
    eCommerce: false,
    logoDesign: false,
    brandDevelopment: false,
    contentDevelopment: false,
  });

  const handleCheck = (e) => {
    setForm({ ...form, [e.target.name]: e.target.checked });
  };

  const updateForm = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const OrangeCheck = withStyles({
    root: {
      color: "#ef8e38",
      "&$checked": {
        color: "#ef8e38",
      },
    },
    checked: {},
  })((props) => <Checkbox color="default" {...props} />);

  const submitForm = (e) => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-dark",
        denyButton: "btn-dark ",
      },
      buttonsStyling: false,
    });

    swalWithBootstrapButtons
      .fire({
        title: `Thanks, ${form.name}!`,
        text: `We will provide you with a phone call or email within 24 hours.`,
        icon: "success",
        confirmButtonText: `Close`,
        confirmButtonColor: `#ef8e38`,
      })
      .then((result) => {
        if (result.isConfirmed || result.isDenied || result.isDismissed) {
          window.open("/", "_self");
        }
      });

    var templateParams = {
      message: JSON.stringify(form),
    };

    emailjs
      .send(
        "service_r0ilvpo",
        "template_vk1p6im",
        templateParams,
        "user_h2oSDkzclTQzPqQoJ4mze"
      )
      .then(
        function (res) {
          console.log("SUCCESS!", res.status, res.text);
        },
        function (err) {
          console.log("FAILED...", err);
        }
      );
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
            <Form
              id="insform"
              noValidate
              data-netlify="true"
              onSubmit={submitForm}
            >
              {count === 1 ? (
                <>
                  <div>
                    <h6>Contact Information</h6>
                    <Form.Group>
                      <Form.Label className="my-1">Full Name</Form.Label>
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
                        Here at Designify, we vow to never share your email with
                        anyone else. We are not in the business of selling
                        customer information - only websites!
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
                      <Form.Label className="my-1">Business Name</Form.Label>
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
                    <Form.Label>
                      Which services are you interested in?
                    </Form.Label>
                    <Form.Group>
                      <FormControlLabel
                        control={
                          <OrangeCheck
                            checked={form.webDesign}
                            onChange={handleCheck}
                            name="webDesign"
                          />
                        }
                        label="Web Design & Development"
                      />
                      <FormControlLabel
                        control={
                          <OrangeCheck
                            checked={form.eCommerce}
                            onChange={handleCheck}
                            name="eCommerce"
                          />
                        }
                        label="E-commerce"
                      />
                      <FormControlLabel
                        control={
                          <OrangeCheck
                            checked={form.brandDevelopment}
                            onChange={handleCheck}
                            name="brandDevelopment"
                          />
                        }
                        label="Brand Strategy & Development"
                      />

                      <FormControlLabel
                        control={
                          <OrangeCheck
                            checked={form.seo}
                            onChange={handleCheck}
                            name="seo"
                          />
                        }
                        label="(SEO) Search Engine Optimization"
                      />
                      <FormControlLabel
                        control={
                          <OrangeCheck
                            checked={form.contentDevelopment}
                            onChange={handleCheck}
                            name="contentDevelopment"
                          />
                        }
                        label="Copywriting & Content Development"
                      />
                      <FormControlLabel
                        control={
                          <OrangeCheck
                            checked={form.logoDesign}
                            onChange={handleCheck}
                            name="logoDesign"
                          />
                        }
                        label="Logo Design"
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
                    variant="dark"
                    type="submit"
                    onClick={submitForm}
                    className="services-btns my-1"
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
      <FloatingBtn />
    </>
  );
};

export default MultiStep;
