import React, { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

function PersonalDetails({ onNext }) {
  const [currentName, setCurrentName] = useState("");
  const [currentLastName, setCurrentLastName] = useState("");
  const [currentAddress, setCurrentAddress] = useState("");
  const [currentEmail, setCurrentEmail] = useState("");
  const [currentCountry, setCurrentCountry] = useState("");
  const [currentGender, setCurrentGender] = useState("");

  const details = {
    name: currentName,
    lastName: currentLastName,
    address: currentAddress,
    email: currentEmail,
    country: currentCountry,
  };
  //console.log(details);

  return (
    <Container>
      <div>
        <form>
          <div>
            <label>
              Name:
              <input
                type="text"
                name="name"
                onChange={(e) => setCurrentName(e.target.value)}
                value={currentName}
              />
            </label>
          </div>
          <div>
            <label>
              Last Name:
              <input
                type="text"
                name="lastName"
                onChange={(e) => setCurrentLastName(e.target.value)}
                value={currentLastName}
              />
            </label>
          </div>
          <div>
            <label>
              Address:
              <input
                type="text"
                name="address"
                value={currentAddress}
                onChange={(e) => setCurrentAddress(e.target.value)}
              />
            </label>
          </div>
          <div>
            <label>
              Email
              <input
                type="text"
                name="email"
                onChange={(e) => setCurrentEmail(e.target.value)}
                value={currentEmail}
              />
            </label>
          </div>
          <div>
            <label>
              Country
              <input
                type="text"
                checked=""
                name="country"
                value={currentCountry}
                onChange={(e) => setCurrentCountry(e.target.value)}
              />
            </label>
          </div>
          <div>
            <label>
              M
              <input
                checked={currentGender === "m"}
                type="radio"
                value="m"
                onChange={(e) => setCurrentGender(e.target.value)}
              />
            </label>
            <label>
              F
              <input
                checked={currentGender === "f"}
                type="radio"
                value="f"
                onChange={(e) => setCurrentGender(e.target.value)}
              />
            </label>
            <label>
              Other
              <input
                checked={currentGender === "o"}
                type="radio"
                value="o"
                onChange={(e) => setCurrentGender(e.target.value)}
              />
            </label>
          </div>
        </form>
      </div>
      <Button
        onClick={() =>
          onNext({
            name: currentName,
            lastName: currentLastName,
            address: currentAddress,
            email: currentEmail,
            country: currentCountry,
          })
        }
      >
        Next
      </Button>
    </Container>
  );
}
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

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default PersonalDetails;
