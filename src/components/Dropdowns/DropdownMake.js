import React, { useState, useEffect } from 'react';

import "../SearchFilters/SearchFilters.scss";
import Api from '../../services/api'

const DropdownMake = ({ callbackOption }) => {
  const [makes, setMakes] = useState()
  const updateMakesState = (makes) => setMakes(makes)

  useEffect(() => {
    Api.GetMake(updateMakesState)
  }, []);

  const handleChange = event => {
    callbackOption(event.target.value)
  };

  return (
    <div>
      <select
        className="col-12"
        id="select-planets"
        onChange={handleChange}>
          <option></option>
        {makes?.map((make, index) =>
          <option value={make.ID} key={index}>{make.Name}</option>)}
      </select>
    </div>
  )
}
export default DropdownMake;
