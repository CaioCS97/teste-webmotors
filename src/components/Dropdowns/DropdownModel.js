import React, { useState, useEffect } from 'react';

// import './PlanetDropdown.scss'
import Api from '../../services/api'

const DropdownModel = ({ callbackOption, makeId }) => {
  const [models, setModels] = useState();
  const [selectedModel, setSelectedModel] = useState();

  const updateModelsState = (models) => setModels(models);

  useEffect(() => {
    Api.GetModel(updateModelsState, makeId);
  }, [makeId]);

  const handleChange = event => {
    setSelectedModel(event.target.value);
    callbackOption(event.target.value);
  };

  return (
    <div>
      <label htmlFor="select-model">Cars</label>
      <select
        className="select"
        id="select-model"
        onChange={handleChange}
        value={selectedModel}
        disabled={!makeId}>
          <option></option>
        {models?.map((model, index) =>
          <option value={model.ID} key={index}>{model.Name}</option>)}
      </select>
    </div>
  )
}
export default DropdownModel;
