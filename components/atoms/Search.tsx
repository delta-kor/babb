import { ChangeEvent, KeyboardEvent, Component } from 'react';
import Link from 'next/link';
import Router from 'next/router';
import styled from 'styled-components';

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

interface Props {
  query?: string;
}

interface State {
  query: string;
}

export default class Search extends Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = { query: this.props.query || null };
  }

  onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    const value = target.value;
    this.setState({ query: value });
  };

  handleEnter = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') Router.push(`/search?q=${this.state.query}`);
  };

  render() {
    return (
      <Layout>
        <Input
          type={'text'}
          value={this.state.query === null ? this.props.query || '' : this.state.query}
          placeholder={'학교검색'}
          onChange={this.onChange}
          onKeyDown={this.handleEnter}
        />
        <Link href={`/search?q=${this.state.query}`}>
          <Icon src={'/icons/search.svg'} />
        </Link>
      </Layout>
    );
  }
}
