const { NextResponse } = require("next/server");

export async function GET(req, { params }) {
  const apiKey = process.env.NEWS_API_KEY;
  const { cat } = await params;
  const url = `https://newsapi.org/v2/top-headlines?category=${cat}&country=us&apiKey=${apiKey}`;

  try {
    const res = await fetch(url);
    const data = await res.json();
    return NextResponse.json(data.articles);
  } catch (err) {
    return NextResponse.json({ msg: err });
  }
}
