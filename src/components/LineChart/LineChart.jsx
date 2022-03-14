import styles from "./LineChart.module.css";

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

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const data = {
  labels: Array.from({length: 10}, () => Math.floor(Math.random() * 10).toString()),
  datasets: [
    {
      label: 'assad',
      data: Array.from({length: 10}, () => Math.floor(Math.random() * 1000000)),
      backgroundColor: 'purple',
      borderColor: 'purple',
      tension: 0.25,
      borderWidth: 3,
    },
    
  ],
  
}


const options = {
  plugins: {

    legend: {
      display: false,
      labels: {
        font: {
          size: 100,
          // family: 'Dosis'
      }
      },
    },
    tooltip:{
      // bodyFont:{
      //   family: 'Dosis'
      // },
      // titleFont:{
      //   family: 'Dosis'
      // },
      titleAlign:'center',
      backgroundColor: 'hsla(270, 50%, 40%, .8)',
      titleColor: '#1EB9FC',
      displayColors: false,
    }
  },
  scales: {
    x: {
      display: false,
      grid: { display: false },
    },
    y: {
      display: false,
      grid: { display: false },
      grace:'30%',
      beginAtZero: true
    },
  },
  animations: {
    tension: {
      duration: 2500,
      easing: 'linear',
      from: .2,
      to: .6,
      loop: true
    }
  },
  interaction: {
    intersect: false,
    mode: 'index',
  }
};



export const LineChart = () =>{
  return(
    <div className="container-fluid">
          <div className={styles.item}>
          <Line data={data} options={options}/>
          </div>
      </div>
  )
}