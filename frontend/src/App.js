import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import BarChart from './components/BarChart';

function App() {
  return (
    <div className="app-container">
      <NavBar />
      <BarChart
  customDataset={{
    data: [18, 15, 20, 26], // Example data values for "This City", "Neighbor Average", "Province Average", "National Average"
  }}
  customLabels={['This City', 'Neighbor Average', 'Province Average', 'National Average']}
  chartTitle="Public Park & Green Spaces Comparison"
/>
    </div>
  );
}

export default App;
