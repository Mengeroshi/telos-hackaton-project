import React from "react";
import styles from "./Portfolio.module.css";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { LineChart } from "../../components/LineChart/LineChart";
import { DoughnutChart } from "../../components/DoughnutChart/DoughnutChart";
import Navbar from "../../components/Nav/Navbar.jsx";
import Tablas from "../../components/Table/Tabla.jsx";

/*  Elemento creado solo para simular un listado de Tokens
    IMPORTANTE: Eliminar esto de la versión final 
*/
const elements = [
  "Token X 30%",
  "Token X 30%",
  "Token X 30%",
  "Token X 30%",
  "Token X 30%",
  "Token X 30%",
  "Token X 30%",
  "Token X 30%",
  "Token X 30%",
  "Token X 30%",
  "Token X 30%",
  "Token X 30%",
  "Token X 30%",
  "Token X 30%",
  "Token X 30%",
  "Token X 30%",
  "Token X 30%",
  "Token X 30%",
];

export const Portfolio = () => {
  return (
    <main>
      <div>
        <Navbar />
      </div>

      <Container maxWidth="xlg">
        <div>
          <Box sx={{ height: "100vh", marginBottom: "300px" }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <div className={styles.EstiloPrecio}>
                  <span>Portfolio</span>
                  <p>$1,000,000.00 USD</p>
                </div>
              </Grid>

              <Grid item xs={12} sm={12} md={8} lg={8} xl={8}>
                <div className={styles.EstiloGrafi}>
                  <p className={styles.Titulos}>TELOS</p>
                  <LineChart />
                </div>
                <div className={styles.EstiloTabla}>
                  <p className={styles.Titulos}>Historial</p>
                  <Tablas />
                </div>
              </Grid>

              <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                <div className={styles.EstiloTokenGrafi}>
                  <p className={styles.Titulos}>Assets</p>
                  <div className={styles.SizeGrafi}>
                    <DoughnutChart />
                  </div>
                </div>

                <div className={styles.EstiloToken}>
                  <div className={styles.SizeToken}>
                    <p>TLOS 60%</p>
                    <p>Token A 20%</p>

                    {/* Loop creado solo para simular un listado de tokens */}
                    {elements.map((value, index) => {
                      return <p key={index}>{value}</p>;
                    })}

                  </div>
                </div>
              </Grid>

              <Box
                className={styles.Estilofooter}
                sx={{ display: { xs: "none", sm: "none", md: "block" } }}
              >
                <div>
                  <p>About Squirrelfi</p>
                  <p>© 2022 Squirrelfi</p>
                </div>
                <div>
                  <p>Privacity | Terms</p>
                </div>
              </Box>
            </Grid>
          </Box>
        </div>
      </Container>
    </main>
  );
};
