import React from "react";
import styles from "./InputPage.module.css";
import { useGetTLOSAccount } from "../../hooks/useGetTLOSAccount";

import Typography from "@mui/material/Typography";
import InputSearch from "../../components/InputSearch/InputSearch.jsx";

export const InputPage = () => {
  const { data, accountName, loadingAccount, setAccountName, letsSearch } =
    useGetTLOSAccount();


  return (
    <main className={styles.lienzo}>
      <div className={styles.divPadre}>
        <div className={styles.header}>NameApp</div>

        <div className={styles.content}>
          <div className={styles.logo}>LOGO</div>

          <InputSearch
            placeholder={"Telos Username"}
            onClick={letsSearch}
            value={accountName}
            onChange={setAccountName}
          />

          <Typography
            sx={{ fontSize: 25 }}
            color="white"
            paddingTop="20px"
            gutterBottom
          >
            {loadingAccount === false
              ? data.account.account_name
              : "loading..."}
          </Typography>
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
