import React, { useState, useEffect } from "react";
import "./App.css";
import Stepper from "./Stepper";
import PersonalDetails from "./PersonalDetails";
import styled from "styled-components";
import "./index.css";
import Voyage from "./Voyage";
import Transport from "./Transport";
import Ville from "./Ville";

function App() {
  const [currentStep, setCurrentStep] = useState("page1");
  const [personalData, setPersonalData] = useState({});
  useEffect(() => {
    console.log(personalData);
  }, [personalData]);

  function onClickNext(data) {
    switch (currentStep) {
      case "page1":
        setCurrentStep("page2");
        break;
      case "page2":
        setCurrentStep("page3");
        break;
      case "page3":
        setCurrentStep("page4");
        break;
      case "page4":
        //   console.log(data);
        setPersonalData(data);
        setCurrentStep("page1");
        break;
    }
  }

  return (
    <div className="App">
      <h1>hello</h1>
      {/* <Ville /> */}
      {/* <Transport /> */}
      <Voyage />
      <PersonalDetails onNext={onClickNext} />
      <Stepper currentStep={currentStep} />
    </div>
  );
}

export default App;
