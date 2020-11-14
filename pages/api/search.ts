import axios from 'axios';
import querystring from 'querystring';
import { Agent } from 'https';
import { NextApiRequest, NextApiResponse } from 'next';
import { ApiSearch, ApiSearchItem, SchoolType } from '../../types/api';

const agent = new Agent({
  rejectUnauthorized: false,
});

function buildItem(source: any, type: SchoolType): ApiSearchItem {
  return {
    id: source.SCHUL_CODE,
    type,
    name: source.SCHUL_NM,
    tel: source.USER_TELNO,
    address: source.SCHUL_RDNMA,
    homepage: source.HMPG_ADRES,
  };
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const query = req.query.q as string;

  if (!query || !query.trim()) {
    const body: ApiSearch = {
      status: 1,
    };
    return res.json(body);
  }

  const form = {
    GS_HANGMOK_CD: '',
    SRC_HG_NM: query,
  };

  const response = await axios({
    method: 'post',
    url: 'https://www.schoolinfo.go.kr/ei/ss/Pneiss_a01_l0.do',
    data: querystring.stringify(form),
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
    },
    httpsAgent: agent,
  });

  const data = response.data;

  let {
    schoolList02: elementary,
    schoolList03: middle,
    schoolList04: high,
    schoolList05: other,
  } = data;

  if (!elementary.length && !middle.length && !high.length && !other.length) {
    const body: ApiSearch = {
      status: 2,
    };
    return res.json(body);
  }

  elementary = elementary.map(source => buildItem(source, SchoolType.ELEMENTARY));
  middle = middle.map(source => buildItem(source, SchoolType.MIDDLE));
  high = high.map(source => buildItem(source, SchoolType.HIGH));
  other = other.map(source => buildItem(source, SchoolType.OTHER));

  let result: ApiSearchItem[] = [];
  result = result.concat(elementary, middle, high, other);

  const body: ApiSearch = {
    status: 0,
    result,
  };

  res.json(body);
}
