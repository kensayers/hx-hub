import React, { useState } from 'react';
import './App.css';
// import HxFileLoader from './HxFileLoader.js';
import ConvertPatch from './HxConvertPatch.js';
import Patch from './HxPatch.js';
import FileLoader from './HxFileLoader.js';
import LoadMetaData from './HxMetaDataLoader.js';

function App() {
    const [patchData, setPatchData] = useState({});
    const [metaData, setMetaData] = useState({});

  function handleData(data) {
      var jsonData = JSON.parse(data);
      setPatchData(ConvertPatch(jsonData));

  }
  // LoadMetaData(setPatchData);
  // console.log(metaData);
  return (
    <div className="App">
      <header className="App-header">
        <p>
          HX Hub
        </p>
      </header>
      <body>
        <FileLoader onUploadCompleted={handleData}/>
        <Patch patch={patchData}/>
      </body>
    </div>
  );
}

export default App;
