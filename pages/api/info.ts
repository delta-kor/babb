import { NextApiRequest, NextApiResponse } from 'next';
import School from '../../types/school';
import { ApiInfo } from '../../types/api';

async function loader() {
  return await School;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  let query = req.query.id as string;
  if (!query || !query.trim()) {
    const body: ApiInfo = {
      status: 1,
    };
    return res.json(body);
  }

  const document = (await loader()).id.search(query);

  if (document.length === 0) {
    const body: ApiInfo = {
      status: 2,
    };
    return res.json(body);
  }

  const item = document[0].item;
  const body: ApiInfo = {
    status: 0,
    result: {
      id: item.id,
      type: item.type,
      name: item.name,
      tel: item.tel,
      address: item.address,
      homepage: item.homepage,
    },
  };
  return res.json(body);
}
