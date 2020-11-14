import { Component } from 'react';
import { ApiSearchItem } from '../../types/api';
import styled from 'styled-components';

const Layout = styled.div`
  position: relative;
  height: 103px;
  background: #ffffff;
`;

const Name = styled.p`
  position: absolute;
  height: 35px;
  left: 24px;
  right: 24px;
  top: 18px;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 35px;
  color: #1287f3;
`;

const Address = styled.p`
  position: absolute;
  height: 23px;
  left: 24px;
  right: 24px;
  top: 62px;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 23px;
  color: #747474;
`;

interface Props {
  data: ApiSearchItem;
}

export default class SearchItem extends Component<Props, any> {
  render() {
    return (
      <Layout>
        <Name>{this.props.data.name}</Name>
        <Address>{this.props.data.address}</Address>
      </Layout>
    );
  }
}
