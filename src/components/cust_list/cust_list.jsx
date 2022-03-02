import React, { Component } from "react";
import CustItem from "../cust_item/cust_item";
import styles from "./cust_list.module.css";

class CustList extends Component {
  render() {
    const { customers, clickItem } = this.props;
    return (
      <article className={styles.items}>
        {customers.map((customer) => (
          <CustItem
            key={customer.id}
            customer={customer}
            clickItem={clickItem}
          />
        ))}
      </article>
    );
  }
}

export default CustList;
