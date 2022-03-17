import React from "react";
import { ContextApp } from "../../context/Context";
import styles from "./InputPage.module.css";
import Typography from "@mui/material/Typography";
import InputSearch from "../../components/InputSearch/InputSearch.jsx";

export const InputPage = () => {
  const [state, dispatch] = React.useContext(ContextApp);
  const { accountName, data, loadingAccount } = state;

  const onHandleChange = (e) => {
    console.log(e);

    dispatch({ type: "WRITE_ACCOUNT_NAME", payload: e });
  };

  const onHandleClick = () => {
    if(!accountName)return;
    dispatch({ type: "SET_SEARCH" })
}


  return (
    <main className={styles.lienzo}>
      <div className={styles.divPadre}>
        <div className={styles.header}>
          <div className={styles.mainLogo}></div>
          <p className={styles.nameApp}>Squirrelfi</p>
        </div>

        <div className={styles.content}>
          <div className={styles.logo}></div>

          <InputSearch
            placeholder={"Telos Username"}
            onClick={onHandleClick}
            value={accountName}
            onChange={(e) => onHandleChange(e)}
          />

          <Typography
            sx={{ fontSize: 18 }}
            color="white"
            paddingTop="20px"
            gutterBottom
          >
            {
            loadingAccount === false
              ? data.account.account_name
              : "loading..."}
          </Typography>

          <p className={styles.leyenda}>Connect to your TELOS wallet with one click!</p>
        </div>

        <div className={styles.pie}>
          <div>
            <p>About NameApp</p>
          </div>
          <div>
            <p>Privacity | Terms</p>
          </div>
        </div>
      </div>
    </main>
  );
};
