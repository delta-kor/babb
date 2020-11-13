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
  max-width: 580px;
`;

export default function Index() {
  return (
    <Center>
      <MainTitle content={'babb.ga'} />
      <InputWrapper>
        <Search onSearch={q => console.log(q)} />
      </InputWrapper>
    </Center>
  );
}
