import React, { Component } from "react";
import styles from "./cust_item.module.css";
import styledComponents from "styled-components";

class CustItem extends Component {
  render() {
    const { customer, clickItem } = this.props;
    return (
      <section className={styles.item} onClick={() => clickItem(customer)}>
        <p className={styles.name}>{customer.customerName}</p>
        <p className={styles.phone}>{customer.tel}</p>
      </section>
    );
  }
}

export default CustItem;
