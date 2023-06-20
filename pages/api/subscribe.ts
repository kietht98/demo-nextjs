import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

const subscribe = async (req: NextApiRequest, res: NextApiResponse<any>) => {
  const resp = await axios.post("https://sendmail.vn/subscribe", req.body);
  res.setHeader("Content-Type", "application/json");
  if (resp.status === 200) {
    res.statusCode = 200;
    res.end(JSON.stringify(resp.data));
  } else {
    res.statusCode = resp.status;
    res.end(JSON.stringify(resp));
  }
};

export default subscribe;
