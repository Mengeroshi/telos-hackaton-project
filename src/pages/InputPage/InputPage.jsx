import React from "react";
import styles from './InputPage.module.css';
import { useGetTLOSAccount } from "../../hooks/useGetTLOSAccount";

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
      <h1>
        {loadingAccount === false ? data.account.account_name : "loading..."}
      </h1>
    </main>
  );
};
