import React from "react";
import { ContextApp } from "../../context/Context";
import styles from "./InputPage.module.css";
import Typography from "@mui/material/Typography";
import InputSearch from "../../components/InputSearch/InputSearch.jsx";
import { useNavigate } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/icons/logoFinal.svg";
import { getERCBalanceList } from "../../utils/webjs/getERCBalanceList";
import { getTLOSBalance } from "../../utils/webjs/getTLOSBalance";

export const InputPage = () => {
  const [state, dispatch] = React.useContext(ContextApp);
  const { accountName, balance, loadingAccount, error } = state;
  let navigate = useNavigate();

  const onWrite = (payload) =>
    dispatch({ type: "WRITE_ACCOUNT_NAME", payload: payload });
  const onFetchTokenList = (payload) => {
    dispatch({ type: "FETCH_TOKEN_LIST", payload: payload });
    navigate('/portfolio');
  };
  const onFetchBalance = (payload) =>
    dispatch({ type: "FETCH_BALANCE", payload: payload });

  const onFetchLoading = () => dispatch({ type: "FETCH_DATA_LOADING" });
  const onFetchError = (payload) =>{
    console.log(payload);
    dispatch({ type: "FETCH_DATA_ERROR", payload: payload });
  }

  const onHandleChange = (e) => {
    if (e.length > 42) return;
    onWrite(e);
  };

  const onHandleClick = () => {
    onFetchLoading();

    getTLOSBalance(accountName)
      .then(
        (data) => onFetchBalance(data),
        () => onFetchError("Invalid Address")
      )
      .then(
        () => getERCBalanceList(accountName)
          .then(
            (data) => onFetchTokenList(data),
            (errorMessage) => onFetchError(errorMessage)
        )
      );
  };

  return (
    <main className={styles.lienzo}>
      <div className={styles.divPadre}>
        <div>
          <p className={styles.nameApp}>Squirrelfi</p>
        </div>

        <div className={styles.content}>
          <div>
            <Logo className={styles.LogoProp} />
          </div>

          <InputSearch
            placeholder={"Telos Username"}
            onClick={onHandleClick}
            value={accountName}
            onChange={onHandleChange}
          />

          <Typography
            sx={{ fontSize: 18 }}
            color="white"
            paddingTop="20px"
            gutterBottom
          >
            {loadingAccount ? "Loading..." : error ? error : balance}
          </Typography>

          <p className={styles.leyenda}>
            Connect to your TELOS wallet with one click!
          </p>
        </div>

        <div className={styles.pie}>
          <div>
            <p>About NameApp</p>
          </div>
          <div>
            <p>Privacity | Terms</p>
          </div>
        </div>
      </div>
    </main>
  );
};

// const fetchData = async (url) => {
//   try {
//     const response = await fetch(url);
//     const dataRes = await response.json();

//     if (response.status !== 200) {
//       return Promise.reject(dataRes.message);
//     } else {
//       return dataRes;
//     }
//   } catch (e) {
//     return new Error(`ERROR HUMANO ${e}`);
//   }
// };
