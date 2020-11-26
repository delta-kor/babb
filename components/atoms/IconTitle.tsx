import { Component } from 'react';
import styled from 'styled-components';
import Router from 'next/router';

const Layout = styled.div`
  position: relative;
  height: 64px;
  background: #ffffff;
`;

const Icon = styled.img`
  position: absolute;
  width: 24px;
  height: 24px;
  left: 24px;
  top: calc(50% - 24px / 2);
  cursor: pointer;
`;

const Content = styled.p`
  position: absolute;
  height: 35px;
  left: 66px;
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

export default class IconTitle extends Component<Props, any> {
  onBackClicked = () => {
    Router.back();
  };

  render() {
    return (
      <Layout>
        <Icon src={'/icons/back.svg'} onClick={this.onBackClicked} />
        <Content>{this.props.content}</Content>
      </Layout>
    );
  }
}
