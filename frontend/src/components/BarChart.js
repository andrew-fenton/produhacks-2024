import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

function BarChart({ customDataset, customLabels, chartTitle }) {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = document.getElementById('ctx');
    if (ctx) {
      // Check if chartRef.current has a Chart instance
      if (chartRef.current !== null) {
        chartRef.current.destroy(); // Destroy existing chart
      }

      const datasets = [
        {
          label: 'Public Parks & Green Spaces',
          backgroundColor: calculateBackgroundColors(customDataset.data),
          data: customDataset.data,
        },
      ];

      chartRef.current = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: customLabels,
          datasets: datasets,
        },
        options: {
          scales: {
            x: {
              stacked: true,
            },
            y: {
              stacked: true,
            },
          },
          plugins: {
            title: {
              display: true,
              text: chartTitle, // Set the title text
              padding: {
                top: 10,
                bottom: 10
              }
            },
            legend: {
              display: false, // Hide the legend
            },
          },
        },
      });
    }

    // Cleanup function
    return () => {
      if (chartRef.current !== null) {
        chartRef.current.destroy(); // Ensure chart is destroyed on component unmount
      }
    };
  }, [customDataset, customLabels, chartTitle]); // Effect depends on customDataset, customLabels, and chartTitle props

  // Function to calculate background colors based on the dataset values
  const calculateBackgroundColors = (data) => {
    // Clone the data array to avoid modifying the original array
    const sortedData = [...data].sort((a, b) => b - a); // Sort the data array in descending order

    // Loop through the sorted data to assign colors based on position
    return data.map((value) => {
      if (value === sortedData[0]) {
        return '#008000'; // Green for the highest value
      } else if (value === sortedData[1]) {
        return '#62A5D1'; // Blue for the second highest value
      } else if (value === sortedData[2]) {
        return '#FFA500'; // Orange for the third highest value
      } else {
        return '#FF0000'; // Red for the last value
      }
    });
  };

  return (
    <div className="chart-container">
      <canvas id="ctx"></canvas>
    </div>
  );
}

export default BarChart;

