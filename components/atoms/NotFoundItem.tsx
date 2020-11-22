import { Component } from 'react';
import styled from 'styled-components';

const Layout = styled.div`
  position: absolute;
  height: 256px;
  left: 0;
  right: 0;
  top: calc(50% - 256px / 2);
  background: #ffffff;
`;

const Emoji = styled.img`
  position: absolute;
  width: 74px;
  height: 74px;
  left: calc(50% - 74px / 2);
  top: calc(50% - 74px / 2 - 44px);
`;

const Title = styled.p`
  position: absolute;
  height: 35px;
  left: 24px;
  right: 24px;
  top: calc(50% - 35px / 2 + 32.5px);
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 35px;
  text-align: center;
  color: #1287f3;
`;

const Description = styled.p`
  position: absolute;
  height: 23px;
  left: 24px;
  right: 24px;
  top: calc(50% - 23px / 2 + 69.5px);
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 23px;
  text-align: center;
  color: #747474;
`;

interface Props {
  title: string;
  description: string;
}

export default class NotFoundItem extends Component<Props, any> {
  static defaultProps = {
    title: '검색 결과가 없습니다',
    description: '다른 검색어를 사용해 보세요',
  };

  render() {
    return (
      <Layout>
        <Emoji src={'/emojis/thinking.svg'} />
        <Title>{this.props.title}</Title>
        <Description>{this.props.description}</Description>
      </Layout>
    );
  }
}
