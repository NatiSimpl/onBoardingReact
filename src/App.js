import React from "react";
import "./index.css";
import Voyage from "./Voyage";
import Transport from './Transport';
import Ville from "./Ville";

function App() {
  return (
    <div className="container">
      {/* <Ville /> */}
      {/* <Transport /> */}
      <Voyage />
      <div className="bouton">
        <button>Next</button>
      </div>
    </div>
  );
}

export default App;
