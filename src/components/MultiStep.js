import React, { useState } from "react";
import Swal from "sweetalert2";
import {
  Container,
  Row,
  Col,
  Card,
  Form,
  Button,
  ProgressBar,
} from "react-bootstrap";
import emailjs from "emailjs-com";

import FormNav from "../FormNav";
import Footer from "../../components/Footer";

import "../../css/MultiStep.css";

const MultiStep = () => {
  const [form, setForm] = useState({
    auto: false,
    home: false,
    life: false,
    biz: false,
    name: "",
    birthMonth: "",
    birthDay: "",
    birthYear: "",
    email: "",
    phoneNum: "",
    address: "",
    address2: "",
    city: "",
    state: "",
    zipCode: "",
    //numOfCars: 0,
    numOfDrivers: 0,
    carTypes: "",
    desiredCoverage: "",
    drivingViolations: "",
    homeClaims: "",
    homeAlarm: "",
    currentLifePolicy: "",
    desiredLifeCoverage: "",
    bizName: "",
    bizDba: "",
    typeBiz: "",
    bizServices: "",
    bizPhone: "",
    bizEmail: "",
    bizAddress: "",
    bizAddress2: "",
    bizCity: "",
    bizState: "",
    bizZipCode: "",
    bizClaims: "",
  });

  const [count, setCount] = useState(1);

  // eslint-disable-next-line no-unused-vars
  const [validated, setValidated] = useState(false);
  /*
  const handleValidation = (event) => {
    const formz = event.currentTarget;
    if (formz.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
*/
  const updateForm = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });

    //console.log(form);
  };

  const submitForm = () => {
    //console.log(form);
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        denyButton: "btn btn-danger",
      },
      buttonsStyling: false,
    });

    if (
      (form.auto && form.life) ||
      (form.auto && form.home) ||
      (form.auto && form.biz) ||
      (form.home && form.life) ||
      (form.home && form.biz) ||
      (form.life && form.biz)
    ) {
      swalWithBootstrapButtons
        .fire({
          title: `Thanks, ${form.name}!`,
          text: `We've received your request and will follow up with you shortly via a phone call.`,
          icon: "success",
          confirmButtonText: `Close`,
        })
        .then((result) => {
          if (result.isConfirmed) {
            window.open("/home", "_self");
          }
        });

      var templateParams = {
        message: JSON.stringify(form),
      };
      emailjs
        .send(
          "service_pobm1wi",
          "template_a3f829l",
          templateParams,
          "user_FIOUCfJpBMFuc9PyF9Zmu"
        )
        .then(
          function (response) {
            console.log("SUCCESS!", response.status, response.text);
          },
          function (error) {
            console.log("FAILED...", error);
          }
        );
    } else if (
      (form.auto &&
        form.life === false &&
        form.home === false &&
        form.biz === false) ||
      (form.life &&
        form.auto === false &&
        form.home === false &&
        form.biz === false) ||
      (form.home &&
        form.life === false &&
        form.auto === false &&
        form.biz === false) ||
      (form.biz &&
        form.home === false &&
        form.life === false &&
        form.auto === false)
    ) {
      swalWithBootstrapButtons
        .fire({
          title: "Bundling insurance with Scout can save you up to 25%!",
          text: "Are you sure you want to continue?",
          showDenyButton: true,
          showConfirmButton: true,
          confirmButtonText: `Submit Anyways`,
          denyButtonText: `WAIT - I want to save!`,
        })
        .then((result) => {
          if (result.isConfirmed) {
            swalWithBootstrapButtons
              .fire({
                title: `Thanks, ${form.name}!`,
                text: `We've received your request and will follow up with you shortly via a phone call.`,
                icon: "success",
                confirmButtonText: `Close`,
              })
              .then((result) => {
                if (result.isConfirmed) {
                  window.open("/home", "_self");
                }
              });

            var templateParams = {
              message: JSON.stringify(form),
            };
            emailjs
              .send(
                "service_pobm1wi",
                "template_a3f829l",
                templateParams,
                "user_FIOUCfJpBMFuc9PyF9Zmu"
              )
              .then(
                function (response) {
                  console.log("SUCCESS!", response.status, response.text);
                },
                function (error) {
                  console.log("FAILED...", error);
                }
              );
          } else if (result.isDenied) {
            if (
              form.auto &&
              form.life === false &&
              form.home === false &&
              form.biz === false
            ) {
              Swal.fire({
                title: `Let us know you want to bundle!`,
                denyButtonColor: "#78cffd",
                confirmButtonColor: "#78cffd",
                cancelButtonColor: "#78cffd",
                showDenyButton: true,
                denyButtonText: "Home Insurance",
                showConfirmButton: true,
                confirmButtonText: "Life Insurance",
                showCancelButton: true,
                cancelButtonText: "Business Insurance",
              }).then((result) => {
                if (result.isConfirmed) {
                  form.home = true;
                  setCount(count + 2);
                } else if (result.isDenied) {
                  form.life = true;
                  setCount(count + 1);
                } else if (result.isDismissed) {
                  form.biz = true;
                  setCount(count + 3);
                }
              });
            } else if (
              form.life &&
              form.auto === false &&
              form.home === false &&
              form.biz === false
            ) {
              Swal.fire({
                title: `Let us know you want to bundle!`,
                showDenyButton: true,
                denyButtonColor: "#78cffd",
                confirmButtonColor: "#78cffd",
                cancelButtonColor: "#78cffd",
                denyButtonText: "Auto Insurance",
                showConfirmButton: true,
                confirmButtonText: "Home Insurance",
                showCancelButton: true,
                cancelButtonText: "Business Insurance",
              }).then((result) => {
                if (result.isConfirmed) {
                  form.home = true;
                  setCount(count - 1);
                } else if (result.isDenied) {
                  form.auto = true;
                  setCount(count - 2);
                } else if (result.isDismissed) {
                  form.biz = true;
                  setCount(count + 1);
                }
              });
            } else if (
              form.home &&
              form.life === false &&
              form.auto === false &&
              form.biz === false
            ) {
              Swal.fire({
                title: `Let us know you want to bundle!`,
                denyButtonColor: "#78cffd",
                confirmButtonColor: "#78cffd",
                cancelButtonColor: "#78cffd",
                showDenyButton: true,
                denyButtonText: "Auto Insurance",
                showConfirmButton: true,
                confirmButtonText: "Life Insurance",
                showCancelButton: true,
                cancelButtonText: "Business Insurance",
              }).then((result) => {
                if (result.isConfirmed) {
                  form.life = true;
                  setCount(count + 1);
                } else if (result.isDenied) {
                  form.auto = true;
                  setCount(count - 1);
                } else if (result.isDismissed) {
                  form.biz = true;
                  setCount(count + 2);
                }
              });
            } else if (
              form.biz &&
              form.home === false &&
              form.life === false &&
              form.auto === false
            ) {
              Swal.fire({
                title: `Let us know you want to bundle!`,
                denyButtonColor: "#78cffd",
                confirmButtonColor: "#78cffd",
                cancelButtonColor: "#78cffd",
                showDenyButton: true,
                denyButtonText: "Auto Insurance",
                showConfirmButton: true,
                confirmButtonText: "Life Insurance",
                showCancelButton: true,
                cancelButtonText: "Home Insurance",
              }).then((result) => {
                if (result.isConfirmed) {
                  form.life = true;
                  setCount(count - 1);
                } else if (result.isDenied) {
                  form.auto = true;
                  setCount(count - 3);
                } else if (result.isDismissed) {
                  form.home = true;
                  setCount(count - 2);
                }
              });
            }
          }
        });
    }
  };

  return (
    <>
      <Container>
        <Row>
          <FormNav />
        </Row>
      </Container>
      <Container className="main-cont">
        <Row>
          <Col sm={12} md={12} lg={12} className="top-col">
            <h4>Insurance Form</h4>
            <ProgressBar
              animated
              max={8}
              min={0}
              now={count}
              variant="info"
              className="my-1"
            />
          </Col>
          <Col sm={12} md={12} lg={12}>
            <Form
              noValidate
              validated={validated}
              onSubmit={submitForm}
              id="insform"
            >
              {count === 1 ? (
                <>
                  <br />
                  <div className="top-cards">
                    <Card
                      className="card-pop"
                      style={{ width: "18rem" }}
                      onClick={() => {
                        form.auto = true;
                        setCount(count + 1);
                      }}
                    >
                      <Card.Body>
                        <Card.Title>
                          Auto Insurance <i className="fas fa-car" />
                        </Card.Title>
                        <Card.Text>
                          A policy purchased by vehicle owners to mitigate costs
                          associated with getting into an auto accident
                        </Card.Text>
                      </Card.Body>
                    </Card>{" "}
                    <Card
                      className="card-pop"
                      style={{ width: "18rem" }}
                      onClick={() => {
                        form.home = true;
                        setCount(count + 1);
                      }}
                    >
                      <Card.Body>
                        <Card.Title>
                          Home Insurance
                          <i className="fas fa-house-damage ml-1" />
                        </Card.Title>
                        <Card.Text>
                          A policy that covers losses and damages to an
                          individual's residence, along with furnishings and
                          other assets
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </div>
                  <br />
                </>
              ) : null}
              {count === 2 ? (
                <>
                  <h6>Contact Information</h6>
                  <Form.Group>
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      name="name"
                      onChange={updateForm}
                      value={form.name}
                      placeholder="Jean Deaux"
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
                      placeholder="newperson@email.com"
                    />
                    <Form.Text className="text-muted">
                      We'll never share your email with anyone else.
                    </Form.Text>
                  </Form.Group>
                </>
              ) : null}
              {count === 3 ? (
                <>
                  <Form.Text className="text-muted">Date of Birth</Form.Text>
                  <Form.Row>
                    <Form.Group as={Col} controlId="birthMonth">
                      <Form.Label>Month</Form.Label>
                      <Form.Control
                        required
                        as="select"
                        name="birthMonth"
                        onChange={updateForm}
                        value={form.birthMonth}
                      >
                        <option>Jan</option>
                        <option>Feb</option>
                        <option>Mar</option>
                        <option>Apr</option>
                        <option>May</option>
                        <option>June</option>
                        <option>July</option>
                        <option>Aug</option>
                        <option>Sep</option>
                        <option>Oct</option>
                        <option>Nov</option>
                        <option>Dev</option>
                      </Form.Control>
                    </Form.Group>
                    <Form.Group as={Col} controlId="birthDay">
                      <Form.Label>Day</Form.Label>
                      <Form.Control
                        required
                        as="select"
                        name="birthDay"
                        onChange={updateForm}
                        value={form.birthDay}
                      >
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                        <option>7</option>
                        <option>8</option>
                        <option>9</option>
                        <option>10</option>
                        <option>11</option>
                        <option>12</option>
                        <option>13</option>
                        <option>14</option>
                        <option>15</option>
                        <option>16</option>
                        <option>17</option>
                        <option>18</option>
                        <option>19</option>
                        <option>20</option>
                        <option>21</option>
                        <option>22</option>
                        <option>23</option>
                        <option>24</option>
                        <option>25</option>
                        <option>26</option>
                        <option>27</option>
                        <option>28</option>
                        <option>29</option>
                        <option>30</option>
                        <option>31</option>
                      </Form.Control>
                    </Form.Group>
                    <Form.Group as={Col}>
                      <Form.Label>Birth Year</Form.Label>
                      <Form.Control
                        required
                        type="text"
                        name="birthYear"
                        onChange={updateForm}
                        value={form.birthYear}
                        placeholder="1995"
                      />
                    </Form.Group>
                  </Form.Row>
                </>
              ) : null}
              {count === 4 ? (
                <>
                  <Form.Text>Mailing Address</Form.Text>
                  <Form.Group controlId="formGridAddress1">
                    <Form.Label>Address</Form.Label>
                    <Form.Control
                      type="text"
                      name="address"
                      onChange={updateForm}
                      value={form.address}
                      placeholder="1234 Main St"
                    />
                  </Form.Group>

                  <Form.Group controlId="formGridAddress2">
                    <Form.Label>Address 2</Form.Label>
                    <Form.Control
                      type="text"
                      name="address2"
                      onChange={updateForm}
                      value={form.address2}
                      placeholder="Apartment, studio, or floor"
                    />
                  </Form.Group>

                  <Form.Row>
                    <Form.Group as={Col} md="6" controlId="formGridCity">
                      <Form.Label>City</Form.Label>
                      <Form.Control
                        type="text"
                        name="city"
                        onChange={updateForm}
                        value={form.city}
                        placeholder="Los Angeles"
                        required
                      />
                      <Form.Control.Feedback type="invalid">
                        Please provide a valid city.
                      </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="3" controlId="formGridState">
                      <Form.Label>State</Form.Label>
                      <Form.Control
                        type="text"
                        name="state"
                        onChange={updateForm}
                        value={form.state}
                        placeholder="California"
                        required
                      />
                      <Form.Control.Feedback type="invalid">
                        Please provide a valid state.
                      </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="3" controlId="validationCustom05">
                      <Form.Label>Zip</Form.Label>
                      <Form.Control
                        type="text"
                        name="zipCode"
                        onChange={updateForm}
                        value={form.zipCode}
                        placeholder="90001"
                        required
                      />
                      <Form.Control.Feedback type="invalid">
                        Please provide a valid zip.
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Form.Row>
                </>
              ) : null}
              {count === 5 ? (
                <>
                  <h6>Auto Insurance</h6>
                  {/*
                  <Form.Group>
                    <Form.Label>
                      How many cars will need to be insured?
                    </Form.Label>
                    <Form.Control
                      onChange={updateForm}
                      value={form.numOfCars}
                      name="numOfCars"
                      type="number"
                      placeholder="0"
                    />
                  </Form.Group>
                  */}
                  <Form.Group>
                    <Form.Label>
                      How many drivers will need to be insured?
                    </Form.Label>
                    <Form.Control
                      onChange={updateForm}
                      value={form.numOfDrivers}
                      name="numOfDrivers"
                      type="number"
                      placeholder="0"
                    />
                  </Form.Group>

                  <Form.Group>
                    <Form.Label>
                      Please list the year, make, and model of all of your
                      vehicles
                    </Form.Label>
                    <Form.Control
                      onChange={updateForm}
                      value={form.carTypes}
                      name="carTypes"
                      type="text"
                      placeholder="Ex: 2017 Nissan Sentra, 2018 Ford Focus, and 2016 Toyota IA"
                    />
                  </Form.Group>

                  <Form.Group>
                    <Form.Label>
                      Please list the desired insurance coverage you're
                      interested in
                    </Form.Label>
                    <Form.Control
                      onChange={updateForm}
                      value={form.desiredCoverage}
                      name="desiredCoverage"
                      type="text"
                      placeholder="Ex: Liability, Full Coverage, etc."
                    />
                  </Form.Group>

                  <Form.Group>
                    <Form.Label>
                      Please list any violations, tickets, etc from any of the
                      drivers?
                    </Form.Label>
                    <Form.Control
                      onChange={updateForm}
                      value={form.drivingViolations}
                      name="drivingViolations"
                      type="text"
                      placeholder="Ex: 2 speeding tickets in the last 3 years"
                    />
                  </Form.Group>
                </>
              ) : null}
              {count === 6 ? (
                <>
                  <h6>Home Insurance</h6>
                  <Form.Group controlId="homeClaims">
                    <Form.Label>
                      Any losses or claims within the last 3 years?
                    </Form.Label>
                    <Form.Control
                      required
                      as="select"
                      name="homeClaims"
                      onChange={updateForm}
                      value={form.homeClaims}
                    >
                      <option>Please Choose...</option>
                      <option>No</option>
                      <option>Yes</option>
                    </Form.Control>
                  </Form.Group>

                  <Form.Group controlId="homeAlarm">
                    <Form.Label>Do you have a home alarm system?</Form.Label>
                    <Form.Control
                      required
                      as="select"
                      name="homeAlarm"
                      onChange={updateForm}
                      value={form.homeAlarm}
                    >
                      <option>Please Choose...</option>
                      <option>No</option>
                      <option>Yes</option>
                    </Form.Control>
                  </Form.Group>
                </>
              ) : null}
              {count === 7 ? (
                <>
                  <h6>Life Insurance</h6>
                  <Form.Group>
                    <Form.Label>
                      Do you have a current life insurance policy?
                    </Form.Label>
                    <Form.Control
                      onChange={updateForm}
                      value={form.currentLifePolicy}
                      name="currentLifePolicy"
                      type="text"
                      placeholder="Ex: 2021 Houston, TX Snow Storm claim lost my entire condo"
                    />
                  </Form.Group>

                  <Form.Group>
                    <Form.Label>
                      Type of policy and coverage amount desired?
                    </Form.Label>
                    <Form.Control
                      onChange={updateForm}
                      value={form.desiredLifeCoverage}
                      name="desiredLifeCoverage"
                      type="text"
                      placeholder="Ex: Full Coverage"
                    />
                  </Form.Group>
                </>
              ) : null}
              {count === 8 ? (
                <>
                  <h6>Business Insurance</h6>
                  <Form.Group>
                    <Form.Label>Business Name</Form.Label>
                    <Form.Control
                      onChange={updateForm}
                      value={form.bizName}
                      name="bizName"
                      type="text"
                      placeholder="Ex: JP Morgan Chase"
                    />
                  </Form.Group>

                  <Form.Group>
                    <Form.Label>Does your business have a DBA?</Form.Label>
                    <Form.Control
                      onChange={updateForm}
                      value={form.bizDba}
                      name="bizDba"
                      type="text"
                      placeholder="Ex: Business DBA Name"
                    />
                  </Form.Group>

                  <Form.Group>
                    <Form.Label>Type of Business</Form.Label>
                    <Form.Control
                      onChange={updateForm}
                      value={form.typeBiz}
                      name="typeBiz"
                      type="text"
                      placeholder="Ex: Fin-tech Start-up"
                    />
                  </Form.Group>

                  <Form.Group>
                    <Form.Label>
                      What type of services does your business provide?
                    </Form.Label>
                    <Form.Control
                      onChange={updateForm}
                      value={form.bizServices}
                      name="bizServices"
                      type="text"
                      placeholder="Ex: Peer to peer lending solutions"
                    />
                  </Form.Group>

                  <Form.Group>
                    <Form.Label>Business Phone Number</Form.Label>
                    <Form.Control
                      onChange={updateForm}
                      value={form.bizPhone}
                      name="bizPhone"
                      type="text"
                      placeholder="Ex: (555) 555 - 5555"
                    />
                  </Form.Group>

                  <Form.Group>
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                      type="email"
                      name="bizEmail"
                      onChange={updateForm}
                      value={form.bizEmail}
                      placeholder="newperson@mybiz.com"
                    />
                  </Form.Group>

                  <Form.Group controlId="formGridAddress1">
                    <Form.Label>Address</Form.Label>
                    <Form.Control
                      type="text"
                      name="bizAddress"
                      onChange={updateForm}
                      value={form.bizAddress}
                      placeholder="1234 Main St"
                    />
                  </Form.Group>

                  <Form.Group controlId="formGridAddress2">
                    <Form.Label>Address 2</Form.Label>
                    <Form.Control
                      type="text"
                      name="bizAddress2"
                      onChange={updateForm}
                      value={form.bizAddress2}
                      placeholder="Ex: Ste# 53"
                    />
                  </Form.Group>

                  <Form.Row>
                    <Form.Group as={Col} controlId="formGridCity">
                      <Form.Label>City</Form.Label>
                      <Form.Control
                        tpe="text"
                        name="bizCity"
                        onChange={updateForm}
                        value={form.bizCity}
                        placeholder="Los Angeles"
                      />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridState">
                      <Form.Label>State</Form.Label>
                      <Form.Control
                        type="text"
                        name="bizState"
                        onChange={updateForm}
                        value={form.bizState}
                        placeholder="California"
                      />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridZip">
                      <Form.Label>Zip</Form.Label>
                      <Form.Control
                        type="text"
                        name="bizZipCode"
                        onChange={updateForm}
                        value={form.bizZipCode}
                        placeholder="90001"
                      />
                    </Form.Group>
                  </Form.Row>

                  <Form.Group>
                    <Form.Label>
                      Any losses or claims for this business within the last 3
                      years?
                    </Form.Label>
                    <Form.Control
                      onChange={updateForm}
                      value={form.bizClaims}
                      name="bizClaims"
                      type="text"
                      placeholder="Ex: 2021 Houston, TX Snow Storm claim lost my entire condo"
                    />
                  </Form.Group>
                </>
              ) : null}
            </Form>
          </Col>
          <Col sm={12} md={12} lg={12}>
            {count === 1 ? (
              <>
                <div className="top-cards">
                  <Card
                    className="card-pop"
                    style={{ width: "18rem" }}
                    onClick={() => {
                      form.life = true;
                      setCount(count + 1);
                    }}
                  >
                    <Card.Body>
                      <Card.Title>
                        Life Insurance
                        <i className="fas fa-heartbeat ml-1" />
                      </Card.Title>
                      <Card.Text>
                        A policy that guarantees the insurer pays a sum of money
                        to named beneficiaries when the insured policyholder
                        passes
                      </Card.Text>
                    </Card.Body>
                  </Card>{" "}
                  <Card
                    className="card-pop"
                    style={{ width: "18rem" }}
                    onClick={() => {
                      form.biz = true;
                      setCount(count + 1);
                    }}
                  >
                    <Card.Body>
                      <Card.Title>
                        Business Insurance
                        <i className="fas fa-business-time ml-1" />
                      </Card.Title>
                      <Card.Text>
                        A policy that protects businesses from losses due to
                        events that may occur during the normal course of
                        business
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>
                <br />
                <hr />
                <br />
                <h6 className="text-center text-muted">
                  Scout loves bundles! Bundle insurance types with Scout for an
                  exclusive discount
                </h6>
              </>
            ) : null}
            {count === 2 ? (
              <>
                <div className="text-center">
                  {/*
                  <Button
                    variant="secondary"
                    onClick={() => setCount(count - 1)}
                    className="my-1"
                  >
                    <i className="fas fa-arrow-left" /> Back
                  </Button>
                  */}
                  <Button
                    type="submit"
                    variant="info"
                    onClick={() => {
                      setCount(count + 1);
                    }}
                    className="my-1"
                  >
                    Next <i className="fas fa-arrow-right" />
                  </Button>{" "}
                </div>
              </>
            ) : null}
            {count === 3 ? (
              <div className="text-center">
                <Button
                  type="submit"
                  variant="info"
                  onClick={() => {
                    setCount(count + 1);
                  }}
                  className="my-1"
                >
                  Next <i className="fas fa-arrow-right" />
                </Button>{" "}
              </div>
            ) : null}
            {count === 4 ? (
              <div className="text-center">
                <Button
                  type="submit"
                  variant="info"
                  onClick={() => {
                    if (form.auto === true) {
                      setCount(count + 1);
                    } else if (form.home === true) {
                      setCount(count + 2);
                    } else if (form.life === true) {
                      setCount(count + 3);
                    } else if (form.biz === true) {
                      setCount(count + 4);
                    }
                  }}
                  className="my-1"
                >
                  Next <i className="fas fa-arrow-right" />
                </Button>{" "}
              </div>
            ) : null}

            {count === 5 ? (
              <>
                <div className="text-center">
                  <h6 className="text-muted">
                    Interested in other insurance options? Select it below to
                    fill out the necessary information.
                  </h6>
                  <Button
                    variant="info"
                    onClick={() => {
                      form.home = true;
                      setCount(count + 1);
                    }}
                    className="my-1"
                  >
                    Home Insurance
                  </Button>{" "}
                  <Button
                    variant="info"
                    onClick={() => {
                      form.life = true;
                      setCount(count + 2);
                    }}
                    className="my-1"
                  >
                    Life Insurance
                  </Button>{" "}
                  <Button
                    variant="info"
                    onClick={() => {
                      form.biz = true;
                      setCount(count + 3);
                    }}
                    className="my-1"
                  >
                    Business Insurance
                  </Button>{" "}
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
            {count === 6 ? (
              <>
                <div className="text-center">
                  <h6 className="text-muted">
                    Interested in other insurance options? Select it below to
                    fill out the necessary information.
                  </h6>
                  <Button
                    variant="info"
                    onClick={() => {
                      form.auto = true;
                      setCount(count - 1);
                    }}
                    className="my-1"
                  >
                    Auto Insurance
                  </Button>{" "}
                  <Button
                    variant="info"
                    onClick={() => {
                      form.life = true;
                      setCount(count + 1);
                    }}
                    className="my-1"
                  >
                    Life Insurance
                  </Button>{" "}
                  <Button
                    variant="info"
                    onClick={() => {
                      form.biz = true;
                      setCount(count + 2);
                    }}
                    className="my-1"
                  >
                    Business Insurance
                  </Button>{" "}
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
            {count === 7 ? (
              <>
                <h6 className="text-muted">
                  Interested in other insurance options? Select it below to fill
                  out the necessary information.
                </h6>
                <div className="text-center">
                  <Button
                    variant="info"
                    onClick={() => {
                      form.auto = true;
                      setCount(count - 2);
                    }}
                    className="my-1"
                  >
                    Auto Insurance
                  </Button>{" "}
                  <Button
                    variant="info"
                    onClick={() => {
                      form.home = true;
                      setCount(count - 1);
                    }}
                    className="my-1"
                  >
                    Home Insurance
                  </Button>{" "}
                  <Button
                    variant="info"
                    onClick={() => {
                      form.biz = true;
                      setCount(count + 1);
                    }}
                    className="my-1"
                  >
                    Business Insurance
                  </Button>{" "}
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
            {count === 8 ? (
              <>
                <div className="text-center">
                  <Button
                    variant="info"
                    onClick={() => {
                      form.auto = true;
                      setCount(count - 3);
                    }}
                    className="my-1"
                  >
                    Auto Insurance
                  </Button>{" "}
                  <Button
                    variant="info"
                    onClick={() => {
                      form.home = true;
                      setCount(count - 2);
                    }}
                    className="my-1"
                  >
                    Home Insurance
                  </Button>{" "}
                  <Button
                    variant="info"
                    onClick={() => {
                      form.life = true;
                      setCount(count - 1);
                    }}
                    className="my-1"
                  >
                    Life Insurance
                  </Button>{" "}
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

      <Container fluid={true}>
        <Footer />
      </Container>
    </>
  );
};

export default MultiStep;
