import React from "react";

import HomeNavbar from "../components/HomeNavbar";
import Pricing from "../components/Pricing";
import Footer from "../components/Footer";
import FloatingBtn from "../components/FloatingBtn";

import "../css/PricingPage.css";

const PricingPage = () => {
  return (
    <>
      <HomeNavbar />
      <Pricing />
      <Footer />
      <FloatingBtn />
    </>
  );
};

export default PricingPage;
