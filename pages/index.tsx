import { useRouter } from 'next/router';
import styled from 'styled-components';
import MainTitle from '../components/atoms/MainTitle';
import Search from '../components/atoms/Search';

const Center = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
`;

const InputWrapper = styled.div`
  margin: 15px auto 0 auto;
  padding: 0 24px;
`;

export default function Index() {
  const router = useRouter();

  function onSearch(query: string) {
    router.push(`/search?q=${query}`);
  }

  return (
    <Center>
      <MainTitle content={'babb.ga'} />
      <InputWrapper>
        <Search onSearch={onSearch} />
      </InputWrapper>
    </Center>
  );
}
