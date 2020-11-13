import axios, { AxiosResponse } from 'axios';
import { ApiSearch, ApiSearchItem } from '../types/api';
import Local from '../local';
import PageTitle from '../components/atoms/PageTitle';

export default function Search({ schools }) {
  const data: ApiSearchItem[] = schools;

  return (
    <>
      <PageTitle content={'babb.ga'} />
      {data.map(item => (
        <p>{item.name}</p>
      ))}
    </>
  );
}

Search.getInitialProps = async ({ query }) => {
  const res: AxiosResponse<ApiSearch> = await axios.get(`${Local.API_ENDPOINT}/api/search`, {
    params: { q: query.q },
  });
  return {
    schools: res.data.result,
  };
};
