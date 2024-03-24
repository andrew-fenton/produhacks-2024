import React, { useEffect, useState } from 'react';
import './App.css';
import MapObject from './components/MapObject';
import NavBar from './components/NavBar';
import { BarChart } from '@mui/x-charts/BarChart';
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
        <div className="chartContainer">
            <h5>Presence of Public Parks and Green Spaces</h5>
            <BarChart
              xAxis={[{ scaleType: 'band', data: ['This City', 'Neighbor Average', 'Province Average', 'National Average'] }]}
              series={[
                { data: [4, 8, 9, 3] }
              ]}
              width={650}
              height={400}
              sx={{
                "& .MuiBarElement-root:nth-child(1)": {
                  fill: "#3498DB", // Blue
                },
                "& .MuiBarElement-root:nth-child(2)": {
                  fill: "#2ECC71", // Green
                },
                "& .MuiBarElement-root:nth-child(3)": {
                  fill: "#E67E22", // Orange
                },
                "& .MuiBarElement-root:nth-child(4)": {
                  fill: "#9B59B6", // Purple
                }
              }}
            />
            <h2>Presence of Recreational Facilities</h2>
            <BarChart
              xAxis={[
                  {
                    scaleType: 'band',
                    data: ['This City', 'Neighbor Average', 'Province Average', 'National Average']
                  }
              ]}
              series={[
                { data: [8,6,7,10], stack: 'A', label: 'Community Centers', color: '#FFD700' },
                { data: [4, 3, 1, 5], stack: 'A', label: 'Gyms', color: '#FF5733' },
                { data: [4, 2, 5, 4], stack: 'A', label: 'Swimming Pools', color: '#00BFFF' },
                { data: [2, 8, 1, 3], stack: 'A', label: 'Sport Complexes', color: '#32CD32' },
              ]}
              width={650}
              height={400}
            />
        </div>
        <MapObject setClickLocation={setClickLocation} className="map" />
      </div>
    </div>
  );
}

export default App;