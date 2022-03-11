import React, { Component } from "react";
import styles from "./Grafico.module.css";

export default class Grafico extends Component {
  render() {
    return (
      <div className="container-fluid">
          <div className={styles.item}></div>
      </div>
    );
  }
}
