import React, { useState, useEffect } from 'react';

// import './PlanetDropdown.scss'
import Api from '../../services/api'

const DropdownModel = ({ callbackOption, makeId }) => {
  const [models, setModels] = useState()
  const updateModelsState = (models) => setModels(models)

  useEffect(() => {
      Api.GetModel(updateModelsState, makeId)
  }, [makeId]);

  const handleChange = event => {
    callbackOption(event.target.value)
  };

  return (
    <div>
      <label htmlFor="select-planets">Cars</label>
      <select
        className="select"
        id="select-planets"
        onChange={handleChange}
        disabled={!makeId}>
          <option></option>
        {models?.map((model, index) =>
          <option value={model.ID} key={index}>{model.Name}</option>)}
      </select>
    </div>
  )
}
export default DropdownModel;