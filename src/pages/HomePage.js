import React from "react";

import HomeNavbar from "../components/HomeNavbar";
import Header from "../components/Header";
import Why from "../components/Why";
import Welcome from "../components/Welcome";
import Footer from "../components/Footer";
import FloatingBtn from "../components/FloatingBtn";

import "../css/Homepage.css";

const HomePage = () => {
  return (
    <>
      <HomeNavbar />
      <Header />
      <Why />
      <Welcome />
      <Footer />
      <FloatingBtn />
    </>
  );
};

export default HomePage;
