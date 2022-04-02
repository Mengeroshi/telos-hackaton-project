import React from "react";
// import { randomGradientAlpha } from "../utils/randomGradientAlpha";
// import { randomPrice } from "../utils/randomPrice";
// import Web3 from "web3";
// import { getTLOSBalance } from "../utils//webjs/getTLOSBalance";
//import { getERCBalanceList } from "../utils/webjs/getERCBalanceList";
//import {getLatestBlocksWithTxs} from '../utils/webjs/getLatestBlocksWithTxs';

export const ContextApp = React.createContext();

let TLOSAddress = '0xeb29dd1ff741a8529a57cb7900e91cdc01f4f36f';

const initialState = {
  accountName: "",
  balance:0,
  loadingAccount: false,
  url: "https://telos.caleos.io/v2/state/get_account?account=",
  error: "",
  tokenList: [],
};

const reducerObject = (state, payload) => {
  return {
    WRITE_ACCOUNT_NAME: {
      ...state,
      accountName: payload,
    },
    FETCH_BALANCE:{
      ...state,
      balance: payload,
      error:"",
    },
    FETCH_TOKEN_LIST:{
      ...state,
      tokenList: payload,
      loadingAccount: false,
    },
    FETCH_DATA_LOADING: {
      ...state,
      loadingAccount: true,
    },
    FETCH_DATA_ERROR: {
      ...state,
      error: "Invalid Address",
      loadingAccount: false,
      tokenList:[],
    },
    RESTART_STATE: {
      ...initialState
    },
  };
};

const reducer = (state, action) => {
  if (reducerObject(state)[action.type]) {
    return reducerObject(state, action.payload)[action.type];
  } else {
    console.log(`La accion "${action.type}" no existe.`);
    return state;
  }
};

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  return (
    <ContextApp.Provider value={[state, dispatch]}>
      {children}
    </ContextApp.Provider>
  );
};

// React.useEffect(() => {

//     fetchData(state.url)
//       .then((data) => dispatch({ type: "FETCH_DATA_SUCCESS", payload: data }))
//       .catch((e) => dispatch({ type: "FETCH_DATA_ERROR" }))
// }, [state.url]);





    // FETCH_DATA_SUCCESS: {
    //   ...state,
    //   data: payload,
    //   loadingAccount: false,
    //   error: "",
    //   tokens: payload?.tokens?.map((token) => {
    //     const tokenObj = {
    //       token: token.symbol,
    //       amount: token.amount,
    //       colorList: randomGradientAlpha(),
    //       priceUSD:randomPrice(),
    //     };
    //     return tokenObj;
    //   }),
    //   txs: payload?.actions
    //     ?.filter((item) => item.act.name === "transfer")
    //     .map((tx) => {
    //       const txObj = {
    //         date: tx.timestamp,
    //         type:
    //           tx.act.data.to === payload?.account?.account_name
    //             ? "receive"
    //             : "send",
    //         from: tx.act.data.from,
    //         to: tx.act.data.to,
    //         ticker: tx.act.data.symbol,
    //         amount: tx.act.data.amount,
    //       };
    //       return txObj;
    //     }),
    // },



    

//console.log(TLOSAddress.length)

//getLatestBlocksWithTxs(1000).then(console.log);

//web3.eth.getTransactionCount(TLOSAddress).then(console.log)

//getERCBalanceList(TLOSAddress).then(console.log);
//getTLOSBalance(TLOSAddress).then(console.log)