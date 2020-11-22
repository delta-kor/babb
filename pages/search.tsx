import { useEffect, useState } from 'react';
import Router from 'next/router';
import styled from 'styled-components';
import axios, { AxiosResponse } from 'axios';
import Local from '../local';
import { ApiSearch } from '../types/api';
import PageTitle from '../components/atoms/PageTitle';
import SearchInput from '../components/atoms/Search';
import SearchItem from '../components/atoms/SearchItem';
import List from '../components/molecules/List';
import NotFoundItem from '../components/atoms/NotFoundItem';

const HeaderWrapper = styled.div`
  position: fixed;
  padding: 0 0 14px 0;
  width: 100%;
  max-width: 720px;
  background: #ffffff;
  z-index: 10;
`;

const InputWrapper = styled.div`
  padding: 0 24px;
`;

const SearchItemWrapper = styled.div`
  padding: 128px 0 72px 0;
`;

const ListWrapper = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  max-width: 720px;
`;

export default function Search({ query, page }) {
  const [items, setItems] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const request: Promise<AxiosResponse<ApiSearch>> = axios.get(
      `${Local.API_ENDPOINT}/api/search`,
      {
        params: { q: query, page },
      }
    );

    request.then(res => {
      if (res.data.status === 0) {
        if (res.data.total && !res.data.result.length) {
          Router.push({ query: { ...Router.query, page: 1 } });
          return;
        }
        window.scrollTo(0, 0);
        setTotal(res.data.total);
        if (!res.data.total) {
          return setItems([<NotFoundItem />]);
        }
        return setItems(res.data.result.map(item => <SearchItem data={item} key={item.id} />));
      }
      setItems([]);
    });
  }, [query, page]);

  return (
    <>
      <HeaderWrapper>
        <PageTitle content={'babb.ga'} />
        <InputWrapper>
          <SearchInput query={query} />
        </InputWrapper>
      </HeaderWrapper>
      <SearchItemWrapper>{items}</SearchItemWrapper>
      <ListWrapper>{total > 0 && <List total={total} current={page} />}</ListWrapper>
    </>
  );
}

Search.getInitialProps = ({ query }) => {
  return { query: query.q, page: parseInt(query.page) || 1 };
};
