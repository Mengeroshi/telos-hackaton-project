import React from "react";
import styles from "./InputSearch.module.css";
import SearchIcon from "@mui/icons-material/Search";

export default function InputSearch({placeholder, onClick, value, onChange}) {
  return (
    <div className={styles.searchBox}>
      <button 
        className={styles.btnSearch}
        onClick={onClick}
      >
        <SearchIcon />
      </button>
      <input
        type="text"
        className={styles.inputSearch}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};
