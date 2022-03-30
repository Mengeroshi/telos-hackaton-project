import React from "react";
import styles from "./LineChart.module.css";

import { ReactComponent as TLOSIcon } from '../../assets/icons/TLOS.svg';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);



const options = {
  elements:{
    point:{
      radius:0   }
  },
  plugins: {
    legend: {
      display: false,
      labels: {
        font: {
          size: 100,
          // family: 'Dosis'
        },
      },
    },
    tooltip: {
      titleFont:{
        family: 'Space Mono',
        font: 12,
      },
      bodyFont:{
        family: 'Space Mono',
        size:20,
      },
      titleColor: "white",
      bodyColor: "#FF4A76",
      // :{
      //   family: 'Dosis'
      // },
      titleAlign: "center",
      backgroundColor: "hsla(270, 50%, 40%, .8)",
      displayColors: false,
    },
  },
  scales: {
    x: {
      display: false,
      grid: { display: false },
    },
    y: {
      display: false,
      grid: { display: false },
      grace: "70%",
      beginAtZero: false,
    },
  },
  animations: {
    tension: {
      duration: 2000,
      easing: "linear",
      from: 0.2,
      to: 0.6,
      loop: true,
    },
  },
  interaction: {
    intersect: false,
    mode: "index",
  },
};

export const LineChart = ({loading, dataPrices, amount=1, lastPrice}) => {
  let dataList = [];
    let labelList = [];

    dataPrices.forEach((item, i = 2) => {
      if (i % 6 === 0) {
        dataList.push(item.price * amount );
        labelList.push(item.date);
      }
    });


  
  const data = {
    labels:labelList,
    datasets: [
      {
        label: "",
        data: dataList,
        backgroundColor: "#FF4A76",
        borderColor: "#FF4A76",
        tension: 0.25,
        borderWidth: 5,
      },
    ],
  };


  return (
    <div className="container-fluid">
      <div className={styles.item}>
        { loading 
        ? "loading"
        :(
          <div>
            <Line data={data} options={options} />
            <div className={styles.overlay}>
            <TLOSIcon className={styles.TLOSIcon}/>
              <h3>TLOS</h3>
              <h3> -${(lastPrice).toFixed(2)}USD  </h3>
              
            </div>
          </div>
        )
        }
      </div>
    </div>
  );
};
