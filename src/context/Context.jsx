import React from "react";
import { randomGradientAlpha } from "../utils/randomGradientAlpha";
import { randomPrice } from "../utils/randomPrice";
import { getERCBalanceList } from "../utils/getERCBalanceList";
import Web3 from "web3";
export const ContextApp = React.createContext();


let web3 = new Web3('https://mainnet.telos.net/evm');


let TLOSAddress = '0xeb29dd1ff741a8529a57cb7900e91cdc01f4f36f';

getERCBalanceList(TLOSAddress).then(console.log);




























const initialState = {
  accountName: "",
  data: { account: { account_name: "" } },
  loadingAccount: false,
  url: "https://telos.caleos.io/v2/state/get_account?account=",
  error: "",
  tokens: [],
};

const reducerObject = (state, payload) => {
  return {
    WRITE_ACCOUNT_NAME: {
      ...state,
      accountName: payload,
    },
    FETCH_DATA_SUCCESS: {
      ...state,
      data: payload,
      loadingAccount: false,
      error: "",
      tokens: payload?.tokens?.map((token) => {
        const tokenObj = {
          token: token.symbol,
          amount: token.amount,
          colorList: randomGradientAlpha(),
          priceUSD:randomPrice(),
        };
        return tokenObj;
      }),
      txs: payload?.actions
        ?.filter((item) => item.act.name === "transfer")
        .map((tx) => {
          const txObj = {
            date: tx.timestamp,
            type:
              tx.act.data.to === payload?.account?.account_name
                ? "receive"
                : "send",
            from: tx.act.data.from,
            to: tx.act.data.to,
            ticker: tx.act.data.symbol,
            amount: tx.act.data.amount,
          };
          return txObj;
        }),
    },
    FETCH_DATA_LOADING: {
      ...state,
      loadingAccount: true,
    },
    FETCH_DATA_ERROR: {
      ...state,
      data: { account: { account_name: "" } },
      error: payload,
      loadingAccount: false,
    },
    RESTART_STATE: {
      ...initialState,
      data: { account: { account_name: "add your TELOS Account" } },
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
