import React from "react";
import styles from "./Portfolio.module.css";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { LineChart } from "../../components/LineChart/LineChart";
import { DoughnutChart } from "../../components/DoughnutChart/DoughnutChart";
import Navbar from "../../components/Nav/Navbar.jsx";
import { DataTable } from "../../components/DataTable/DataTable";
import { ContextApp } from "../../context/Context";
import { TokenItem } from "../../components/TokenItem/TokenItem";
import { useFetchTlosPrices } from "../../hooks/useFetchTlosPrices";
import {useGetCoinGeckoPrices} from '../../hooks/useGetCoinGeckoPrices';
import { useGetTXs } from "../../hooks/useGetTXs";

export const Portfolio = () => {
  const [state] = React.useContext(ContextApp);
  const {balance, tokenList, accountName} = state;
  const { prices, loadingPrices } = useFetchTlosPrices();
  const {tokensPrices, loadingTokensPrices} = useGetCoinGeckoPrices(tokenList);

  const blocksToQuery = 1000;
  const {txs, loadingTxs} = useGetTXs(accountName, blocksToQuery);


  const soloTXs = txs.map( block =>{
    const tx = block.transactions.map(tx => { return {...tx, date: block.timestamp}} );
    
    return tx

  }).flat()

  
  // console.log(soloTXs.filter( tx => tx.from === accountName || tx.to === accountName ) );


const values = Object.values(tokensPrices).map(item => item.usd);
const labels = Object.keys(tokensPrices);


  const lastPrice = prices[prices?.length - 1]?.price || 100;
 
  const netWorth = (balance * lastPrice).toFixed(2);


  const labelsFormatted  = labels.map(token => 
    token.replace("telos","Wrapped TLOS")
    .replace("bitcoin","Wrapped Bitcoin")
    .replace("matic-network", "Polygon")
    .replace("usd-coin", "USD Coin")
    .replace("avalanche-2", "Avalanche")
    .toLowerCase()
    .replace(/\s/g, "")
  )


  let  amountsObject = tokenList.reduce((obj, item) => ({...obj, [item.name.toLowerCase().replace(/\s/g, "")]:{
    ['balance'] : item.balance,
} }) ,{});


const tokensValue = labelsFormatted.map( (token, i) =>{
  const value = values[i] * amountsObject[token].balance;
  return value
} )

tokensValue.push(lastPrice * balance);
labelsFormatted.push("TLOS")


  return (
    <main>
      <div>
        <Navbar />
      </div>

      <Container maxWidth="xlg">
        <div>
          <Box sx={{ height: "100vh", marginBottom: "300px"}}>
            <Grid container spacing={2} sx={{ display: "flex", justifyContent: "center" }}>

              <Grid container className={styles.EstiloPrecio} >
                <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                  {/* <div>
                    <span>Portfolio</span>
                    <h1>${netWorth} USD</h1>
                  </div> */}
                </Grid>
                <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                  <div className={styles.EstiloAdd}>
                  <h3 style={{color:"white"}}> Address</h3>
                    <h2>{accountName}</h2>
                  </div>
                </Grid>
              </Grid>

              <Grid item xs={12} sm={12} md={7.5} lg={7.5} xl={8}>
                <div className={styles.EstiloGrafi}>
                  <LineChart
                    loading={loadingPrices}
                    dataPrices={prices}
                    amount={balance}
                    lastPrice={lastPrice}
                   />
                </div>
                <div className={styles.EstiloTabla}>
                  <h2 className={styles.Titulos}>Historial</h2>
                  {
                    loadingTxs 
                    ?<div> Loading Txs</div> 
                    : soloTXs.length === 0
                    ? <div>You don't have tx in the last {blocksToQuery} blocks</div>
                    : <DataTable txs={soloTXs} tlosPrice={lastPrice}/> 
                  }
                </div>
              </Grid>

              <Grid item xs={12} sm={12} md={4.05} lg={4} xl={4}>
                {
                 Object.keys.length ===0 
                 ? null
                 : (<div className={styles.EstiloTokenGrafi}>
                  <div className={styles.SizeGrafi}>
                  
                    {
                      loadingTokensPrices
                      ? <div> loading</div>
                      : (
                        <DoughnutChart
                        tokenPrices={tokensValue}
                        labels={labelsFormatted} 
                    />
                      )
                    }
                  </div>
                </div>) 
                }

                {
                  tokenList.length === 0
                  ? null
                  :(<div className={styles.EstiloToken}>
                    <div className={styles.SizeToken}>
                    <h2 className={styles.Titulos}>Tokens</h2>
                      {/* Loop creado solo para simular un listado de tokens */}
                      <ul className={styles.TokenList}>
                      {tokenList.map((token, i) => {
                        return(
                          <TokenItem 
                            key={i}
                            ticker={token.ticker}
                            amount={token.balance}
                            logo={token.logo}
                          />
                        ) 
                      })}
                      </ul>
                     
                    </div>
                  </div>)
                }
              </Grid>

              <Grid container className={styles.EstiloFooter}>
                <Grid
                  item
                  lg={9}
                  xl={9}
                  sx={{ display: { xs: "none", sm: "none", md: "block" } }}
                >
                  <p>About Squirrelfi</p>
                  <p>© 2022 Squirrelfi</p>
                </Grid>
                <Grid
                  className={styles.AlingFooter}
                  item
                  lg={3}
                  xl={3}
                  sx={{ display: { xs: "none", sm: "none", md: "block" } }}
                >
                  <p>Privacity | Terms</p>
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </div>
      </Container>
    </main>
  );
};
