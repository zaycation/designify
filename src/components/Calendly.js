import React from "react";
import { InlineWidget } from "react-calendly";
import HomeNavbar from "./HomeNavbar";

const Calendly = () => {
  return (
    <>
      <HomeNavbar />
      <InlineWidget url="https://calendly.com/designify?hide_gdpr_banner=1&primary_color=ef8e38Î" />
    </>
  );
};

export default Calendly;
