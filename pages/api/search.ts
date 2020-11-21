import { NextApiRequest, NextApiResponse } from 'next';
import School from '../../types/school';
import { ApiSearch, ApiSearchItem } from '../../types/api';

async function loader() {
  return await School;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  let query = req.query.q as string;
  let page = parseInt(req.query.page as string) - 1 || 0;

  if (!query || !query.trim()) {
    const body: ApiSearch = {
      status: 1,
    };
    return res.json(body);
  }

  const documents = (await loader()).search(query);
  const paged = documents.slice(page * 10, page * 10 + 10);

  const result: ApiSearchItem[] = [];

  for (const document of paged) {
    const item = document.item;
    result.push({
      id: item.id,
      type: item.type,
      name: item.name,
      tel: item.tel,
      address: item.address,
      homepage: item.homepage,
    });
  }

  const body: ApiSearch = {
    status: 0,
    total: documents.length,
    result,
  };

  return res.json(body);
}
