import React from "react";
import styles from "./InputPage.module.css";
import { useGetTLOSAccount } from "../../hooks/useGetTLOSAccount";
//----Componentes del input
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
//---Componentes del botón
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import Stack from "@mui/material/Stack";
//--Componetes de la carta y gird
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

export const InputPage = () => {
  const { data, accountName, loadingAccount, setAccountName, letsSearch } =
    useGetTLOSAccount();

  return (
    <main className={styles.lienzo}>
      <Grid container spacing={1}>
        <Grid item sm={1} md={1} lg={1}></Grid>
        <Grid item xs={12} sm={10} md={10} lg={10} className={styles.li}>
          <Box
            component="form"
            noValidate
            sx={{
              display: "grid",
              gridTemplateColumns: { sm: "5fr 1fr" },
              gap: 2,
            }}
          >
            <ButtonGroup disableElevation variant="contained">
              <TextField
                id="outlined-basic"
                label="Outlined"
                variant="outlined"
                className={styles.campoTXT}
                onChange={(e) => setAccountName(e.target.value)}
                value={accountName}
              />

              <Stack direction="row" spacing={1}>
                <Button
                  variant="contained"
                  endIcon={<SendIcon />}
                  onClick={letsSearch}
                  className={styles.boton}
                >
                  Next
                </Button>
              </Stack>
            </ButtonGroup>
          </Box>

          <Typography sx={{ fontSize: 16 }} color="text.secondary" gutterBottom>
            {loadingAccount === false
              ? data.account.account_name
              : "loading..."}
          </Typography>
        </Grid>
        <Grid item sm={1} md={1} lg={1}></Grid>
      </Grid>
    </main>
  );
};
