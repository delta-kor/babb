import { Component } from 'react';
import styled, { StyledComponent } from 'styled-components';

export enum ListPickerType {
  INACTIVE,
  ACTIVE,
  LEFT,
  RIGHT,
}

interface Props {
  type: ListPickerType;
  number?: number;
}

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

const ArrowContent = styled.img`
  position: absolute;
  width: 25px;
  height: 25px;
  left: calc(50% - 25px / 2);
  top: calc(50% - 25px / 2);
`;

export default class ListPicker extends Component<Props, any> {
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

    return <Layout>{Content}</Layout>;
  }
}
