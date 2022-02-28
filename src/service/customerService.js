/**
 * 거래처 API
 */

class CustomerService {
  constructor() {
    this.getRequestOptions = {
      method: "GET",
      redirect: "follow",
    };
  }

  async getCustomers() {
    try {
      const response = await fetch(
        "http://localhost:8080/api/customer",
        this.getRequestOptions
      );
      const result_1 = await response.json();
      return result_1.customerDtos;
    } catch (error) {
      return console.log("error", error);
    }
  }

  addCustomer(customer) {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify(customer);

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("http://localhost:8080/api/customer", requestOptions)
      .then((response) => response.json())
      .then((result) => console.log(result));
  }
}

export default CustomerService;
