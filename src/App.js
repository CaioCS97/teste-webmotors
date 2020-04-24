import React, { useState } from "react";
import DropdownMake from "./components/Dropdowns/DropdownMake";
import DropdownModel from "./components/Dropdowns/DropdownModel";
import DropdownVersion from "./components/Dropdowns/DropdownVersion";

import "./App.scss";
import Logo from "./assets/webmotors-logo.svg";
import Car from "./assets/car.svg";
import Motorcycle from "./assets/motorbike.svg";

function App() {
  const [make, setMake] = useState();
  const [model, setModel] = useState();
  const [version, setVersion] = useState();

  const callbackMake = (e) => {
    setMake(e);
   };
  const callbackModel = (e) => {
    setModel(e);
  };
  const callbackVersion = (e) => {
    setVersion(e);
  };

  return (
    <div className="background">
      <header className="header">
        <a href="https://www.webmotors.com.br/">
          <img src={Logo} alt="webmotors-logo" />
        </a>
      </header>
      <div className="content">
        <div className="tabs">
          <div className="tab">
            <div className="car">
              <img src={Car} alt="car" className="icon"></img>
              <div className="labels">
                <h5 className="label-h5">COMPRAR</h5>
                <h3 className="label-h3">CARROS</h3>
              </div>
            </div>
          </div>
          <div className="tab">
            <div className="motorcycle">
              <img src={Motorcycle} alt="car" className="icon"></img>
              <div className="labels">
                <h5 className="label-h5">COMPRAR</h5>
                <h3 className="label-h3">MOTOS</h3>
              </div>
            </div>
          </div>
        </div>

        <div className="sell">
          Vender meu Carro
        </div>
        <div>
        </div>
      </div>
      <DropdownMake callbackOption={callbackMake} />

      <DropdownModel callbackOption={callbackModel} makeId={make} />

      <DropdownVersion callbackOption={callbackVersion} modelId={model} />
    </div>
  );
}

export default App;
