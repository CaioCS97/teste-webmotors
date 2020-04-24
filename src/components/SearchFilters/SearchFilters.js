import React, { useState } from "react";
import DropdownMake from "../Dropdowns/DropdownMake";
import DropdownModel from "../Dropdowns/DropdownModel";
import DropdownVersion from "../Dropdowns/DropdownVersion";

import "./SearchFilters.scss";
import Logo from "../../assets/webmotors-logo.svg";
import Car from "../../assets/car.svg";
import Motorcycle from "../../assets/motorbike.svg";
import Marker from "../../assets/marker.svg";
import Arow from "../../assets/arow.svg";

function SearchFilters() {
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
      <div className="tab-row">
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
              <img src={Motorcycle} alt="motorcycle" className="icon"></img>
              <div className="labels">
                <h5 className="label-h5">COMPRAR</h5>
                <h3 className="label-h3">MOTOS</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="sell">Vender Meu Carro</div>
      </div>
      <div>
        <form className="form">
          <div className="search">
            <div className="checks mb-15">
              <input className="check" id="novo" type="checkbox" />
              <label className="check-label" htmlFor="novo">
                Novo
              </label>
              <input className="check" id="usado" type="checkbox" />
              <label className="check-label" htmlFor="novo">
                Usado
              </label>
            </div>
            <div className="flex-row">
              <div className="col-6 mr-15">
                <div className="col-12">
                  <div className="line mb-15">
                    <div className="input col-8 no-border-right left-b-radius">
                      <img src={Marker} alt="marker" className="icon"></img>
                      <label htmlFor="onde">Onde:</label>
                      <input id="onde" type="text"></input>
                    </div>
                    <div className="input col-4 right-b-radius">
                      <label htmlFor="area">Raio:</label>
                      <select id="area">
                        <option>100km</option>
                        <option>200km</option>
                        <option>300km</option>
                        <option>400km</option>
                        <option>500km</option>
                      </select>
                    </div>
                  </div>
                  <div className="line mb-15">
                    <div className="input col-6 all-b-radius mr-15">
                      <label htmlFor="area">Ano Desejado:</label>
                      <select id="area">
                        <option>2020</option>
                        <option>2019</option>
                        <option>2018</option>
                        <option>2017</option>
                        <option>2016</option>
                        <option>2015</option>
                        <option>2014</option>
                        <option>2013</option>
                        <option>2012</option>
                        <option>2011</option>
                        <option>2010</option>
                      </select>
                    </div>
                    <div className="input col-6 all-b-radius">
                      <label htmlFor="preco">Preço:</label>
                      <select id="preco">
                        <option>Até 20.000</option>
                        <option>Até 30.000</option>
                        <option>Até 40.000</option>
                        <option>Até 50.000</option>
                        <option>Acima de 50.001 </option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className="line mb-15">
                  <div className="input col-6 mr-15">
                    <label htmlFor="marca">Marca:</label>
                    <DropdownMake callbackOption={callbackMake} />
                  </div>
                  <div className="input col-6">
                    <label htmlFor="Modelo">Modelo:</label>
                    <DropdownModel
                      callbackOption={callbackModel}
                      makeId={make}
                    />
                  </div>
                </div>
                <div className="input">
                  <label htmlFor="versao">Versão:</label>
                  <DropdownVersion
                    callbackOption={callbackVersion}
                    modelId={model}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="buttons flex-row">
            <div className="advanced-search align-center flex-row col-6">
              <img src={Arow} alt="Arow" className="icon"></img>
              Busca Avançada
            </div>
            <div className="flex-row col-6 align-center j-content-between ml-15">
              <div className="clean">
                Limpar Filtros
              </div>
              <button className="search-submit col-6">Ver Ofertas</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SearchFilters;
