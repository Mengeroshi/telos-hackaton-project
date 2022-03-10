import React from "react";
import styles from "./InputPage.module.css";
import { useGetTLOSAccount } from "../../hooks/useGetTLOSAccount";

import SearchIcon from "@mui/icons-material/Search";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

export const InputPage = () => {
  const { data, accountName, loadingAccount, setAccountName, letsSearch } =
    useGetTLOSAccount();

  return (
    <main className={styles.lienzo}>
      <div className={styles.divPadre}>
        <div className={styles.header}>NameApp</div>

        <div className={styles.content}>

          <div className={styles.logo}>LOGO</div>

          <div className={styles.searchBox}>
            <button className={styles.btnSearch} onClick={letsSearch}>
              <SearchIcon />
            </button>
            <input
              type="text"
              className={styles.inputSearch}
              placeholder="Token TELOS"
              onChange={(e) => setAccountName(e.target.value)}
              value={accountName}
            />
          </div>

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
          <div><p>About NameApp</p></div>
          <div><p>Privacity | Terms</p></div>
        </div>
      </div>
    </main>
  );
};
