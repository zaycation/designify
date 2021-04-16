import React from "react";

import HomeNavbar from "../components/HomeNavbar";
import Projects from "../components/Projects2";
import Footer from "../components/Footer";
import FloatingBtn from "../components/FloatingBtn";

import "../css/ExamplesPage.css";

const ExamplesPage = () => {
  return (
    <>
      <HomeNavbar />
      <Projects />
      <Footer />
      <FloatingBtn />
    </>
  );
};

export default ExamplesPage;
