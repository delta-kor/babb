import axios from 'axios';
import { Agent } from 'https';
import querystring from 'querystring';
import { NextApiRequest, NextApiResponse } from 'next';

const agent = new Agent({
  rejectUnauthorized: false,
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const query = req.query.q as string;

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

  res.json(response.data);
}
