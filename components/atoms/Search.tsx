import { ChangeEvent, Component } from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const Layout = styled.div`
  position: relative;
  height: 50px;
  background: #f9f9f9;
  border-radius: 8px;
`;

const Input = styled.input`
  position: absolute;
  height: 23px;
  width: calc(100% - 24px - 58px);
  left: 24px;
  top: calc(50% - 23px / 2 + 0.5px);
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 23px;
  background: none;
  border: none;
  color: #747474;
`;

const Icon = styled.img`
  position: absolute;
  box-sizing: content-box;
  padding: 12px;
  width: 18px;
  height: 18px;
  right: 12px;
  top: calc(50% - 42px / 2);
  cursor: pointer;
`;

interface State {
  query: string;
}

export default class Search extends Component<any, State> {
  constructor(props) {
    super(props);
    this.state = { query: '' };
  }

  onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    const value = target.value;
    this.setState({ query: value });
  };

  render() {
    return (
      <Layout>
        <Input type={'text'} placeholder={'학교검색'} onChange={this.onChange} />
        <Link href={`/search?q=${this.state.query}`}>
          <Icon src={'/icons/search.svg'} />
        </Link>
      </Layout>
    );
  }
}
