import React, { useState, useEffect } from 'react';

// import './PlanetDropdown.scss'
import Api from '../../services/api'

const DropdownVersion = ({ callbackOption, modelId }) => {
  const [versions, setVersions] = useState()
  const updateVersionState = (versions) => setVersions(versions)

  useEffect(() => {
    Api.GetVersion(updateVersionState, modelId)
  }, [modelId]);

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
        disabled={!modelId}>
          <option></option>
        {versions?.map((version, index) =>
          <option value={version.ID} key={index}>{version.Name}</option>)}
      </select>
    </div>
  )
}
export default DropdownVersion;