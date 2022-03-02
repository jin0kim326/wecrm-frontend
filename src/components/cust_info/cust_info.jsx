import React, { Component } from "react";
import styled, { StyledComponent } from "styled-components";

class CustInfo extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit();
  };

  onChange = (e) => {
    this.props.onChange(e);
  };

  Form = styled.form`
    width: 100%;
    height: 100%;
  `;

  InputArea = styled.div`
    display: flex;
  `;

  Input = styled.input.attrs({ type: "text", onChange: this.onChange })``;

  Btn = styled.button`
    background-color: ${(props) => props.bgColor};
  `;

  render() {
    const { customer } = this.props;
    return (
      <this.Form onSubmit={this.handleSubmit}>
        <this.InputArea>
          <label>거래처 이름</label>
          <this.Input name="customerName" value={customer.customerName} />
        </this.InputArea>
        <this.InputArea>
          <label>구 분</label>
          <this.Input name="customerDivision" />
        </this.InputArea>
        <this.InputArea>
          <label>사업자 등록번호</label>
          <this.Input name="companyNumber" />
        </this.InputArea>
        <this.InputArea>
          <label>대표자 이름</label>
          <this.Input name="representativeName" />
        </this.InputArea>
        <this.InputArea>
          <label>대표자 전화번호</label>
          <this.Input name="representativeNumber" />
        </this.InputArea>
        <this.InputArea>
          <label>대표자 주소</label>
          <this.Input name="representativeAddress" />
        </this.InputArea>
        <this.InputArea>
          <label>전화번호</label>
          <this.Input name="tel" />
        </this.InputArea>
        <this.Btn bgColor="white">취소</this.Btn>
        <this.Btn type="submut" bgColor="tomato">
          등록
        </this.Btn>
      </this.Form>
    );
  }
}

export default CustInfo;
