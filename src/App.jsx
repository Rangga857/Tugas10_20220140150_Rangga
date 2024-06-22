import React from 'react';
import './App.css'; // Import file CSS untuk styling

import gambar1 from "./assets/gambar1.png";

function App() {
  return (
    <div className="app-container">
      <h1 className="app-title">Rangga Azhar Fadillah</h1>
      <p className="app-description">Lanyard STSAB</p>
      <img src={gambar1} alt="gambar" className="app-image" />
    </div>
  );
}

export default App;