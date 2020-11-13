import { Component } from 'react';
import styled from 'styled-components';

const Layout = styled.div`
  position: relative;
  height: 100px;
  background: #ffffff;
`;

const Title = styled.h1`
  position: absolute;
  margin: 0;
  height: 70px;
  left: 15px;
  right: 15px;
  top: calc(50% - 70px / 2);
  font-family: Noto Sans KR, sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 48px;
  line-height: 70px;
  text-align: center;
  color: #1287f3;
`;

interface Props {
  content: string;
}

export default class MainTitle extends Component<Props, any> {
  render() {
    return (
      <Layout>
        <Title>{this.props.content}</Title>
      </Layout>
    );
  }
}
