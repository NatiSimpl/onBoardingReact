import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import "./App.css";

function Stepper({ currentStep }) {
  //console.log(currentStep);

  //'page1' ? 'style={{ border: "fuchsia 2px solid", width: "40px" }}' : ''
  return (
    <div>
      <Container>
        <Bar className={currentStep === "page1" ? "selected" : ""} />
        <Bar className={currentStep === "page2" ? "selected" : ""} />
        <Bar className={currentStep === "page3" ? "selected" : ""} />
        <Bar className={currentStep === "page4" ? "selected" : ""} />
      </Container>
    </div>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Bar = styled.div`
  /* border: green 5px solid;*/
  background-color: violet;
  opacity: 0.6;
  height: 4px;
  width: 10px;
  margin: 20px;
  padding: 4px;
`;

export default Stepper;
