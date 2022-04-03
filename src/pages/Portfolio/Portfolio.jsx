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

export const Portfolio = () => {
  const [state] = React.useContext(ContextApp);
  const {balance, tokenList, accountName} = state;
  const { prices, loadingPrices } = useFetchTlosPrices();

  const lastPrice = prices[prices?.length - 1]?.price || 100;
 
  const netWorth = (balance * lastPrice).toFixed(2);

  
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
                  <div>
                    <span>Portfolio</span>
                    <h1>${netWorth} USD</h1>
                  </div>
                </Grid>
                <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                  <div className={styles.EstiloAdd}>
                    <span>{accountName}</span>
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
                  {/* <DataTable/> */}
                </div>
              </Grid>

              <Grid item xs={12} sm={12} md={4.05} lg={4} xl={4}>
                <div className={styles.EstiloTokenGrafi}>
                  <div className={styles.SizeGrafi}>
                  <h2 className={styles.Titulos}>Assets</h2>
                    {/* <DoughnutChart /> */}
                  </div>
                </div>

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
