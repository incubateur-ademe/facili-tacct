import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";

export const GET = async (req: Request) => {
  const url = new URL(req.url);
  const rawParams = url.searchParams.get("params"); 

  const METABASE_URL = process.env.METABASE_URL!;
  const METABASE_EMBEDDING_KEY = process.env.METABASE_EMBEDDING_KEY!;

  // Paramètres de filtres transmis au dashboard (facultatif)
  const params = rawParams ? JSON.parse(rawParams) : {};

  const payload = {
    resource: { dashboard: 4 },
    params,
    exp: Math.floor(Date.now() / 1000) + 60 * 10,
  };

  const token = jwt.sign(payload, METABASE_EMBEDDING_KEY);
  const embedUrl = `${METABASE_URL}/embed/dashboard/${token}#theme=transparent&bordered=false&titled=false`;

  return NextResponse.json({ embedUrl });
}
