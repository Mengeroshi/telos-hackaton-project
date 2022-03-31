import React from "react";
import Box from "@mui/material/Box";
import styles from "./DataTable.module.css";
import {DataGrid} from '@mui/x-data-grid';
import { ContextApp } from "../../context/Context";



const cellValue = (params) =>{
  return(
    <div className={styles.cellValueContainer}>
      <div>{params.value.amount}</div>
      <div>{params.value.ticker}</div>
    </div>
  )
}

const cellOwners = (params) =>{
  return(
    <div className={styles.cellOwnersContainer}>
      <div>{params.value.from}</div>
      {">"}
      <div>{params.value.to}</div>
    </div>
  )
}

  const columns = [
    {field: "id", hide: true, flex: 1, },
    {field: "date", headerName: "Date", flex: 1, cellClassName: 'theme--cell',},
    {field: "assets", headerName: "Assets", flex: 1, cellClassName: 'theme--cell',},
    {field: "type", headerName: "Type", flex: 1, cellClassName: 'theme--cell',},
    {field: "owners", headerName: "Owners", flex: 1, cellClassName: 'theme--cell', renderCell: cellOwners},
    {field: "value", headerName: "Value",flex: 1, cellClassName: 'theme--cell', renderCell: cellValue},
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
      sx={{ 
        width: "100%", 
        overflow: "hidden", 
        background: "transparent", 
        border: "none", 
        height: 500,
        '& .theme--cell': {
          borderBottom: "none",
        },
      }}
    >
      <DataGrid
        columns={columns}
        rows={rows}
        disableColumnMenu={true}
        disableSelectionOnClick
        sx={{ 
          color: "white",
          border: "none",
          fontFamily: "var(--tipografia)",
          overflowY: "auto",
          scrollbarColor: "var(--bgScroll) #0e0d0d00",
          scrollbarWidth: "thin"
        }}
      />
    </Box>
  );
}