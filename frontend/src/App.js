import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import StackedBarChart from './components/StackedBarChart';

function App() {
  return (
    <div className="app-container">
      <NavBar />
      <StackedBarChart
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
