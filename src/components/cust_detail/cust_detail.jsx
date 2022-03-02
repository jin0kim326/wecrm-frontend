import React, { Component } from "react";

class CustDetail extends Component {
  render() {
    const { customer } = this.props;
    return <h1>{customer.customerName}</h1>;
  }
}

export default CustDetail;
