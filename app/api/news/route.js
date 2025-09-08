import { NextResponse } from "next/server";

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const page = searchParams.get("page") || 1;
  const sortBy = searchParams.get("sortBy") || "publishedAt";
  const query = searchParams.get("q") || "us";
  const apiKey = process.env.NEWS_API_KEY;
  const url = `https://newsapi.org/v2/everything?q=${query}&language=en&page=${page}&pageSize=10&sortBy=${sortBy}&apiKey=${apiKey}`;

  try {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
    if (!data || !data.articles) {
      return NextResponse.json({ data: [], msg: "no more data" });
    }
    return NextResponse.json(data.articles);
  } catch (err) {
    return NextResponse.json({ error: err.message });
  }
}
