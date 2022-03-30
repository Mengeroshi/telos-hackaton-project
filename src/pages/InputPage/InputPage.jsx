import React from "react";
import { ContextApp } from "../../context/Context";
import styles from "./InputPage.module.css";
import Typography from "@mui/material/Typography";
import InputSearch from "../../components/InputSearch/InputSearch.jsx";
import {useNavigate} from 'react-router-dom';



export const InputPage = () => {
  const [state, dispatch] = React.useContext(ContextApp);
  const { accountName, data, loadingAccount, error } = state;
  let navigate = useNavigate();

  const onWrite = payload => dispatch({ type: "WRITE_ACCOUNT_NAME", payload: payload });
  const onFetchSuccess = payload => {
    dispatch({ type: "FETCH_DATA_SUCCESS", payload: payload });
    navigate('/portfolio');
  }
  const onFetchLoading = () =>  dispatch({ type: "FETCH_DATA_LOADING" });
  const onFetchError = payload => dispatch({ type: "FETCH_DATA_ERROR", payload: payload })
  
  const fetchData = async (url) => {
    try {
      const response = await fetch(url);
      const dataRes = await response.json();

      if (response.status !== 200) {
        return Promise.reject(dataRes.message);
      } else {
        return dataRes;
      }
    } catch (e) {
      return new Error(`ERROR HUMANO ${e}`);
    }
  };


  const onHandleChange = (e) => {
    if (e.length > 12) return;
    onWrite(e);
  };

  const onHandleClick = () => {
    
    onFetchLoading();
    fetchData(`${state.url}${accountName}`)
    .then(
      (data) => onFetchSuccess(data),
      (errorMessage) => onFetchError(errorMessage)
    );
  };

  return (
    <main className={styles.lienzo}>
      <div className={styles.divPadre}>
        <div className={styles.header}>
          <div className={styles.mainLogo}></div>
          <p className={styles.nameApp}>Squirrelfi</p>
        </div>

        <div className={styles.content}>
          <div className={styles.logo}></div>

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
            {loadingAccount
              ? "loading"
              : error
              ? error
              : data.account.account_name}
          </Typography>

          <p className={styles.leyenda}>
            Connect to your TELOS wallet with one click!
          </p>
        </div>

        <div className={styles.pie}>
          <div>
            <p>About Squirrelfi</p>
          </div>
          <div>
            <p>Powered By</p>
          </div>
          <div>
            <p>Privacity | Terms</p>
          </div>
        </div>
      </div>
    </main>
  );
};
