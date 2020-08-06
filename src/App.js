import React from "react";
import "./App.css";
import Voyage from "./Voyage";
import Transport from './Transport';
import Ville from "./Ville";

function App() {
  return (
    <div className="App">
      <Ville />
      <Transport />
      <Voyage />
    </div>
  );
}

export default App;
