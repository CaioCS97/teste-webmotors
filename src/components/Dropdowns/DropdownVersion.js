import React, { useState, useEffect } from 'react';

import Api from '../../services/api'

const DropdownVersion = ({ callbackOption, modelId }) => {
  const [versions, setVersions] = useState();
  const [selectedVersion, setSelectedVersion] = useState();

  const updateVersionState = (versions) => setVersions(versions);

  useEffect(() => {
    Api.GetVersion(updateVersionState, modelId);
  }, [modelId]);

  const handleChange = event => {
    setSelectedVersion(event.target.value);
    callbackOption(event.target.value);
  };

  return (
    <div>
      <label htmlFor="select-version">Cars</label>
      <select
        className="select"
        id="select-version"
        onChange={handleChange}
        value={selectedVersion}
        disabled={!modelId}>
          <option></option>
        {versions?.map((version, index) =>
          <option value={version.ID} key={index}>{version.Name}</option>)}
      </select>
    </div>
  )
}
export default DropdownVersion;
