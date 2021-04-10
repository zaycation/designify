import React from "react";

import HomeNavbar from "../components/HomeNavbar";
import Services from "../components/Services";
import Footer from "../components/Footer";
import FloatingBtn from "../components/FloatingBtn";

import "../css/ServicesPage.css";
const ServicesPage = () => {
  return (
    <>
      <HomeNavbar />
      <Services />
      <Footer />
      <FloatingBtn />
    </>
  );
};

export default ServicesPage;
