import React from "react";
import styles from "./InputSearch.module.css";
import SearchIcon from "@mui/icons-material/Search";

export default function InputSearch({texto, boton, valor, change}) {
  return (
    <div className={styles.searchBox}>
      <button 
        className={styles.btnSearch}
        onClick={boton}
      >
        <SearchIcon />
      </button>
      <input
        type="text"
        className={styles.inputSearch}
        placeholder={texto}
        value={valor}
        onChange={(e) => change(e.target.value)}
      />
    </div>
  );
};
