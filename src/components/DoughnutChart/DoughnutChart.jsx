import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import {randomColor} from '../../utils/randomColor';
import { ContextApp } from "../../context/Context";
import styles from './DoughnutChart.module.css';
ChartJS.register(ArcElement, Tooltip, Legend);


export const DoughnutChart = ({tokenPrices, labels}) => {

  console.log(labels);
  console.log(tokenPrices);

  

   //const [state, dispacht] = React.useContext(ContextApp);
   //const {tokenList} = state;}


//   const labelsFormatted  = labels.map(token => 
//     token.replace("telos","Wrapped TLOS")
//     .replace("bitcoin","Wrapped Bitcoin")
//     .replace("matic-network", "Polygon")
//     .replace("usd-coin", "USD Coin")
//     .replace("avalanche-2", "Avalanche")
//     .toLowerCase()
//     .replace(/\s/g, "")
//   )


//   //  const junk = tokenList.filter(token =>{
//   //    const  tokenName = token.name.toLowerCase();
//   //    return labelsFormatted.includes(tokenName);
//   //  })


//    let  amountsObject = tokenList.reduce((obj, item) => ({...obj, [item.name.toLowerCase().replace(/\s/g, "")]:{
//                                             ['balance'] : item.balance,
//    } }) ,{});

// console.log(tokenPrices);
// console.log(labelsFormatted);
// console.log(amountsObject)

//    const tokensValue = labelsFormatted.map( (token, i) =>{
//      const value = tokenPrices[i] * amountsObject[token].balance;
//      return value
//   } )

//    console.log(tokensValue);
   

//    //console.log(object);

//   //  console.log(labelsFormatted)
//   //  console.log(junk); 



  

  const options = {
    cutout: "80%",
    plugins: {
      legend: {
        display: true,
  
        labels: {
          font: {
            size: 10,
            family: 'var(--tipografia)',
            
          },
          color: "white",
          padding:5
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
        bodyFont:{
          family: 'Space Mono',
          size:15,
        },
        footerFont:{
          family: 'Space Mono',
          size:15,
        },
        titleAlign: "center",
        backgroundColor: "hsla(270, 50%, 40%, .8)",
        titleColor: "#1EB9FC",
        displayColors: false,
        bodyColor: "#FF4A76",
        footerAlign: "center",
        callbacks:{
          label: (context) =>{
            return `$${context.raw} USD` 
          },
           footer:(ctx) =>{
             let label = ctx[0].label;
             return `${label.toUpperCase()}`
           }
        }
      },
    },
  };

  const data = {
    labels,
    datasets: [
      {
        label: "price",
        data: tokenPrices,
        backgroundColor: Array.from({length: labels.length}, () => randomColor()),
        borderWidth: 0,
      },
    ],
  };

  return(
    <div className={styles.container}>
       <Doughnut data={data} options={options} />
       {
         tokenPrices.length ===0 
         ?null
         : (
          <div className={styles.absolute}>
            <h2>Assets</h2>
            <h3> {tokenPrices.reduce((a, b) => a+b)} USD </h3>
          </div> 
         )
       }
    </div>
  )
};



// let nulish;

// try{
//   const tokensWorth = tokensValue.reduce((a, b) => a+b);
//  nulish = tokensWorth;
// }catch(e){
//   console.log(e);
// }
// setNeVal(nulish);  