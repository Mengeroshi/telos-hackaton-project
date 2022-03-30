import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { ContextApp } from "../../context/Context";

ChartJS.register(ArcElement, Tooltip, Legend);



export const DoughnutChart = () => {
  const [state] = React.useContext(ContextApp);
  const { tokens } = state;
  const options = {
    cutout: "80%",
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
        
         bodyFont:{
           //family: 'Dosis',
           size: 15,
        },
        // titleFont:{
        //   family: 'Dosis'
        // },
        titleAlign: "center",
        backgroundColor: "rgba(245, 56, 158, 0.5)",
        titleColor: "#1EB9FC",
        displayColors: false,
        bodyColor: "white",
        footerAlign: "center",
        callbacks:{
          label: (context) =>{
            return `$${context.formattedValue} USD` 
          },
          footer:(ctx) =>{
            let label = ctx[0].label;
            let index = ctx[0].dataIndex;
            let amount = ctx[0].dataset.tokenAmount[index];
            return `${amount} ${label}`
          }
        }
      },
    },
  };

  let labels = [];
  let tokenPrices = [];
  let bgColors = [];
  let tokenAmount = [];

  tokens.forEach((tokenItem) => {
    const { token, priceUSD, colorList, amount } = tokenItem;
    const mainColor = token === "TLOS" ? "hsl(256, 100%, 65%)" : colorList[1];
    labels.push(token);
    tokenPrices.push(token === "TLOS" ? 0.85 * amount : priceUSD * amount);
    bgColors.push(mainColor);
    tokenAmount.push(amount);
  });

  const data = {
    labels,
    datasets: [
      {
        label: "price",
        data: tokenPrices,
        backgroundColor: bgColors,
        borderWidth: 0,
        tokenAmount,
      },
    ],
  };

  return <Doughnut data={data} options={options} />;
};
