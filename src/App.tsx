import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import './App.css';
import { CampsiteInfo } from './campsite-info';
import { CampImages } from './campsite-info/components/camp-images';

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <CampsiteInfo />
      <CampImages />
    </div>
  );
}

export default App;
