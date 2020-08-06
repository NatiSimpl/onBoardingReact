import React from "react";
import ReactDom from "react-dom";
import styled from "styled-components";

const Modal = ({ onCloseModal, info }) => {
  const renderCountries = info.countries.map((country, index) => {
    return <span key={index}> {country} </span>;
  });

  console.log(info);
  return ReactDom.createPortal(
    <Container>
      <Dialog>
        <h1>Félicitation, vous avez terminé ! </h1>
        <b>Ville :</b>
        {info.city}
        <b>Votre moyen de transport préféré :</b>
        {info.transport}
        <b>Votre prochaine destination de vacances :</b>
        {renderCountries}
        <b>Vos détails personnels</b>
        {info.personalData.name} {info.personalData.lastName}
        {info.personalData.gender}
        <div>
          <button onClick={onCloseModal}>Fermer</button>
        </div>
      </Dialog>
    </Container>,
    document.getElementById("modal")
  );
};

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(97, 97, 97, 0.8);
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Dialog = styled.div`
  width: 650px;
  height: 550px;
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default Modal;
