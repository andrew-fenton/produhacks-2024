import React, { useEffect, useState } from 'react';
import './App.css';
import MapObject from './components/MapObject';
import NavBar from './components/NavBar';
import BarChart from './components/BarChart';
 import LineChart from './components/LineChart';
 

function App() {
  const [clickLocation, setClickLocation] = useState("");

  useEffect(() => {
    console.log(clickLocation);
  }, [clickLocation]);

  const barChartData = {
    "surrey": [18, 15, 20, 26],
    "coquitlam": [9, 13, 20, 26],
    "burnaby": [11, 12, 20, 26],
    "richmond": [21, 15, 20, 26],
    "delta": [19, 21, 20, 26],
    "langley": [7, 20, 20, 26],
    "white rock": [8, 19, 20, 26],
  }

  return (
    <div className="app-container">
      <NavBar />
      <div className="contentContainer">
        {clickLocation &&
        <div className="barChartContainer">
        <BarChart
        customDataset={{
          data: barChartData[clickLocation], // Example data values for "This City", "Neighbor Average", "Province Average", "National Average"
        }}
        customLabels={['This City', 'Neighbor Average', 'Province Average', 'National Average']}
        chartTitle="Public Park & Green Spaces Comparison"
        />
        <LineChart />
        </div>
        }
        <MapObject setClickLocation={setClickLocation} className="map" />
      </div>
    </div>
  );
}

export default App;

