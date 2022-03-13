import React from "react";

export const ContextApp = React.createContext();

const initialState = {
  accountName: "",
  data: { account: { account_name: "" } },
  loadingAccount: true,
  url: "",
};

const reducerObject = (state, payload) => {
  return {
    WRITE_ACCOUNT_NAME: {
      ...state,
      accountName: payload,
    },
    SET_SEARCH: {
      ...state,
      url: `https://telos.caleos.io/v2/state/get_account?account=${state.accountName}`,
    },
    FETCH_DATA_SUCCESS: {
      ...state,
      data: payload,
      loadingAccount: false,
    },
    // FETCH_DATA_ERROR: {
    //   ...state,
    //   data: { account: { account_name: "" } },
    //   error: "ERROR HUMANO. AVERIGUELO",
    // },
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

const fetchData = async (url) => {
  const response = await fetch(url);
  const dataRes = await response.json();
  return dataRes;
};

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  React.useEffect(() => {
      
      fetchData(state.url)
        .then((data) => dispatch({ type: "FETCH_DATA_SUCCESS", payload: data }))
        //.catch((e) => dispatch({ type: "FETCH_DATA_ERROR" }))
  }, [state.url]);

  return (
    <ContextApp.Provider value={[state, dispatch]}>
      {children}
    </ContextApp.Provider>
  );
};
