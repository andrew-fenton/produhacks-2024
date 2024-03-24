import React, { useEffect, useState } from 'react';
import './App.css';
import MapObject from './components/MapObject';
import NavBar from './components/NavBar';
import { BarChart } from '@mui/x-charts/BarChart';
// import LineGraph from './components/LineGraph';
 

function App() {
  const [clickLocation, setClickLocation] = useState("");

  function getRandomNum(max) {
    return Math.floor(Math.random() * max);
  }

  useEffect(() => {
    console.log(clickLocation);
  }, [clickLocation]);

  const barChartData = {
    "Surrey": [18, 15, 20, 26],
    "Coquitlam": [9, 13, 20, 26],
    "Burnaby": [11, 12, 20, 26],
    "Richmond": [21, 15, 20, 26],
    "Delta": [19, 21, 20, 26],
    "Langley": [7, 20, 20, 26],
    "White Rock": [8, 19, 20, 26],
  }

  const stackedChartData = [
    [8, 6, 7, 10],
    [4, 3, 1, 5],
    [4, 2, 5, 4],
    [2, 8, 1, 3]
  ];

  return (
    <div className="app-container">
      <NavBar />
      <div className="contentContainer">
        <div className="chartContainer">
        {clickLocation &&
          <>
            <h2>Presence of Public Parks and Green Spaces</h2>
            <BarChart
              xAxis={[{ scaleType: 'band', data: [clickLocation, 'Neighbor Average', 'Province Average', 'National Average'] }]}
              series={[
                { data: barChartData[clickLocation] }
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
            {/* <LineGraph /> */}
            <h2>Presence of Recreational Facilities</h2>
            <BarChart
              xAxis={[
                  {
                    scaleType: 'band',
                    data: ['This City', 'Neighbor Average', 'Province Average', 'National Average']
                  }
              ]}
              series={[
                { data: stackedChartData[getRandomNum(stackedChartData.length - 1)], stack: 'A', label: 'Community Centers', color: '#FFD700' },
                { data: stackedChartData[getRandomNum(stackedChartData.length - 1)], stack: 'A', label: 'Gyms', color: '#FF5733' },
                { data: stackedChartData[getRandomNum(stackedChartData.length - 1)], stack: 'A', label: 'Swimming Pools', color: '#00BFFF' },
                { data: stackedChartData[getRandomNum(stackedChartData.length - 1)], stack: 'A', label: 'Sport Complexes', color: '#32CD32' }
              ]}
              width={650}
              height={400}
            />
          </>
        }
        </div>
        <MapObject setClickLocation={setClickLocation} className="map" />
      </div>
    </div>
  );
}

export default App;