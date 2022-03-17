import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import styles from "./DoughnutChart.module.css";

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  datasets: [
    {
      label: 'Tokens',
      data: [5, 19, 3, 5, 15, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'purple',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
};


const options = {
    cutout: '80%',
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
  };


export const DoughnutChart = () =>{
    return(
        <Doughnut data={data} options={options} className={styles.sizeGrafi}/>
    )
}