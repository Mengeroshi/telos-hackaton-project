import React from "react";
import styles from './InputPage.module.css';
import { useGetTLOSAccount } from "../../hooks/useGetTLOSAccount";
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

export const InputPage = () => {
  const { 
      data, 
      accountName, 
      loadingAccount, 
      setAccountName, 
      letsSearch 
    } = useGetTLOSAccount();

  return (
    <main className={styles.lienzo}>
      <input
        type="text"
        onChange={(e) => setAccountName(e.target.value)}
        value={accountName}
      />
      <button onClick={letsSearch}>NEXT</button>
      <h1>haciendo el primer cambio en una nueva rama</h1>
      <h2>probando material IU</h2>
      <Stack direction="row" spacing={1}>
        <Chip label="Chip Filled" />
        <Chip label="Chip Outlined" variant="outlined" />
      </Stack>

      <h1>
        {loadingAccount === false ? data.account.account_name : "loading..."}
      </h1>
    </main>
  );
};
