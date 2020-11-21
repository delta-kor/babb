import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import axios, { AxiosResponse } from 'axios';
import Local from '../local';
import { ApiSearch } from '../types/api';
import PageTitle from '../components/atoms/PageTitle';
import SearchInput from '../components/atoms/Search';
import SearchItem from '../components/atoms/SearchItem';
import List from '../components/molecules/List';

const InputWrapper = styled.div`
  padding: 0 24px;
`;

const SearchItemWrapper = styled.div`
  padding: 33px 0 0 0;
`;

export default function Search({ query, page }) {
  const [items, setItems] = useState([]);
  const [total, setTotal] = useState(0);

  const router = useRouter();

  useEffect(() => {
    const request: Promise<AxiosResponse<ApiSearch>> = axios.get(
      `${Local.API_ENDPOINT}/api/search`,
      {
        params: { q: query, page },
      }
    );

    request.then(res => {
      if (res.data.status === 0) {
        setTotal(res.data.total);
        return setItems(res.data.result.map(item => <SearchItem data={item} key={item.id} />));
      }
      setItems([]);
    });
  }, [router.query.q]);

  return (
    <>
      <PageTitle content={'babb.ga'} />
      <InputWrapper>
        <SearchInput query={query} />
      </InputWrapper>
      <SearchItemWrapper>{items}</SearchItemWrapper>
      <List total={total} current={page} />
    </>
  );
}

Search.getInitialProps = ({ query }) => {
  return { query: query.q, page: query.page || 1 };
};
