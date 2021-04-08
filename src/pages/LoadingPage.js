import React, { useState, useEffect } from "react";
import SyncLoader from "react-spinners/SyncLoader";
import { tada } from "react-animations";
import styled, { keyframes } from "styled-components";

import "../css/LoadingPage.css";

const flipAnim = keyframes`${tada}`;

const FlipDiv = styled.div`
  animation: 1.5s ${flipAnim};
`;

const Loader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <div>
      {loading ? (
        <div className="loading-screen">
          <SyncLoader size={10} color={"#fff"} loading={loading} />

          <FlipDiv>
            <h2 className="loading__text py-3">Designify</h2>
            <br />
            <h4 className="text-white">Connecting Customers to Your Brand</h4>
          </FlipDiv>
        </div>
      ) : (
        window.open("/home", "_self")
      )}
    </div>
  );
};

export default Loader;
