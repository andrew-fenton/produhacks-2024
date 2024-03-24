import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
// import faker from 'faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function LineChart(){

const data={ labels:['January', 'February', 'March', 'April', 'May', 'June', 'July'],
datasets: [{
      data:[10,8,4,7,2],
      backgroundColor:"transparent",
      borderColor: 'rgb(255, 99, 132)'

}]
}

const options = {
  Plugins:{
    legend: false
  },
  scales:{
    x:{
      grid:{
        display: false
      }
    }
  }
}

return(
  <>
  <div style={{width:'500px',height:'500px',marginLeft:"20px"}}>
    <Line data={data} options={options}></Line>
  </div>
  </>
)



}

export default LineChart;