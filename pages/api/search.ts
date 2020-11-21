import { NextApiRequest, NextApiResponse } from 'next';
import School from '../../types/school';
import { ApiSearch, ApiSearchItem } from '../../types/api';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  let query = req.query.q as string;
  let page = parseInt(req.query.page as string) - 1 || 0;

  if (!query || !query.trim()) {
    const body: ApiSearch = {
      status: 1,
    };
    return res.json(body);
  }

  query = query.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');

  const documents = await School.find(
    { name: new RegExp(query, 'gi') },
    {},
    { skip: page && 10 * page, limit: 10 }
  ).exec();

  const total = await School.find({ name: new RegExp(query, 'gi') }).exec();

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
    total: total.length,
    result,
  };

  return res.json(body);
}
