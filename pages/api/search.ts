import { NextApiRequest, NextApiResponse } from 'next';
import School from '../../types/school';
import { ApiSearch, ApiSearchItem } from '../../types/api';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  let query = req.query.q as string;
  query = query.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');

  if (!query || !query.trim()) {
    const body: ApiSearch = {
      status: 1,
    };
    return res.json(body);
  }

  const documents = await School.find({ name: new RegExp(query, 'gi') }).exec();
  const result: ApiSearchItem[] = [];

  for (const document of documents) {
    result.push({
      id: document.id,
      type: document.type,
      name: document.name,
      tel: document.tel,
      address: document.address,
      homepage: document.homepage,
    });
  }

  const body: ApiSearch = {
    status: 0,
    result,
  };

  return res.json(body);
}
