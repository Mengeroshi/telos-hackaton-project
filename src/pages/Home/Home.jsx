import React from "react";
import styles from "./Home.module.css";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
//--
import {LineChart} from '../../components/LineChart/LineChart';
import Navbar from "../../components/Nav/Navbar.jsx";
import Tablas from "../../components/Table/Tabla.jsx";

export const Home = () => {
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
                <LineChart/>
              </div>
              <div className={styles.EstiloTabla}>
                <Tablas />
              </div>
            </Grid>

            <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
              <div className={styles.EstiloToken}>Contenedor3</div>
            </Grid>
          </Grid>
        </Box>
      </Container>

      <Box
        component="span"
        sx={{ display: { xs: "none", sm: "none", md: "block" } }}
      >
        <footer className={styles.Estilofooter}>
          <div className={styles.FoooterContent}>Copyright ...</div>
        </footer>
      </Box>
    </main>
  );
};
