import { createStore } from "react-redux";

/**
 * redux사용을 위한 설정
 */

// 타입
const CUSTOMER_ADD = "CUSTOMER_ADD";
const CUSTOMER_GET = "CUSTOMER_GET";

export const addToDo = (customer) => {
  return {
    type: CUSTOMER_ADD,
    customer,
  };
};

export const getToDo = () => {
  return {
    type: CUSTOMER_GET,
  };
};

const reducer = (state = [], action) => {
  switch (action.type) {
    case CUSTOMER_GET:
      return;
    case CUSTOMER_ADD:
      return [{}];
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
