import React, { useState, useEffect } from "react";
import bus from "./images/bus.png";
import moto from "./images/moto.svg";
import trott from "./images/trott.png";
import velo from "./images/velo.svg";
import voiture from "./images/voiture.svg";
import walk from "./images/walk.svg";
import "./index.css";
import styled from "styled-components";

const transportMode = [
  { value: "moto", label: "Moto", image: moto },
  { value: "auto", label: "Voiture", image: voiture },
  { value: "velo", label: "Vélo", image: velo },
  { value: "trottinette", label: "Trottinette", image: trott },
  { value: "bus", label: "Autobus", image: bus },
  { value: "pied", label: "A pied", image: walk },
];

const Transport = (props) => {
  const [transport, setTransport] = useState(transportMode);
  const [transportChoose, setTransportChoose] = useState("");

  function handleChooseTransport(choosen) {
    setTransportChoose(choosen);
  }

  useEffect(() => {
    //console.log(transportChoose);
  }, [transportChoose]);

  return (
    <div className="interiorComponent">
      <div className="titre">
        <h1>Votre moyen de locomotion préféré ?</h1>
      </div>

      <div className="card">
        {transport.map((transport) => (
          <button
            className="elem"
            onClick={() => handleChooseTransport(transport.value)}
            key={transport.value}
            value={transport.value}
          >
            <img
              key={transport.value}
              src={transport.image}
              alt={transport.label}
              className="photo"
            />
            <h4>{transport.label}</h4>
          </button>
        ))}
      </div>
      <Button onClick={() => props.onNext(transportChoose)}>Next</Button>
    </div>
  );
};

const Button = styled.button`
  /* border: green 5px solid;*/
  background-color: violet;
  opacity: 0.6;
  height: 40px;
  width: 80px;
  margin: 20px;
  padding: 10px;
  border-radius: 6px;
`;

export default Transport;
