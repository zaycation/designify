import React, { useState, useEffect } from "react";
import CircleLoader from "react-spinners/CircleLoader";
import { flash } from "react-animations";
import styled, { keyframes } from "styled-components";

import "../css/LoadingPage.css";

const flipAnim = keyframes`${flash}`;

const FlipDiv = styled.div`
  animation: 2.5s ${flipAnim};
`;

const Loader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 6000);
  }, []);

  return (
    <div>
      {loading ? (
        <div className="loading-screen">
          <CircleLoader size={50} color={"#fff"} loading={loading} />

          <FlipDiv>
            <h2 className="loading__text py-2">
              Augury Salon
            </h2>
            <br />
            <h6 className="text-white">
              IF NOBODY'S ASKING "WHO DOES YOUR HAIR?" COME SEE US.
            </h6>
          </FlipDiv>
        </div>
      ) : (
        window.open("/home", "_self")
      )}
    </div>
  );
};

export default Loader;
