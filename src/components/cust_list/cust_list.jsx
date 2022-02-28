import React, { Component } from "react";
import CustItem from "../cust_item/cust_item";
import styles from "./cust_list.module.css";

class CustList extends Component {
  render() {
    return <article className={styles.items}></article>;
  }
}

export default CustList;
