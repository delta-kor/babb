import axios, { AxiosResponse } from 'axios';
import IconTitle from '../../components/atoms/IconTitle';
import Local from '../../local';
import { ApiInfo, ApiSearchItem } from '../../types/api';

export default function School(props) {
  const info: ApiSearchItem = props.info;
  return (
    <>
      <IconTitle content={info.name} />
    </>
  );
}

School.getInitialProps = async ({ query }) => {
  const request: AxiosResponse<ApiInfo> = await axios.get(`${Local.API_ENDPOINT}/api/info`, {
    params: { id: query.id },
  });
  return { info: request.data.result };
};
