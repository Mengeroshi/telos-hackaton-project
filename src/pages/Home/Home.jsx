import React from "react";
import styles from "./Home.module.css";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
//--
//import Grafico from './Grafica/Grafico.jsx';
import Tablas from "./Table/Tabla.jsx";

export const Home = () => {
  return (
    <main>
      <div className={styles.Nav}>Navbar</div>

      <Container maxWidth="xlg">
        <Box sx={{ height: "100vh" }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <div className={styles.EstiloPrecio}>Precio</div>
            </Grid>

            <Grid item xs={12} sm={12} md={8} lg={8} xl={8}>
              <div className={styles.EstiloGrafi}>
                  Contenedor1
                
              </div>
              <div className={styles.EstiloTabla}>
                  <Tablas/>
              </div>
            </Grid>

            <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
              <div className={styles.EstiloToken}>Contenedor3</div>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </main>
  );
};
