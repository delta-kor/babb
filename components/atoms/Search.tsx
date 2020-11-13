import { ChangeEvent, Component } from 'react';
import styled from 'styled-components';

const Layout = styled.div`
  position: relative;
  height: 50px;
  background: #f9f9f9;
  border-radius: 8px;
`;

const Input = styled.input`
  position: absolute;
  padding: 0;
  height: 23px;
  width: calc(100% - 24px - 58px);
  left: 24px;
  top: calc(50% - 23px / 2 + 0.5px);
  font-family: Noto Sans KR, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 23px;
  background: none;
  border: none;
  outline: none;
  color: #747474;
`;

const Icon = styled.img`
  position: absolute;
  width: 18px;
  height: 18px;
  right: 12px;
  top: calc(50% - 42px / 2);
  cursor: pointer;
  padding: 12px;
`;

interface Props {
  onSearch?(query: string): void;
}

interface State {
  query: string;
}

export default class Search extends Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = { query: '' };
  }

  onSearch = () => {
    const query = this.state?.query;
    this.props.onSearch(query || null);
  };

  onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    const value = target.value;
    this.setState({ query: value });
  };

  render() {
    return (
      <Layout>
        <Input type={'text'} placeholder={'학교검색'} onChange={this.onChange} />
        <Icon src={'/icons/search.svg'} onClick={this.onSearch} />
      </Layout>
    );
  }
}
