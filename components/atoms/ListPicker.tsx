import { Component } from 'react';
import Router from 'next/router';
import styled, { StyledComponent } from 'styled-components';

const InactiveLayout = styled.div`
  position: relative;
  display: inline-block;
  margin: 0 3px;
  width: 38px;
  height: 38px;
  background: #ffffff;
  cursor: pointer;
`;

const ActiveLayout = styled.div`
  position: relative;
  display: inline-block;
  margin: 0 3px;
  width: 38px;
  height: 38px;
  background: #1287f3;
  border-radius: 8px;
  cursor: pointer;
`;

const ActiveContent = styled.p`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 38px;
  text-align: center;
  color: #ffffff;
`;

const InactiveContent = styled.p`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 38px;
  text-align: center;
  color: #1287f3;
`;

export enum ListPickerType {
  INACTIVE,
  ACTIVE,
  LEFT,
  RIGHT,
}

const ArrowContent = styled.img`
  position: absolute;
  width: 25px;
  height: 25px;
  left: calc(50% - 25px / 2);
  top: calc(50% - 25px / 2);
`;

interface Props {
  type: ListPickerType;
  total: number;
  number?: number;
}

export default class ListPicker extends Component<Props, any> {
  onclick = () => {
    let page = this.props.number;
    let current = parseInt(Router.query.page as string) || 1;
    if (this.props.type === ListPickerType.RIGHT)
      page = current === Math.floor(this.props.total / 10) + 1 ? current : current + 1;
    if (this.props.type === ListPickerType.LEFT) page = current === 1 ? current : current - 1;
    Router.push({ query: { ...Router.query, page } });
  };

  render() {
    let Layout: StyledComponent<'div', any>;
    let Content: JSX.Element;

    switch (this.props.type) {
      case ListPickerType.INACTIVE:
      case ListPickerType.LEFT:
      case ListPickerType.RIGHT:
        Layout = InactiveLayout;
        break;
      case ListPickerType.ACTIVE:
        Layout = ActiveLayout;
        break;
    }

    switch (this.props.type) {
      case ListPickerType.ACTIVE:
        Content = <ActiveContent>{this.props.number}</ActiveContent>;
        break;
      case ListPickerType.INACTIVE:
        Content = <InactiveContent>{this.props.number}</InactiveContent>;
        break;
      case ListPickerType.LEFT:
        Content = <ArrowContent src={'/icons/left.svg'} />;
        break;
      case ListPickerType.RIGHT:
        Content = <ArrowContent src={'/icons/right.svg'} />;
        break;
    }

    return <Layout onClick={this.onclick}>{Content}</Layout>;
  }
}
