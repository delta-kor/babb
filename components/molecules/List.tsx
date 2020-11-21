import { Component } from 'react';
import styled from 'styled-components';
import ListPicker, { ListPickerType } from '../atoms/ListPicker';

const Layout = styled.div`
  position: relative;
  height: 51px;
  background: #ffffff;
  text-align: center;
`;

interface Props {
  total: number;
  current: number;
}

export default class List extends Component<Props, any> {
  render() {
    const totalDifference = Math.floor(this.props.total / 10) + 1;
    const difference = Math.floor((this.props.current - 1) / 5);
    const pickers: JSX.Element[] = [];

    for (let i = 1; i <= 5; i++) {
      const number = difference * 5 + i;
      if (number > totalDifference) break;
      pickers.push(
        <ListPicker
          type={number === this.props.current ? ListPickerType.ACTIVE : ListPickerType.INACTIVE}
          number={number}
          total={this.props.total}
          key={number}
        />
      );
    }

    return (
      <Layout>
        <ListPicker type={ListPickerType.LEFT} total={this.props.total} />
        {pickers}
        <ListPicker type={ListPickerType.RIGHT} total={this.props.total} />
      </Layout>
    );
  }
}
