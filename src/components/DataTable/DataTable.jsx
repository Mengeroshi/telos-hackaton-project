import React from "react";
import Box from "@mui/material/Box";
import styles from "./DataTable.module.css";
import {DataGrid} from '@mui/x-data-grid';
import { ContextApp } from "../../context/Context";



const cellValue = (params) =>{
  return(
    <div className={styles.cellValueContainer}>
      <div>{params.value.amount}</div>
      <di>{params.value.ticker}</di>
    </div>
  )
}

const cellOwners = (params) =>{
  return(
    <div className={styles.cellOwnersContainer}>
      <div>{params.value.from}</div>
      {">"}
      <di>{params.value.to}</di>
    </div>
  )
}

  const columns = [
    {field: "id", hide: true, flex: 1, },
    {field: "date", headerName: "Date", flex: 1,},
    {field: "assets", headerName: "Assets", flex: 1,},
    {field: "type", headerName: "Type", flex: 1,},
    {field: "owners", headerName: "Owners", flex: 1, renderCell: cellOwners},
    {field: "value", headerName: "Value",flex: 1, renderCell: cellValue},
  ]




export const DataTable = () =>{
  const [state] = React.useContext(ContextApp);
  const {txs} = state;
  

  const rows = txs.map((tx, i) => {
    const txObj = {
      id:i,
      date: tx.date,
      assets: tx.ticker,
      type: tx.type,
      owners:{
        from: tx.from,
        to: tx.to,
      },
      value:{
        amount: tx.amount,
        ticker: tx.ticker,
      }
    }
    return txObj;
  })

  return (
    <Box
      sx={{ width: "100%", overflow: "hidden", background: "transparent", border: "none", height: 500}}
    >
      <DataGrid
        columns={columns}
        rows={rows}
        disableColumnMenu={true}
        disableSelectionOnClick

      />
      <div className={styles.Estilonivel}></div>
    </Box>
  );
}