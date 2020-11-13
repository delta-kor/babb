import { Component } from 'react';
import styled from 'styled-components';

const Layout = styled.div`
  position: relative;
  width: 366px;
  height: 50px;
  background: #f9f9f9;
  border-radius: 8px;
`;

const Input = styled.input`
  position: absolute;
  display: block;
  width: 284px;
  height: 23px;
  left: 24px;
  top: calc(50% - 23px / 2 + 0.5px);
  font-family: Noto Sans KR, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 23px;
  background: none;
  border: none;
  outline: none;
  color: #747474;
`;

const Icon = styled.img`
  position: absolute;
  width: 18px;
  height: 18px;
  right: 24px;
  top: calc(50% - 18px / 2);
`;

export default class Search extends Component<any, any> {
  render() {
    return (
      <Layout>
        <Input type={'text'} placeholder={'학교검색'} />
        <Icon src={'/icons/search.svg'} />
      </Layout>
    );
  }
}
