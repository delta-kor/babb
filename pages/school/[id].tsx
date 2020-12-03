import axios, { AxiosResponse } from 'axios';
import IconTitle from '../../components/atoms/IconTitle';
import Local from '../../local';
import { ApiInfo, ApiSearchItem } from '../../types/api';
import Meta from '../../components/atoms/Meta';

export default function School(props) {
  const info: ApiSearchItem = props.info;
  return (
    <>
      <Meta
        content={{
          title: `${info.name} 급식 | babb.ga`,
          description: 'babb.ga | 우리 학교 급식 찾기',
        }}
      />
      <IconTitle content={info.name} />
    </>
  );
}

School.getInitialProps = async ({ query }) => {
  const request: AxiosResponse<ApiInfo> = await axios.get(`${Local.API_ENDPOINT}/api/info`, {
    params: { id: query.id },
  });
  if (request.data.status === 0) return { info: request.data.result };
};
