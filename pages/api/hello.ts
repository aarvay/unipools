// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiHandler } from "next";
import { NextRouter } from "next/router";

type Data = {
  name: string;
};

const handler: NextApiHandler = (_req, res) => {
  res.status(200).json({ name: "John Doe" });
};

export default handler;
