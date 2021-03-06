import { Component } from 'react';
import { ApiSearchItem } from '../../types/api';
import styled from 'styled-components';
import Link from 'next/link';

const Layout = styled.div`
  position: relative;
  height: 103px;
  background: #ffffff;
  cursor: pointer;
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
  color: #373737;
  overflow-x: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
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
  overflow-x: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const Line = styled.div`
  position: absolute;
  height: 2px;
  left: 24px;
  right: 24px;
  bottom: 0;
  background: #f9f9f9;
`;

interface Props {
  data: ApiSearchItem;
}

export default class SearchItem extends Component<Props, any> {
  render() {
    return (
      <Link href={`/school/${this.props.data.id}`}>
        <Layout>
          <Name>{this.props.data.name}</Name>
          <Address>{this.props.data.address}</Address>
          <Line />
        </Layout>
      </Link>
    );
  }
}
