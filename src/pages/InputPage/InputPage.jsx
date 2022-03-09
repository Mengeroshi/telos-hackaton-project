import React from "react";
import styles from "./InputPage.module.css";
import { useGetTLOSAccount } from "../../hooks/useGetTLOSAccount";
//----Componentes del input
import { alpha, styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
//---Componentes del botón
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import Stack from "@mui/material/Stack";
//--Componetes de la carta y gird
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

const CssTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "green",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "green",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "blue",
    },
    "&:hover fieldset": {
      borderColor: "yellow",
    },
    "&.Mui-focused fieldset": {
      borderColor: "green",
    },
  },
});

export const InputPage = () => {
  const { data, accountName, loadingAccount, setAccountName, letsSearch } =
    useGetTLOSAccount();

  return (
    <main className={styles.lienzo}>
      <Grid container spacing={1}>
        <Grid item sm={1} md={1} lg={1}></Grid>
        <Grid item xs={12} sm={10} md={10} lg={10}>
          <Box
            component="form"
            noValidate
            sx={{
              display: "grid",
              gridTemplateColumns: { sm: "5fr 1fr" },
              gap: 2,
            }}
          >
            <CssTextField
              label="Custom CSS"
              id="custom-css-outlined-input"
              type="text"
              onChange={(e) => setAccountName(e.target.value)}
              value={accountName}
            />

            <Stack direction="row" spacing={1}>
              <Button
                variant="contained"
                endIcon={<SendIcon />}
                onClick={letsSearch}
              >
                Next
              </Button>
            </Stack>

            <Typography
              sx={{ fontSize: 16 }}
              color="text.secondary"
              gutterBottom
            >
              {loadingAccount === false
                ? data.account.account_name
                : "loading..."}
            </Typography>
          </Box>
        </Grid>
        <Grid item sm={1} md={1} lg={1}></Grid>
      </Grid>
    </main>
  );
};
