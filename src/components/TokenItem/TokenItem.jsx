import styles from "./TokenItem.module.css";
import { ReactComponent as TLOSIcon } from '../../assets/icons/TLOS.svg';


const TLOSLogo = () => {
  return (
    <div className={styles.circle}>
      <TLOSIcon className={styles.TLOSIcon}/>
    </div>
  );
};

export const TokenItem = ({ ticker, amount, gradientList }) => {
  const gradient = `${gradientList[0]}, ${gradientList[1]}`;

  return (
    <li className={styles.container}>
      {ticker === "TLOS" 
        ?<TLOSLogo/>
        :(
          <div
        className={styles.circle}
        style={{ background: `linear-gradient(${gradient})` }}
      >
        <div className={styles.questionMark}>?</div>
      </div>
        )
      }
      <div className={styles.ticker}>{ticker}</div>
      <div className={styles.amount}>{amount}</div>
    </li>
  );
};
