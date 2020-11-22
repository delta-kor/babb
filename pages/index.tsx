import styled from 'styled-components';
import MainTitle from '../components/atoms/MainTitle';
import Search from '../components/atoms/Search';
import Meta from '../components/atoms/Meta';

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
  return (
    <>
      <Meta content={{ title: 'babb.ga | 오늘의 급식', description: '우리 학교 급식 찾기' }} />
      <Center>
        <MainTitle content={'babb.ga'} />
        <InputWrapper>
          <Search />
        </InputWrapper>
      </Center>
    </>
  );
}
