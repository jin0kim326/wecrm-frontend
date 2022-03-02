import React, { Component } from "react";
import CustList from "./components/cust_list/cust_list";
import styles from "./app.module.css";
import CustSearch from "./components/cust_search/cust_search";
import styled from "styled-components";
import CustInfo from "./components/cust_info/cust_info";
import CustDetail from "./components/cust_detail/cust_detail";

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
    selectedCustomer: null,
  };

  addBtn = styled.button`
    color: red;
    background-color: whitesmoke;
  `;

  handleAddCust = () => {
    console.log("aㅎㅎggggㅎdd");
  };

  componentDidMount = () => {
    this.props.customerService
      .getCustomers()
      .then((customers) => this.setState({ customers }));
  };

  handleSubmit = () => {
    this.props.customerService.addCustomer(this.state.customer);
  };

  onChange = (e) => {
    this.setState({
      customer: {
        ...this.state.customer,
        [e.target.name]: e.target.value,
      },
    });
  };

  clickItem = (customer) => {
    this.setState({ selectedCustomer: customer });
  };

  render() {
    const { selectedCustomer } = this.state;
    return (
      <div className={styles.app}>
        <aside className={styles.left}>
          <this.addBtn onClick={this.handleAddCust}>거래처 등록</this.addBtn>
          <CustSearch />
          <CustList
            customers={this.state.customers}
            clickItem={this.clickItem}
          />
        </aside>
        <main className={styles.main}>
          {selectedCustomer && <CustDetail customer={selectedCustomer} />}
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
