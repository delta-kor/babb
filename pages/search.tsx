import axios, { AxiosResponse } from 'axios';
import { ApiSearch, ApiSearchItem } from '../types/api';

export default function Search({ schools }) {
  const data: ApiSearchItem[] = schools;

  return (
    <>
      <h1>검색</h1>
      {data.map(item => (
        <p>{item.name}</p>
      ))}
    </>
  );
}

Search.getInitialProps = async ({ query }) => {
  const res: AxiosResponse<ApiSearch> = await axios.get('https://babb.ga/api/search', {
    params: { q: query.q },
  });
  return {
    schools: res.data.result,
  };
};
