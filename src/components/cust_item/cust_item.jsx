import React, { Component } from "react";
import styles from "./cust_item.module.css";
import styledComponents from "styled-components";

class CustItem extends Component {
  render() {
    return (
      <section className={styles.item}>
        <p className={styles.name}></p>
        <p className={styles.phone}></p>
      </section>
    );
  }
}

export default CustItem;
