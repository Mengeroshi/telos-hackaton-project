import React from "react";
import styles from "./Decoration.module.css";

export default function Decoration() {

  var sBrowser, sUsrAg = navigator.userAgent;

  // The order matters here, and this may report false positives for unlisted browsers.
  
  if (sUsrAg.indexOf("Firefox") > -1) {
    sBrowser = "Mozilla Firefox";

    return (
      <div>
        
      </div>
    );
   
  } else {
    return (
      <div>
        <div className={styles.cuadro1}></div>
        <div className={styles.cuadro2}></div>
        <div className={styles.cuadro3}></div>
        <div className={styles.cuadro4}></div>
        <div className={styles.cuadro5}></div>
      </div>
    );
  }

}
