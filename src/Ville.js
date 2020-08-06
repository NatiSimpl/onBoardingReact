import React, { useState, useEffect } from "react";
import styled from "styled-components";
import "./index.css";

const cityListe = [
  { value: "lyon", label: "Lyon" },
  { value: "grenoble", label: "Grenoble" },
  { value: "marseille", label: "Marseille" },
  { value: "bordeaux", label: "Bordeaux" },
  { value: "strasbourg", label: "Strasbourg" },
  { value: "biarritz", label: "Biarritz" },
  { value: "paris", label: "Paris" },
];

const Ville = (props) => {
  const [ville, setVille] = useState(cityListe);
  const [cityChoose, setCityChoose] = useState("");

  function handleChooseCity(event) {
    setCityChoose(event.currentTarget.value);
  }

  useEffect(() => {
    ///console.log(cityChoose);
  }, [cityChoose]);

  return (
    <div className="interiorComponent">
      <div className="titre">
        <h1>D'où venez-vous ?</h1>
      </div>

      <div className="liste">
        {cityListe.map((ville) => (
          <label key={ville.value}>
            <input
              type="radio"
              value={ville.value}
              onChange={handleChooseCity}
              checked={cityChoose === ville.value}
            />
            {ville.label}
          </label>
        ))}
      </div>
      <Button onClick={() => props.onNext(cityChoose)}>Next</Button>
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

export default Ville;
