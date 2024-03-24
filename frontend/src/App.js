import React, { useEffect, useState } from 'react';
import './App.css';
import MapObject from './components/MapObject';
import NavBar from './components/NavBar';
// import BarChart1 from './components/BarChart1';
import { BarChart } from '@mui/x-charts/BarChart';

function App() {
  const [clickLocation, setClickLocation] = useState("");

  useEffect(() => {
    console.log(clickLocation);
  }, [clickLocation]);

  return (
    <div className="app-container">
      <NavBar />
      <div className="contentContainer">
        <div className="barChartContainer">
          {/* <BarChart1
            customDataset={{
              data: [18, 15, 20, 26], // Example data values for "This City", "Neighbor Average", "Province Average", "National Average"
            }}
            customLabels={['This City', 'Neighbor Average', 'Province Average', 'National Average']}
            chartTitle="Public Park & Green Spaces Comparison"
          /> */}
          <div style={{ width: '100%' }}>
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
          </div>
        </div>
        <MapObject setClickLocation={setClickLocation} className="map" />
      </div>
    </div>
  );
}

export default App;