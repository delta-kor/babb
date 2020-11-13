import { useRouter } from 'next/router';
import styled from 'styled-components';
import PageTitle from '../components/atoms/PageTitle';
import SearchInput from '../components/atoms/Search';

const InputWrapper = styled.div`
  padding: 0 24px;
`;

export default function Search() {
  const router = useRouter();

  function onSearch(query: string) {
    router.push(`/search?q=${query}`);
  }

  return (
    <>
      <PageTitle content={'babb.ga'} />
      <InputWrapper>
        <SearchInput onSearch={onSearch} />
      </InputWrapper>
    </>
  );
}
