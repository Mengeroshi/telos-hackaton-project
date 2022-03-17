import React from "react";
import styles from "./Portfolio.module.css";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { LineChart } from "../../components/LineChart/LineChart";
import { DoughnutChart } from "../../components/DoughnutChart/DoughnutChart";
import Navbar from "../../components/Nav/Navbar.jsx";
import Tablas from "../../components/Table/Tabla.jsx";

export const Portfolio = () => {
  return (
    <main>
      <div>
        <Navbar />
      </div>

      <Container maxWidth="xlg">
        <Box sx={{ height: "100vh", marginBottom: "300px" }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <div className={styles.EstiloPrecio}>
                <p>$1,000,000.00 USD</p>
              </div>
            </Grid>

            <Grid item xs={12} sm={12} md={8} lg={8} xl={8}>
              <div className={styles.EstiloGrafi}>
                <p className={styles.prueba}>TELOS</p>
                <LineChart />
              </div>
              <div className={styles.EstiloTabla}>
                <p className={styles.prueba}>Historial</p>
                <Tablas />
              </div>
            </Grid>

            <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
              <div className={styles.EstiloTokenGrafi}>
                <p className={styles.prueba}>Assets</p>
                <div className={styles.prueba2}>
                  <DoughnutChart />
                </div>  
              </div>

              <div className={styles.EstiloToken}>
                write me something...
              </div>
            </Grid>

            <Box
              component="span"
              sx={{ display: { xs: "none", sm: "none", md: "block" } }}
            >
              <footer className={styles.Estilofooter}>
                <div className={styles.FoooterContent}>Copyright ...</div>
              </footer>
            </Box>
          </Grid>
        </Box>
      </Container>
    </main>
  );
};
