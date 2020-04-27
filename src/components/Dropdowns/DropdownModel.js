import React, { useState, useEffect } from 'react';

import "../SearchFilters/SearchFilters.scss";
import Api from '../../services/api'

const DropdownModel = ({ callbackOption, makeId }) => {
  const [models, setModels] = useState();
  const [selectedModel, setSelectedModel] = useState();

  const updateModelsState = (models) => setModels(models);

  useEffect(() => {
    if (makeId) {
      Api.GetModel(updateModelsState, makeId);
    }
  }, [makeId]);

  const handleChange = event => {
    setSelectedModel(event.target.value);
    callbackOption(event.target.value);
  };

  return (
    <div>
      <select
        className="col-12"
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
