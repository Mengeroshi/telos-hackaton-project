import React from "react";
import styles from "./Portfolio.module.css";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { LineChart } from "../../components/LineChart/LineChart";
import { DoughnutChart } from "../../components/DoughnutChart/DoughnutChart";
import Navbar from "../../components/Nav/Navbar.jsx";
import Tablas from "../../components/Table/Tabla.jsx";
import { ContextApp } from "../../context/Context";
import { TokenItem } from "../../components/TokenItem/TokenItem";
import { tlosToStart } from "../../utils/tlosToStart";

export const Portfolio = () => {
  const [state] = React.useContext(ContextApp);
  const {data, tokens} = state;
  console.log(tokens)

  let tokensSorted = tlosToStart(tokens) || tokens;
  
  
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
                <Grid item xs={10} sm={10} md={10} lg={10} xl={10}>
                  <div>
                    <span>Portfolio</span>
                    <h1>$1,000,000.00 USD</h1>
                  </div>
                </Grid>
                <Grid item xs={2} sm={2} md={2} lg={2} xl={2}>
                  <div className={styles.EstiloAdd}>
                    <span>{data.account.account_name}</span>
                  </div>
                </Grid>
              </Grid>

              <Grid item xs={12} sm={12} md={7.5} lg={7.5} xl={8}>
                <div className={styles.EstiloGrafi}>
                  <LineChart />
                </div>
                <div className={styles.EstiloTabla}>
                  <h2 className={styles.Titulos}>Historial</h2>
                  <Tablas />
                </div>
              </Grid>

              <Grid item xs={12} sm={12} md={4.05} lg={4} xl={4}>
                <div className={styles.EstiloTokenGrafi}>
                  {/* <p className={styles.Titulos}>Assets</p> */}
                  <div className={styles.SizeGrafi}>
                    <DoughnutChart />
                  </div>
                </div>

                <div className={styles.EstiloToken}>
                  <div className={styles.SizeToken}>
                    <h2 className={styles.Titulos}>Tokens</h2>
                    {/* Loop creado solo para simular un listado de tokens */}
                    <ul className={styles.TokenList}>
                    {tokensSorted.map((token, i) => {
                      return(
                        <TokenItem 
                          key={i}
                          ticker={token.token}
                          amount={token.amount}
                          gradientList={token.colorList}
                        />
                      ) 
                    })}
                    </ul>
                    
                  </div>
                </div>
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
