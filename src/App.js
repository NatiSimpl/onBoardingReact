import React from "react";
import "./index.css";
import Voyage from "./Voyage";
import Transport from './Transport';
import Ville from "./Ville";
import Modal from "./Modal";

function App() {
  return (
    <div>
      <div className="container">
        <Ville />
        {/* <Transport /> */}
        {/* <Voyage /> */}
        <div className="bouton">
          <button>Next</button>
        </div>
      </div>
      <div>
        {/* <Modal/> */}
      </div>
    </div>
  );
}

export default App;
