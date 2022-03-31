import React from "react";
import Box from "@mui/material/Box";
import styles from "./DataTable.module.css";
import { DataGrid } from "@mui/x-data-grid";
import { ContextApp } from "../../context/Context";
import { timeFormat } from "d3-time-format";
import { randomGradientAlpha } from "../../utils/randomGradientAlpha";
import { ReactComponent as TLOSIcon } from '../../assets/icons/TLOS.svg';

const formatDate = timeFormat("%d/%m/%y");

const cellType = (params) =>{

  return(
    <div className={styles[params.value]}>
      {params.value}
    </div>
  )
}

const cellValue = (params) => {
  return (
    <div className={styles.cellValueContainer}>
      <div>{params.value.amount}</div>
      <div>{params.value.ticker}</div>
    </div>
  );
};

const cellOwners = (params) => {
  return (
    <div className={styles.cellOwnersContainer}>
      <div>{params.value.from}</div>
      <div className={styles.tri}></div>
      <div>{params.value.to}</div>
    </div>
  );
};

export const DataTable = () => {
  const [state] = React.useContext(ContextApp);
  const { txs, tokens } = state;

  let object = tokens.reduce(
    (obj, item) =>
      Object.assign(obj, { [item.token]: { ["colorList"]: item.colorList } }),
    {}
  );

  ///console.log(object)

  const coins = (params) => {
    //console.log(params.value)
    const colorList = object[params?.value]?.colorList || randomGradientAlpha();
    const gradient = `${colorList[0]}, ${colorList[1]}`;

    return (
      <>
        {params.value === "TLOS" 
        ? (<div className={styles.TLOS}><TLOSIcon/></div>
        ) : (
          <div
            className={styles.sphere}
            style={{ background: `linear-gradient(${gradient})` }}
          >
            <div className={styles.questionMark}>?</div>
          </div>
        )}
      </>
    );
  };

  const columns = [
    { field: "id", hide: true },
    { field: "date", headerName: "Date", flex: .7 },
    {
      field: "assets",
      headerName: "Assets",
      flex: .5,
      align: "center",
      headerAlign: "center",
      renderCell: coins,
    },
    { field: "type", headerName: "Type", flex: 1,align: "center",headerAlign: "center", renderCell: cellType },
    { field: "owners", headerName: "Owners", flex: 1,align: "center",headerAlign: "center", renderCell: cellOwners },
    { field: "value", headerName: "Value", flex: 1,align: "center",headerAlign: "center",  renderCell: cellValue },
  ];

  const rows = txs.map((tx, i) => {
    const txObj = {
      id: i,
      date: formatDate(new Date(tx.date)),
      assets: tx.ticker,
      type: tx.type,
      owners: {
        from: tx.from,
        to: tx.to,
      },
      value: {
        amount: (tx.amount).toFixed(2),
        ticker: tx.ticker,
      },
    };
    return txObj;
  });

  return (
    <Box
      sx={{
        width: "100%",
        overflow: "hidden",
        background: "transparent",
        border: "none",
        height: 500,
      }}
    >
      <DataGrid
        columns={columns}
        rows={rows}
        disableColumnMenu={true}
        disableSelectionOnClick
        hideFooter={true}
        classes={{
          root: styles.root,
        }}
      />
      <div className={styles.Estilonivel}></div>
    </Box>
  );
};
