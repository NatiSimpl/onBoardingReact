import React, { useState, useEffect } from "react";
import "./App.css";
import Stepper from "./Stepper";
import PersonalDetails from "./PersonalDetails";
import styled from "styled-components";
import "./index.css";
import Voyage from "./Voyage";
import Transport from "./Transport";
import Ville from "./Ville";
import Modal from "./Modal";

function App() {
  const [currentStep, setCurrentStep] = useState("page1");
  const [personalData, setPersonalData] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [cityChoose, setCityChoose] = useState("");
  const [transportChoose, setTransportChoose] = useState("");
  const [lstCountry, setLstCountry] = useState([]);

  useEffect(() => {
    console.log(personalData);
  }, [personalData]);

  function onClickNext(data) {
    //  console.log(data);
    switch (currentStep) {
      case "page1":
        setCityChoose(data);
        setCurrentStep("page2");
        break;
      case "page2":
        // console.log(data);
        setTransportChoose(data);
        setCurrentStep("page3");
        break;
      case "page3":
        setLstCountry(data);
        setCurrentStep("page4");
        break;
      case "page4":
        //   console.log(data);
        setPersonalData(data);
        setShowModal(true);
        setCurrentStep("page1");
        break;
    }
  }

  return (
    <div>
      <div className="container">
        {currentStep === "page1" && <Ville onNext={onClickNext} />}
        {currentStep === "page2" && <Transport onNext={onClickNext} />}
        {currentStep === "page3" && <Voyage onNext={onClickNext} />}
        {currentStep === "page4" && <PersonalDetails onNext={onClickNext} />}

        <Stepper currentStep={currentStep} />
      </div>
      <div>
        {showModal && (
          <Modal
            onCloseModal={() => setShowModal(false)}
            info={{
              city: cityChoose,
              transport: transportChoose,
              countries: lstCountry,
              personalData: personalData,
            }}
          />
        )}
      </div>
    </div>
  );
}

export default App;
