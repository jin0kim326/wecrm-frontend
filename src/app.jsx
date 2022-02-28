import React, { Component } from "react";
import CustList from "./components/cust_list/cust_list";
import styles from "./app.module.css";
import CustSearch from "./components/cust_search/cust_search";
import styled from "styled-components";
import CustInfo from "./components/cust_info/cust_info";

class App extends Component {
  state = {
    customer: {
      customerName: "",
      customerDivision: "",
      companyNumber: "",
      representativeName: "",
      representativeNumber: "",
      representativeAddress: "",
      tel: "",
    },
    customers: [],
  };

  addBtn = styled.button`
    color: red;
    background-color: whitesmoke;
  `;

  handleAddCust = () => {
    console.log("add");
  };

  componentDidMount = () => {
    this.props.customerService
      .getCustomers()
      .then((customers) => this.setState({ customers }));
  };

  handleSubmit = (customer) => {
    this.props.customerService.addCustomer(customer);
  };

  render() {
    return (
      <div className={styles.app}>
        <aside className={styles.left}>
          <this.addBtn onClick={this.handleAddCust}>거래처 등록</this.addBtn>
          <CustSearch />
          <CustList customers={this.customers} />
        </aside>
        <main className={styles.main}>
          <CustInfo
            onSubmit={this.handleSubmit}
            customer={this.state.customer}
            onChange={this.onChange}
          />
        </main>

        <main className={styles.main}></main>
      </div>
    );
  }
}

export default App;
