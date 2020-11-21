import { NextApiRequest, NextApiResponse } from 'next';
import School, { SchoolDocument } from '../../types/school';
import { ApiSearch, ApiSearchItem } from '../../types/api';

const cache: Map<string, SchoolDocument[]> = new Map();

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

  let documents: SchoolDocument[] = cache.get(query);

  if (!documents) {
    documents = await School.find({ name: new RegExp(query, 'gi') }).exec();
    cache.set(query, documents);
  }

  const paged = documents.slice(page * 10, page * 10 + 10);

  const result: ApiSearchItem[] = [];

  for (const document of paged) {
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
    total: documents.length,
    result,
  };

  return res.json(body);
}
