import React from "react";

export const ContextApp = React.createContext();

const initialState = {
  accountName: "",
  data: { account: { account_name: "" } },
  loadingAccount: false,
  url: "https://telos.caleos.io/v2/state/get_account?account=",
  error: "",
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
    RESTART_STATE:{
      ...initialState,
      data: { account: { account_name: "add your TELOS Account" } }
    } 
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