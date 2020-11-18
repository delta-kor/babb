import { useState, useEffect } from 'react';
import Local from '../local';
import axios, { AxiosResponse } from 'axios';
import { ApiSearch } from '../types/api';
import styled from 'styled-components';
import PageTitle from '../components/atoms/PageTitle';
import SearchInput from '../components/atoms/Search';
import SearchItem from '../components/atoms/SearchItem';

const InputWrapper = styled.div`
  padding: 0 24px;
`;

const SearchItemWrapper = styled.div`
  padding: 33px 0 0 0;
`;

export default function Search({ query }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const request: Promise<AxiosResponse<ApiSearch>> = axios.get(
      `${Local.API_ENDPOINT}/api/search`,
      {
        params: { q: query },
      }
    );

    request.then(res => {
      if (res.data.status === 0) {
        setItems(res.data.result.map(item => <SearchItem data={item} key={item.id} />));
      }
    });
  }, []);

  return (
    <>
      <PageTitle content={'babb.ga'} />
      <InputWrapper>
        <SearchInput />
      </InputWrapper>
      <SearchItemWrapper>{items}</SearchItemWrapper>
    </>
  );
}

Search.getInitialProps = ({ query }) => {
  return { query: query.q };
};
