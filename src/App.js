import React, { useState } from 'react';
import './App.css';
// import HxFileLoader from './HxFileLoader.js';
import ConvertPatch from './HxConvertPatch.js';
import { Patch, PatchReport, PatchGrid} from './HxPatch.js';
import FileLoader from './HxFileLoader.js';
import LoadMetaData from './HxMetaDataLoader.js';
import ReportViewer from './ReportViewer.js';
import Button from 'react-bootstrap/Button'
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

function App() {
    const [patchData, setPatchData] = useState({});
    const [metaData, setMetaData] = useState({});

  function handleData(data) {
      var jsonData = JSON.parse(data);
      setPatchData(ConvertPatch(jsonData));

  }

  function handleReportClick() {
      window.open(ReportViewer, '_blank');
  }
  // LoadMetaData(setPatchData);
  // console.log(metaData);
  return (
    <Router>
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item active">
                            <Link class="nav-link" to="/">Home</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/loadFile">Load File</Link>
                        </li>
                        <li class="nav-item dropdown">
                            <Link class="nav-link" to="/report">Report</Link>
                        </li>
                    </ul>
                </div>
            </nav>
            <Switch>
                <Route exact path="/">
                    <div className="App">
                        <header className="App-header">
                            <p>HX Hub</p>
                        </header>
                        <body>
                            <PatchGrid patch={patchData}/>
                            <Patch patch={patchData}/>
                        </body>
                    </div>
                </Route>
                <Route path="/loadFile">
                    <div className="App">
                        <header className="App-header">
                            <p>HX Hub</p>
                        </header>
                        <body>
                            <FileLoader onUploadCompleted={handleData}/>
                        </body>
                    </div>
                </Route>
                <Route path="/report">
                    <PatchReport patch={patchData}/>
                </Route>
            </Switch>
        </div>
    </Router>

);
}

export default App;
