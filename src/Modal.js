import React from 'react';
import ReactDom from 'react-dom';
import styled from 'styled-components';

const Modal = ({ onCloseModal, info }) => {
//   const renderCountries = info.selectedCountries.map((country) => {
//     if (country.selected === true) {
//       return <span key={country.id}> {country.name} </span>;
//     }
//   });

//   const renderTransportation = info.selectedTransportation.map((transportation) => {
//     if (transportation.selected === true) {
//       return <span key={transportation.id}> {transportation.name} </span>;
//     }
//   }
//   );

  return ReactDom.createPortal(
    <Container>
      <Dialog>
        <h1>Félicitation, vous avez terminé ! </h1>
        <h2></h2>
        <p>
          <b>Ville :</b> 
          {/* {info.selectedCity.name} */}
        </p>
        <p>
          <b>Votre moyen de transport préféré :</b> 
          {/* {renderTransportation} */}
        </p>
        <p>
          <b>Votre prochaine destination de vacances :</b> 
          {/* {renderCountries} */}
        </p>
        <p>
          <b>Vos détails personnels</b>
        </p>
        <p>
          <b>Prénom :</b> 
          {/* {info.personalDetails.firstName} */}
        </p>
        <p>
          <b>Nom : </b>
          {/* {info.personalDetails.familyName} */}
        </p>
        <p>
          <b>Email :</b> 
          {/* {info.personalDetails.email} */}
        </p>
        <p>
          <b>Adresse : </b>
          {/* {info.personalDetails.address} */}
        </p>
        <p>
          <b>Pays :</b> 
          {/* {info.personalDetails.country} */}
        </p>
        <p>
          <b>Genre :</b> 
          {/* {info.personalDetails.genre} */}
        </p>
        <div>
          <button className="ui green button" onClick={onCloseModal}>
            Fermer
          </button>
        </div>
      </Dialog>
    </Container>,
    document.getElementById('modal')
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