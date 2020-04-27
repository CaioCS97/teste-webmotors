import React, { useState, useEffect } from 'react';

import "../SearchFilters/SearchFilters.scss";
import Api from '../../services/api'

const DropdownVersion = ({ callbackOption, modelId }) => {
  const [versions, setVersions] = useState();
  const [selectedVersion, setSelectedVersion] = useState();

  const updateVersionState = (versions) => setVersions(versions);

  useEffect(() => {
    if (modelId) {
      Api.GetVersion(updateVersionState, modelId);
    }
  }, [modelId]);

  const handleChange = event => {
    setSelectedVersion(event.target.value);
    callbackOption(event.target.value);
  };

  return (
      <select
        className="col-12"
        id="select-version"
        onChange={handleChange}
        value={selectedVersion}
        disabled={!modelId}>
          <option></option>
        {versions?.map((version, index) =>
          <option value={version.ID} key={index}>{version.Name}</option>)}
      </select>
  )
}
export default DropdownVersion;
