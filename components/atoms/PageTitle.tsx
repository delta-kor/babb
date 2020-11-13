import { Component } from 'react';
import styled from 'styled-components';

const Layout = styled.div`
  position: relative;
  height: 64px;
  background: #ffffff;
`;

const Title = styled.h1`
  position: absolute;
  height: 35px;
  left: 24px;
  right: 24px;
  top: calc(50% - 35px / 2 + 0.5px);
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 35px;
  color: #1287f3;
`;

interface Props {
  content: string;
}

export default class PageTitle extends Component<Props, any> {
  render() {
    return (
      <Layout>
        <Title>{this.props.content}</Title>
      </Layout>
    );
  }
}
