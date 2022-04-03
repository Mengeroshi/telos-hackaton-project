import styles from "./TokenItem.module.css";
// import { ReactComponent as TLOSIcon } from '../../assets/icons/TLOS.svg';

// const TLOSLogo = () => {
//   return (
//     <div className={styles.circle}>
//       {/* <TLOSIcon className={styles.TLOSIcon}/> */}
//     </div>
//   );
// };

export const TokenItem = ({ ticker, amount, logo }) => {

  return (
    <li className={styles.container}>
      <div className={styles.circle} style={{backgroundImage:`url(${logo})`}}></div>
      <div className={styles.amount}>{amount.toFixed(8)}</div>
      <div className={styles.ticker}>{ticker}</div>
    </li>
  );
};
